const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");
const errorMiddleware = require("./middleware/error");

// ✅ Load ENV properly
require("dotenv").config({ path: "./backend/config/config.env" });

// ✅ Debug (check env loading)
console.log("FRONTEND_URL:", process.env.FRONTEND_URL);

 
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3001",
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

// Routes
app.use("/api/v1", require("./routes/productRoute"));
app.use("/api/v1", require("./routes/userRoute"));
app.use("/api/v1", require("./routes/orderRoute"));
app.use("/api/v1", require("./routes/paymentRoute"));

// Error Middleware
app.use(errorMiddleware);

// Production Setup
if (process.env.NODE_ENV === "PRODUCTION") {
  const buildPath = path.join(__dirname, "../frontend/dist");

  app.use(express.static(buildPath));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(buildPath, "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API running in development mode 🚀");
  });
}

module.exports = app;