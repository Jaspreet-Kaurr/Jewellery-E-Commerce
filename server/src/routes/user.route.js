// Contains API routes that map URLs to controller functions.   


import express from "express";
// import { register, login } from "../controllers/auth.controller.js";
import { auth as authMiddleware } from "../middlewares/auth.middleware.js";
import User from "../models/user.model.js";
import Order from "../models/order.model.js";

const router = express.Router();

// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });   // public/uploads


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


router.get("/orders", authMiddleware, async (req, res) => {
  const orders = await Order.find({ userId: req.user.id });
  res.json(orders);
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

// router.put("/update-profile", authMiddleware, upload.single("profileImage"), async (req, res) => {
//   try {
//     const updates = req.body;
//     if (req.file) {
//       updates.profileImage = `/uploads/${req.file.filename}`;
//     }
//     const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true }).select("-password");
//     res.json({ message: "Profile updated", user });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error });
//   }
// });

export default router;