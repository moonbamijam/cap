import type { RequestHandler } from "express";
import { getServerErrorResponse } from "./http-response.utils.js";
import { CapError } from "../lib/error.js";
import type { AsyncControllerType } from "../types/http/http.types.js";

export const catchAsync = <P = unknown, ReqBody = unknown>(
  fn: AsyncControllerType<P, ReqBody>,
): RequestHandler<P> => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
      console.log("");
      console.log("CATCH ASYNC FOUND AN ERROR!");
      console.error(error);
      console.log("");

      if (error instanceof CapError) {
        return res.status(error.status).json({
          status: error.status,
          message: error.message,
          code: error.code,
        });
      } else {
        const serverError = getServerErrorResponse(
          500,
          "SYS_SOMETHING_WENT_WRONG",
        );
        return res.status(500).json(serverError);
      }
    });
  };
};
