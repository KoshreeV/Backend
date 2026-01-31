import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
  title: String,
  description: String,
  expiryDate: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Announcement", announcementSchema);
