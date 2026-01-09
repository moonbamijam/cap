import { Router } from "express";
import { loginUser, signupUser } from "../controllers/user.controller.js";
import { catchAsync } from "../shared/utils/async.wrapper.js";

export const router: Router = Router();

router.post("/login", catchAsync(loginUser));
router.post("/signup", catchAsync(signupUser));

export default router;
