import Announcement from "../Models/announcementModel.js";

// ADMIN
export const createAnnouncement = async (req, res) => {
  await Announcement.create(req.body);
  res.json({ message: "Announcement created" });
};

// EMPLOYEE
export const getActiveAnnouncements = async (req, res) => {
  const today = new Date();

  const announcements = await Announcement.find({
    expiryDate: { $gte: today }
  });

  res.json(announcements);
};
