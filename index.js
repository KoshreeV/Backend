import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./Database/connection.js";
import authRouter from "./Routers/authRouter.js";
import announcementRouter from "./Routers/announcementRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// CORS FIX
app.use(cors({
  origin: [
    "http://127.0.0.1:5500",
    "http://localhost:5500"
  ],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "Server running on port 8080" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/announcements", announcementRouter);

app.listen(PORT, () => {
  connectDB();
  console.log("Server running on port", PORT);
});