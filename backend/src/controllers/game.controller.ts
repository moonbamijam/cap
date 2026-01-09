import type { Request, Response } from "express";
import GameModel from "../models/game.model.js";
import mongoose from "mongoose";
import {
  getClientErrorResponse,
  getSuccessResponse,
} from "../shared/utils/http-response.helper.js";
import type { CapGame } from "../shared/types/game.types.js";

export const getGames = async (req: Request, res: Response) => {
  const result = await GameModel.find();

  if (!result) {
    const error = getClientErrorResponse(404, "RES_GAME_NOT_FOUND");
    return res.status(error.status).json(error);
  }

  const success = getSuccessResponse(200, "OK");
  return res.status(success.status).json(result);
};

export const getGameBySlug = async (
  req: { params: CapGame },
  res: Response,
) => {
  const { slug } = req.params;

  if (!slug) {
    const error = getClientErrorResponse(400, "VAL_MISSING_SLUG_FIELD");
    return res.status(error.status).json(error);
  }

  const result = await GameModel.findOne({ slug });

  if (!result) {
    const error = getClientErrorResponse(404, "RES_GAME_NOT_FOUND");
    return res.status(error.status).json(error);
  }

  const success = getSuccessResponse(200, "OK");
  return res.status(success.status).json({ result, ...success });
};

export const createGame = async (req: { body: CapGame }, res: Response) => {
  const { banner, name, genres, slug } = req.body;

  const emptyFields = [];

  if (!banner) emptyFields.push("banner");
  if (!name) emptyFields.push("name");
  if (!genres || !genres.filter((item: string) => item !== "").length)
    emptyFields.push("genres");
  if (!slug) emptyFields.push("slug");

  if (emptyFields.length > 0) {
    console.log(emptyFields);
    const error = getClientErrorResponse(400, "VAL_MISSING_FIELD");
    return res.status(error.status).json({ ...error, emptyFields });
  }

  const isGameExist = await GameModel.isGameExist(slug);
  if (isGameExist) {
    const error = getClientErrorResponse(409, "RES_GAME_ALREADY_EXISTS");
    return res.status(error.status).json(error);
  }

  const result = await GameModel.create({ name, genres, banner, slug });

  if (!result) {
    const error = getClientErrorResponse(
      400,
      "BAD_REQUEST",
      "Cannot create a new game.",
    );
    return res.status(error.status).json(error);
  }

  const success = getSuccessResponse(201, "CREATED");
  return res.status(success.status).json({ result, ...success });
};

export const updateGameById = async (
  req: { body: CapGame; params: { id: string } },
  res: Response,
) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ error: "ID parameter is required" });
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Invalid game ID" });

  const result = await GameModel.findByIdAndUpdate(
    { _id: id },
    { ...req.body },
  );

  if (!result) {
    const error = getClientErrorResponse(404, "RES_GAME_NOT_FOUND");
    return res.status(error.status).json(error);
  }

  const success = getSuccessResponse(200, "OK");
  return res.status(success.status).json({ result, ...success });
};

export const deleteGameById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ error: "ID parameter is required" });
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Invalid game ID" });

  const result = await GameModel.findByIdAndDelete({ _id: id });

  if (!result) {
    const error = getClientErrorResponse(400, "RES_GAME_NOT_FOUND");
    return res.status(error.status).json(error);
  }

  const success = getSuccessResponse(200, "OK");
  return res.status(success.status).json(success);
};
