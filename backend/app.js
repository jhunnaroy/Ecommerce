const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");
const errorMiddleware = require("./middleware/error");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// app.use(
//   cors({
//     origin: [
//       process.env.FRONTEND_URL,
      
//     ],
//     credentials: true,
//   })
// );
app.use(
  cors({
    origin: process.env.FRONTEND_URL, 
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

app.use("/api/v1", require("./routes/productRoute"));
app.use("/api/v1", require("./routes/userRoute"));
app.use("/api/v1", require("./routes/orderRoute"));
app.use("/api/v1", require("./routes/paymentRoute"));

app.use(errorMiddleware);

if (process.env.NODE_ENV === "PRODUCTION") {
  const buildPath = path.join(__dirname, "../frontend/dist");
  app.use(express.static(buildPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API running in development mode");
  });
}

module.exports = app;
