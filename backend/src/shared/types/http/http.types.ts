import type { NextFunction, Request, Response } from "express";
import type { ClientKeysType } from "./client.types.js";
import type { ServerKeysType } from "./server.types.js";
import type { SuccessKeyTypes } from "./success.types.js";
import type { DefaultHTTPResponse } from "../../lib/http.js";

export type SuccessStatusType = 200 | 201;
export type ClientStatusType = 400 | 401 | 403 | 404 | 409;
export type ServerStatusType = 500;

export type StatusResponse = {
  message: string;
  code: string;
};

export type GetResponse = {
  status: SuccessStatusType | ClientStatusType | ServerStatusType;
  code: SuccessKeyTypes | ClientKeysType | ServerKeysType;
  message: string;
};

export type AsyncControllerType<P = unknown, ReqBody = unknown> = (
  req: Request<P, ReqBody>,
  res: Response,
  next: NextFunction,
) => Promise<void | DefaultHTTPResponse>;
