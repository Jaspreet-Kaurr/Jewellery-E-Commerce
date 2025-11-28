// # Auth,JWT check, error handler, etc. 
// Code that runs before hitting the controller (e.g., auth check).


import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user data
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
