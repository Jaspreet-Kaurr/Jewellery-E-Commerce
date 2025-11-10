//  # Main entry point
// server/server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// const userRoutes = require("./routes/userRoutes");   


dotenv.config();


const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

// routes
// app.use("/api/users", userRoutes);


module.exports = app;


