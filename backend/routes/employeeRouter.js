import express from "express";
import {verifyRole} from "../middlewares/roles.js";
import EmployeeService from "../services/employeeService.js";

const employeeRouter = express.Router();
const employeeService = new EmployeeService();

// READ
employeeRouter.get("/", async (req, res) => {
  const employees = await employeeService.getAllEmployees();
  res.json(employees);
});
employeeRouter.get("/:employeeId", async (req, res) => {
  const { employeeId } = req.params;
  const employee = await employeeService.getEmployeeById(employeeId);
  res.json(employee);
});
employeeRouter.get("/department/:departmentId", async (req, res) => {
  const { departmentId } = req.params;
  const employees = await employeeService.getEmployeeByDepartment(departmentId);
  res.json(employees);
});

// CREATE
employeeRouter.post("/addEmployee", verifyRole(["ADMIN"]), async (req, res) => {
  const employeeData = req.body;
  const employee = await employeeService.createEmployee(employeeData);
  res.json(employee);
});

// UPDATE
employeeRouter.put(
  "/update/:employeeId",
  verifyRole(["ADMIN"]),
  async (req, res) => {
    const { employeeId } = req.params;
    const employeeData = req.body;
    const updatedEmployee = await employeeService.updateEmployee(
      employeeId,
      employeeData
    );
    res.json(updatedEmployee);
  }
);

export default employeeRouter;
