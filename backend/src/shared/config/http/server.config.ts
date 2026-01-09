import type { ServerMapType } from "../../types/http/server.types.js";

export const SERVER_MAP: ServerMapType = {
  500: {
    SYS_INTERNAL_SERVER_ERROR: {
      message:
        "An unexpected error occurred on the server side. Please try again later.",
      code: "SYS_INTERNAL_SERVER_ERROR",
    },
    SYS_SOMETHING_WENT_WRONG: {
      message: "Something went wrong.",
      code: "SYS_SOMETHING_WENT_WRONG",
    },
  },
};
