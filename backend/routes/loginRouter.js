import express from "express";

import EmployeeService from "../services/employeeService.js";

const loginRouter = express.Router();
const employeeService = new EmployeeService();

// LOGIN

loginRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const result = await employeeService.login(username, password);
  res.json(result);
});

export default loginRouter;
