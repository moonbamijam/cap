import type { SuccessMapTypes } from "../../types/http/success.types.js";

export const SUCCESS_MAP: SuccessMapTypes = {
  200: {
    OK: {
      message: "Request processed successfully.",
      code: "OK",
    },
    USER_LOGGED_IN: {
      message: "User logged in successfully.",
      code: "USER_LOGGED_IN",
    },
  },
  201: {
    CREATED: {
      message: "Created successfully.",
      code: "CREATED",
    },
    USER_CREATED: {
      message: "User created successfully.",
      code: "USER_CREATED",
    },
  },
};
