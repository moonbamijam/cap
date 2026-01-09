import { Router } from "express";
import {
  createGame,
  deleteGameById,
  getGameBySlug,
  getGames,
  updateGameById,
} from "../controllers/game.controller.js";
import { catchAsync } from "../shared/utils/async.wrapper.js";

const router: Router = Router();

router.get("/", catchAsync(getGames));
router.get("/:slug", catchAsync(getGameBySlug));

// should be blocked for not authorized users
router.post("/", catchAsync(createGame));
router.put("/:id", catchAsync(updateGameById));
router.delete("/:id", catchAsync(deleteGameById));

export default router;
