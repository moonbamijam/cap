import { Router } from "express";
import {
  createPlatform,
  getPlatformBySlug,
  getPlatforms,
  updatePlatformById,
} from "../controllers/platform.controller.js";
import { catchAsync } from "../shared/utils/async.wrapper.js";

const router: Router = Router();

router.get("/", catchAsync(getPlatforms));
router.get("/:slug", catchAsync(getPlatformBySlug));

// should be blocked for unauthorized users
router.post("/", catchAsync(createPlatform));
router.put("/:id", catchAsync(updatePlatformById));

export default router;
