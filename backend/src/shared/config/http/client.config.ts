import type { ClientMapType } from "../../types/http/client.types.js";

export const CLIENT_MAP: ClientMapType = {
  400: {
    // Generic Client Errors
    BAD_REQUEST: {
      message:
        "The request could not be processed due to invalid syntax or missing required parameters.",
      code: "BAD_REQUEST",
    },

    // Validation Errors
    VAL_MISSING_SLUG_FIELD: {
      message: "Slug parameter is required.",
      code: "VAL_MISSING_SLUG_FIELD",
    },
    VAL_MISSING_FIELD: {
      message: "A field is missing or empty.",
      code: "VAL_MISSING_FIELD",
    },
    VAL_MISSING_ID: {
      message: "ID is required.",
      code: "VAL_MISSING_ID",
    },
    VAL_INVALID_ID: {
      message: "Invalid platform ID, please double check the ID.",
      code: "VAL_INVALID_ID",
    },
    VAL_INVALID_CREDENTIALS: {
      message: "The provided credentials are invalid.",
      code: "VAL_INVALID_CREDENTIALS",
    },
    VAL_RESERVED_USERNAME: {
      message: "The chosen username is reserved and cannot be used.",
      code: "VAL_RESERVED_USERNAME",
    },
    VAL_BANNED_USERNAME: {
      message: "The chosen username is banned and cannot be used.",
      code: "VAL_BANNED_USERNAME",
    },
    VAL_USERNAME_NOT_LOWERCASE: {
      message: "Username must be lowercased letters.",
      code: "VAL_USERNAME_NOT_LOWERCASE",
    },
    VAL_INVALID_USERNAME_LENGTH: {
      message: "Username must be between 3 and 25 characters long.",
      code: "VAL_INVALID_USERNAME_LENGTH",
    },
    VAL_INVALID_EMAIL: {
      message: "Email is not valid.",
      code: "VAL_INVALID_EMAIL",
    },
    VAL_PASSWORD_TOO_SHORT: {
      message: "The provided password is too short (8 characters minimum).",
      code: "VAL_PASSWORD_TOO_SHORT",
    },
    VAL_PASSWORD_NOT_STRONG: {
      message: "Password is not strong enough.",
      code: "VAL_PASSWORD_NOT_STRONG",
    },
    VAL_USER_ALREADY_EXISTS: {
      message: "A user with the provided username already exists.",
      code: "VAL_USER_ALREADY_EXISTS",
    },

    // Authentication & Authorization Errors
    AUTH_USER_CREATION_FAILED: {
      message: "Failed to create a new user.",
      code: "AUTH_USER_CREATION_FAILED",
    },
    AUTH_INVALID_EMAIL: {
      message: "Email is not valid.",
      code: "AUTH_INVALID_EMAIL",
    },
    AUTH_INVALID_PASSWORD: {
      message: "The provided password is incorrect.",
      code: "AUTH_INVALID_PASSWORD",
    },
    AUTH_LOGIN_FAILED: {
      message: "Login attempt failed.",
      code: "AUTH_LOGIN_FAILED",
    },
  },
  401: {
    UNAUTHORIZED: {
      message: "Authentication is required and has failed.",
      code: "UNAUTHORIZED",
    },
  },
  403: {
    AUTH_ADMIN_ONLY: {
      message: "This domain is for admins only.",
      code: "AUTH_ADMIN_ONLY",
    },
    AUTH_FORBIDDEN: {
      message: "You do not have the necessary permissions to access this.",
      code: "AUTH_FORBIDDEN",
    },
  },
  404: {
    RES_NOT_FOUND: {
      message: "The requested resource could not be found.",
      code: "RES_NOT_FOUND",
    },
    RES_GAME_NOT_FOUND: {
      message: "Game not found.",
      code: "RES_GAME_NOT_FOUND",
    },
    RES_PLATFORM_NOT_FOUND: {
      message: "Platform not found.",
      code: "RES_PLATFORM_NOT_FOUND",
    },
    RES_USER_NOT_FOUND: {
      message: "This user doesn't exist.",
      code: "RES_USER_NOT_FOUND",
    },
  },
  409: {
    VAL_USER_ALREADY_EXISTS: {
      message: "A user with the provided username already exists.",
      code: "VAL_USER_ALREADY_EXISTS",
    },
    RES_GAME_ALREADY_EXISTS: {
      message: "This game already exists.",
      code: "RES_GAME_ALREADY_EXISTS",
    },
    RES_PLATFORM_ALREADY_EXISTS: {
      message: "This platform already exists.",
      code: "RES_PLATFORM_ALREADY_EXISTS",
    },
  },
};
