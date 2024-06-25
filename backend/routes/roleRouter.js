import express from "express";
import RoleService from "../services/roleService.js";

const roleRouter = express.Router();
const roleService = new RoleService();

roleRouter.get("", async (req, res) => {
  const roles = await roleService.getAllRoles();
  res.json(roles);
});

export default roleRouter;