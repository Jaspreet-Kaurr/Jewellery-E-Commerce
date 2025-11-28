// controllers/user.controller.js
import User from "../models/user.model.js";

export const getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
};

export const updateUser = async (req, res) => {
  const { mobile, address } = req.body;

  const user = await User.findByIdAndUpdate(
    req.user.id,
    { mobile, address },
    { new: true }
  ).select("-password");

  res.json(user);
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
