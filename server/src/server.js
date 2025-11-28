import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import paymentRoutes from "./routes/payment.route.js"


dotenv.config();
const app = express();

// Middlewares
// app.use(cors());
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api", paymentRoutes);


// Start Server
const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


export default app;
