import express from "express";
import type { Express } from "express";
import { corsMiddleware } from "./middleware/cors.middleware.js";

// Routes
import GameRoutes from "./routes/game.routes.js";
import PlatformRoutes from "./routes/platform.routes.js";
import UserRoutes from "./routes/user.routes.js";

const app: Express = express();
app.use(corsMiddleware);
app.use(express.json());

app.use("/api/games", GameRoutes);
app.use("/api/platforms", PlatformRoutes);
app.use("/api/user", UserRoutes);

export default app;
