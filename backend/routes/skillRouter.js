import express from "express";
import {verifyRole} from "../middlewares/roles.js";
import SkillService from "../services/skillService.js";
import EmployeeService from "../services/employeeService.js";

const skillRouter = express.Router();

const skillService = new SkillService();
const employeeService = new EmployeeService();

// READ
skillRouter.get("", async (req, res) => {
  const skills = await skillService.getAllSkills();
  res.json(skills);
});

skillRouter.get("/:skillId", async (req, res) => {
  const { skillId } = req.params;
  const skill = await skillService.getSkillById(skillId);
  res.json(skill);
});

skillRouter.get("/employee/:employeeId", async (req, res) => {
  const { employeeId } = req.params;
  const skills = await employeeService.getSkillsByEmployeeId(employeeId);
  if (skills) {
    res.json(skills);
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
});

// CREATE

skillRouter.post("/addSkill", verifyRole(["ADMIN"]), async (req, res) => {
  const skillData = req.body;
  const skill = await skillService.createSkill(skillData);
  res.json(skill);
});

skillRouter.post(
  "/addSkillToEmployee",
  verifyRole(["ADMIN"]),
  async (req, res) => {
    const { employeeId, skillId } = req.body;
    const skill = await employeeService.addSkillToEmployee(employeeId, skillId);
    res.json(skill);
  }
);

export default skillRouter;
