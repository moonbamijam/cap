import type { Response } from "express";

export type DefaultHTTPResponse = Response<unknown, Record<string, unknown>>;
