import type { Response } from "express";
import {
  getClientErrorResponse,
  getSuccessResponse,
} from "../shared/utils/http-response.utils.js";
import { UserModel } from "../models/user.model.js";
import type { CapUser } from "../shared/types/user.types.js";
import { createToken } from "../shared/utils/create-token.utils.js";

export const signupUser = async (req: { body: CapUser }, res: Response) => {
  const { username, email, password } = req.body;

  const emptyFields = [];

  if (!username) emptyFields.push("username");
  if (!email) emptyFields.push("email");
  if (!password) emptyFields.push("password");

  if (emptyFields.length > 0) {
    const error = getClientErrorResponse(400, "VAL_MISSING_FIELD");
    return res.status(error.status).json({ ...error, emptyFields });
  }

  const result = await UserModel.signup(username, email, password);

  if (!result) {
    const error = getClientErrorResponse(400, "AUTH_USER_CREATION_FAILED");
    return res.status(error.status).json(error);
  }

  const token = createToken(result._id);
  const success = getSuccessResponse(201, "USER_CREATED");
  return res.status(success.status).json({ ...success, token });
};

export const loginUser = async (req: { body: CapUser }, res: Response) => {
  const { username, password } = req.body;

  const emptyFields = [];

  if (!username) emptyFields.push("username");
  if (!password) emptyFields.push("password");

  if (emptyFields.length > 0) {
    const error = getClientErrorResponse(400, "VAL_MISSING_FIELD");
    return res.status(error.status).json({ ...error, emptyFields });
  }

  const result = await UserModel.login(username, password);

  if (!result) {
    const error = getClientErrorResponse(400, "AUTH_LOGIN_FAILED");
    return res.status(error.status).json(error);
  }

  const token = createToken(result._id);
  const success = getSuccessResponse(200, "USER_LOGGED_IN");
  return res.status(success.status).json({ ...success, username, token });
};
