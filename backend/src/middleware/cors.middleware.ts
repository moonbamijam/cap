import cors, { type CorsOptions } from "cors";
import { FRONTEND_URL, BACKEND_URL } from "../shared/config/env/env.config.js";
import { cleanURL } from "../shared/utils/clean-url.utils.js";

const ALLOWED_ORIGINS: string[] = [
  cleanURL(BACKEND_URL),
  cleanURL(FRONTEND_URL),
];

const corsOptions: CorsOptions = {
  origin: ALLOWED_ORIGINS,

  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],

  credentials: true,
};

export const corsMiddleware = cors(corsOptions);
