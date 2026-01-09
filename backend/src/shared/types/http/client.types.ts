import type { ClientStatusType, StatusResponse } from "./http.types.js";

export type ClientMapType = Record<
  ClientStatusType,
  Record<string, StatusResponse>
>;

export type ClientKeysType = keyof ClientMapType[ClientStatusType];
