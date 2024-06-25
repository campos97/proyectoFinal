import express from "express";
import DepartmentService from "../services/departmentService.js";

const departmentRouter = express.Router();
const departmentService = new DepartmentService();

// READ
departmentRouter.get("/", async (req, res) => {
  const departments = await departmentService.getAllDepartments();
  res.json(departments);
});

departmentRouter.get("/:departmentId", async (req, res) => {
    const { departmentId } = req.params;
    const department = await departmentService.getDepartmentById(departmentId);
    res.json(department);
});

export default departmentRouter;