import bcrypt from "bcrypt";
import validator from "validator";
import type { CapUserDocument } from "../../shared/types/user.types.js";
import type { Model } from "mongoose";
import {
  BANNED_USERNAMES_SET,
  RESERVED_USERNAMES_SET,
} from "../../shared/config/usernames.config.js";
import { getClientErrorResponse } from "../../shared/utils/http-response.utils.js";
import { CapError } from "../../shared/lib/error.js";

export const userStatics = {
  async signup(
    this: Model<CapUserDocument>,
    username: string,
    email: string,
    password: string,
  ): Promise<CapUserDocument> {
    const doesUserExist = await this.findOne({ username });

    if (doesUserExist) {
      const error = getClientErrorResponse(409, "VAL_USER_ALREADY_EXISTS");
      console.log(error.message, "af;dskj;adsj;faj");
      throw new CapError(error.status, error.code, error.message);
    }

    switch (true) {
      case RESERVED_USERNAMES_SET.has(username.toLowerCase().trim()): {
        const error = getClientErrorResponse(400, "VAL_RESERVED_USERNAME");
        throw new CapError(error.status, error.code, error.message);
      }
      case BANNED_USERNAMES_SET.has(username.toLowerCase().trim()): {
        const error = getClientErrorResponse(400, "VAL_BANNED_USERNAME");
        throw new CapError(error.status, error.code, error.message);
      }
    }

    if (!validator.isLowercase(username)) {
      const error = getClientErrorResponse(400, "VAL_USERNAME_NOT_LOWERCASE");
      throw new CapError(error.status, error.code, error.message);
    }

    if (!validator.isLength(username, { min: 3, max: 25 })) {
      const error = getClientErrorResponse(400, "VAL_INVALID_USERNAME_LENGTH");
      throw new CapError(error.status, error.code, error.message);
    }

    if (email && !validator.isEmail(email)) {
      const error = getClientErrorResponse(400, "VAL_INVALID_EMAIL");
      throw new CapError(error.status, error.code, error.message);
    }

    if (!validator.isLength(password, { min: 8 })) {
      const error = getClientErrorResponse(400, "VAL_PASSWORD_TOO_SHORT");
      throw new CapError(error.status, error.code, error.message);
    }

    if (!validator.isStrongPassword(password, { minUppercase: 0 })) {
      const error = getClientErrorResponse(400, "VAL_PASSWORD_NOT_STRONG");
      throw new CapError(error.status, error.code, error.message);
    }

    const salt = await bcrypt.genSalt(15);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.create({
      username,
      password: hashedPassword,
      email,
    });

    return user;
  },

  async login(
    this: Model<CapUserDocument>,
    username: string,
    password: string,
  ): Promise<CapUserDocument> {
    const user = await this.findOne({ username });

    if (!user) {
      const error = getClientErrorResponse(404, "RES_USER_NOT_FOUND");
      throw new CapError(error.status, error.code, error.message);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      const error = getClientErrorResponse(400, "AUTH_INVALID_PASSWORD");
      throw new CapError(error.status, error.code, error.message);
    }

    return user;
  },
};
