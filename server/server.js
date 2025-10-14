//  # Main entry point
// server/server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
// const userRoutes = require("./routes/userRoutes");   


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// routes
// app.use("/api/users", userRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
