import { checkEnv } from "../utils/check-env.utils.js";

export const MONGODB_URI: string = checkEnv("MONGODB_URI");
export const PORT: string = checkEnv("PORT");
export const BACKEND_URL: string = checkEnv("BACKEND_URL");
export const FRONTEND_URL: string = checkEnv("FRONTEND_URL");
export const JWTSECRET: string = checkEnv("JWTSECRET");
