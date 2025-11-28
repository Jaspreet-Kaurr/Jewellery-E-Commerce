// Contains API routes that map URLs to controller functions.   


// routes/user.route.js
import express from "express";
import { auth as authMiddleware } from "../middlewares/auth.middleware.js";

import {
  getProfile,
  updateUser,
  getMe,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile", authMiddleware, getProfile);

router.put("/update", authMiddleware, updateUser);

router.get("/me", authMiddleware, getMe);

export default router;
