import type { ServerStatusType, StatusResponse } from "./http.types.js";

export type ServerMapType = Record<
  ServerStatusType,
  Record<string, StatusResponse>
>;

export type ServerKeysType = keyof ServerMapType[ServerStatusType];
