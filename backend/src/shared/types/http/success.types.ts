import type { StatusResponse, SuccessStatusType } from "./http.types.js";

export type SuccessMapTypes = Record<
  SuccessStatusType,
  Record<string, StatusResponse>
>;

export type SuccessKeyTypes = keyof SuccessMapTypes[SuccessStatusType];
