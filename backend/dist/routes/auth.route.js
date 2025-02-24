import express from "express";
import { signup } from "../controllers/auth.controller.js";
import { login, logout, getMe } from "../controllers/auth.controller.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();
//the prefix will be /api/auth/...this is the parent route for all
router.get("/me", protectRoute, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
export default router;
