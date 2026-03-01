import express from "express";
import authMiddleware from "../Middleware/authMiddleware.js";
import { adminOnly } from "../Middleware/roleMiddleware.js";

import {
  createAnnouncement,
  getActiveAnnouncements,
  updateAnnouncement,
  deleteAnnouncement
} from "../Controller/announcementController.js";

const router = express.Router();
// ADMIN - Create
router.post("/", authMiddleware, adminOnly, createAnnouncement);
// EMPLOYEE - Get Active
router.get("/", authMiddleware, getActiveAnnouncements);
// ADMIN - Update
router.put("/:id", authMiddleware, adminOnly, updateAnnouncement);
// ADMIN - Delete
router.delete("/:id", authMiddleware, adminOnly, deleteAnnouncement);

export default router;