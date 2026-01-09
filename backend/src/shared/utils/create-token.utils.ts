import jwt from "jsonwebtoken";
import { JWTSECRET } from "../config/env.config.js";
import { Types } from "mongoose";

export const createToken = (_id: Types.ObjectId) => {
  return jwt.sign({ _id }, JWTSECRET);
};
