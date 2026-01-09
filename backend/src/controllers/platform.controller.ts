import type { Request, Response } from "express";
import PlatformModel from "../models/platform.model.js";
import mongoose from "mongoose";
import {
  getClientErrorResponse,
  getSuccessResponse,
} from "../shared/utils/http-response.utils.js";

export const getPlatforms = async (req: Request, res: Response) => {
  const result = await PlatformModel.find();

  if (!result) {
    const error = getClientErrorResponse(404, "RES_PLATFORM_NOT_FOUND");
    return res.status(error.status).json(error);
  }

  const success = getSuccessResponse(200, "OK");
  return res.status(success.status).json({ result, ...success });
};

export const getPlatformBySlug = async (req: Request, res: Response) => {
  const { slug } = req.params;

  if (!slug) {
    const error = getClientErrorResponse(400, "VAL_MISSING_SLUG_FIELD");
    return res.status(error.status).json(error);
  }

  const result = await PlatformModel.findOne({ slug });

  if (!result) {
    const error = getClientErrorResponse(404, "RES_PLATFORM_NOT_FOUND");
    return res.status(error.status).json(error);
  }

  const success = getSuccessResponse(200, "OK");
  return res.status(success.status).json({ result, ...success });
};

export const createPlatform = async (req: Request, res: Response) => {
  const { name, banner, slug } = req.body;

  const result = await PlatformModel.create({ name, banner, slug });

  if (!result) {
    const error = getClientErrorResponse(400, "VAL_MISSING_FIELD");
    return res.status(error.status).json(error);
  }

  const success = getSuccessResponse(201, "CREATED");
  return res.status(success.status).json({ result, ...success });
};

export const updatePlatformById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    const error = getClientErrorResponse(400, "VAL_MISSING_ID");
    return res.status(error.status).json(error);
  }
  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = getClientErrorResponse(400, "VAL_INVALID_ID");
    return res.status(error.status).json(error);
  }

  const result = await PlatformModel.findByIdAndUpdate(
    { _id: id },
    { ...req.body },
  );

  if (!result) {
    const error = getClientErrorResponse(404, "RES_PLATFORM_NOT_FOUND");
    return res.status(error.status).json(error);
  }

  const success = getSuccessResponse(200, "OK");
  return res.status(success.status).json({ result, ...success });
};
