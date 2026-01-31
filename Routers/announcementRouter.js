import express from "express";
import authMiddleware from "../Middleware/authMiddleware.js";
import {
  createAnnouncement,
  getActiveAnnouncements
} from "../Controller/announcementController.js";

const router = express.Router();

// ADMIN only
router.post("/", authMiddleware, (req, res, next) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
}, createAnnouncement);

// EMPLOYEE
router.get("/", authMiddleware, getActiveAnnouncements);

export default router;
