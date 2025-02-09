import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { sendMessage, getMessage, getUserConvoBar } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/conversations", protectRoute, getUserConvoBar);
router.post("/send/:id", protectRoute, sendMessage); //protect the route and only auth users can send messages.
router.get("/:id", protectRoute, getMessage);

export default router;
 
