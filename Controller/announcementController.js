import Announcement from "../Models/announcementModel.js";

// ADMIN - Create Announcement
export const createAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.create(req.body);

    res.status(201).json({
      message: "Announcement created successfully",
      announcement
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// EMPLOYEE - Get Active Announcements
export const getActiveAnnouncements = async (req, res) => {
  try {
    const today = new Date();

    const announcements = await Announcement.find({
      expiryDate: { $gte: today }
    }).sort({ createdAt: -1 });

    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN - Update Announcement
export const updateAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Announcement.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Announcement not found" });
    }

    res.status(200).json({
      message: "Announcement updated successfully",
      updated
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN - Delete Announcement
export const deleteAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Announcement.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Announcement not found" });
    }

    res.status(200).json({
      message: "Announcement deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};