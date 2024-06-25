import express from "express";
import ProfileService from "../services/profileService.js";
import multer from "multer";

const profileRouter = express.Router();
const profileService = new ProfileService();
const upload = multer({ storage: multer.memoryStorage() });

profileRouter.get("/:profileId", async (req, res) => {
  const { profileId } = req.params;
  const profile = await profileService.getProfileById(profileId);
  res.json(profile);
});

// get profile by employeeId
profileRouter.get("/employee/:employeeId", async (req, res) => {
  const { employeeId } = req.params;
  const profile = await profileService.getProfileByEmployeeId(employeeId);
  res.json(profile);
});

profileRouter.get("/employee/:employeeId", async (req, res) => {
  const { employeeId } = req.params;
  const profile = await profileService.getProfileByEmployeeId(employeeId);
  res.json(profile);
});

// update where employeeId = employeeId
profileRouter.put(
  "/update",
  upload.single("file"),
  async (req, res) => {
    try {
      const { employeeId } = req.body;
      const { buffer, mimetype } = req.file;
      const profileData = {
        imagedata: buffer,
        imagetype: mimetype,
        employeeId: parseInt(employeeId),
      };

      const profile = await profileService.updateProfileByEmployeeId(
        profileData
      );
      res.json(profile);
    } catch (error) {
      console.error("Error updating profile:", error);
      res.status(500).json({ message: "Failed to update profile" });
    }
  }
);

export default profileRouter;
