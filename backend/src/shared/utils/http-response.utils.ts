import { CLIENT_MAP } from "../config/http/client.config.js";
import { SUCCESS_MAP } from "../config/http/success.config.js";
import { SERVER_MAP } from "../config/http/server.config.js";
import type { ClientKeysType } from "../types/http/client.types.js";
import type { SuccessKeyTypes } from "../types/http/success.types.js";
import type {
  ClientStatusType,
  GetResponse,
  ServerStatusType,
  SuccessStatusType,
} from "../types/http/http.types.js";
import type { ServerKeysType } from "../types/http/server.types.js";

export const getSuccessResponse = (
  status: SuccessStatusType,
  code: SuccessKeyTypes,
  message?: string,
): GetResponse => {
  const statusResult = SUCCESS_MAP[status];

  const result = statusResult?.[code];

  if (!result)
    throw new Error("Success response not found in the SUCCESS_MAP.");

  return {
    status: status,
    message: message || result.message,
    code: result.code,
  };
};

export const getClientErrorResponse = (
  status: ClientStatusType,
  code: ClientKeysType,
  message?: string,
): GetResponse => {
  const statusResult = CLIENT_MAP[status];

  const result = statusResult?.[code];

  if (!result) throw new Error("Error response not found in the CLIENT_MAP.");

  return {
    status: status,
    message: message || result.message,
    code: result.code,
  };
};

export const getServerErrorResponse = (
  status: ServerStatusType,
  code: ServerKeysType,
  message?: string,
): GetResponse => {
  const statusResult = SERVER_MAP[status];

  const result = statusResult?.[code];

  if (!result) throw new Error("Error response not found in the SERVER_MAP.");

  return {
    status: status,
    message: message || result.message,
    code: result.code,
  };
};
