import sequelize from "../config/database.js";
import Employee from "./employee.js";
import Skill from "./skill.js";

const EmployeeSkill = sequelize.define("EmployeeSkill", {});

Employee.belongsToMany(Skill, { through: EmployeeSkill, onDelete: "CASCADE"});
Skill.belongsToMany(Employee, { through: EmployeeSkill, onDelete: "CASCADE"});

export default EmployeeSkill;
