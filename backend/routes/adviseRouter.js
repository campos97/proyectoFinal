import express from "express";
import AdviseService from "../services/adviseService.js";
import { verifyRole } from "../middlewares/roles.js";

const adviseRouter = express.Router();
const adviseService = new AdviseService();

// READ
adviseRouter.get("/", async (req, res) => {
  const advises = await adviseService.getAllAdvises();
  res.json(advises);
});

adviseRouter.get("/:adviseId", async (req, res) => {
  const { adviseId } = req.params;
  const advise = await adviseService.getAdviseById(adviseId);
  res.json(advise);
});

// CREATE

adviseRouter.post("/addAdvise", verifyRole(["ADMIN"]), async (req, res) => {
  const adviseData = req.body;
  const advise = await adviseService.createAdvise(adviseData);
  res.json(advise);
});

// DELETE

adviseRouter.delete("/delete/:adviseId",verifyRole(["ADMIN"]), async (req, res) => {
  const { adviseId } = req.params;
  await adviseService.removeAdvise(adviseId);
  res.json({ message: "Advise removed" });
});

export default adviseRouter;
