// Contains API routes that map URLs to controller functions.   


import express from "express";
import { auth as authMiddleware } from "../middlewares/auth.middleware.js";
import User from "../models/user.model.js";
const router = express.Router();



router.get("/profile", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});


router.put("/update", authMiddleware, async (req, res) => {
  const { mobile, address } = req.body;

  const user = await User.findByIdAndUpdate(
    req.user.id,
    { mobile, address },
    { new: true }
  ).select("-password");

  res.json(user);
});



router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


export default router;