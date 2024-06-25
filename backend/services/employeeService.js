import Employee from "../models/employee.js";
import Skill from "../models/skill.js";
import Password from "../models/password.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Profile from "../models/profile.js";
import EmployeeSkill from "../models/employeeSkill.js";

export default class EmployeeService {
  async getEmployeeById(employeeId) {
    return Employee.findByPk(employeeId);
  }

  async getEmployeeByDepartment(departmentId) {
    return Employee.findAll({ where: { departmentId } });
  }

  async getAllEmployees() {
    return Employee.findAll();
  }

  async createEmployee(employeeData) {
    const newEmployee = await Employee.create(employeeData);

    // Crea un profile para el empleado
    const imagedata = null;
    const imagetype = null;
    Profile.create({ imagedata, imagetype, employeeId: newEmployee.id });

    // Crea un password para el empleado
    const password = bcrypt.hashSync("Password99", 10);
    Password.create({ employeeId: newEmployee.id, password });

    return newEmployee;
  }

  async removeEmployee(employeeId) {
    return Employee.destroy({ where: { id: employeeId } });
  }

  async updateEmployee(employeeId, employeeData) {
    return Employee.update(employeeData, { where: { id: employeeId } });
  }

  //  obtener los nombres de las skills de un empleado
  async getSkillsByEmployeeId(employeeId) {
    const employee = await Employee.findByPk(employeeId, {
      include: {
        model: Skill,
        through: { attributes: [] }, // Excluye la tabla intermedia de los resultados
      },
    });

    return employee ? employee.Skills : null; // Devuelve solo las skills
  }

  // añadir skill a un empleado
  async addSkillToEmployee(employeeId, skillId) {
    const employee = await Employee.findByPk(employeeId);
    const skill = await Skill.findByPk(skillId);

    if (!employee || !skill) {
      return null;
    }

    // comprobar que no tenga ya la skill
    const existingSkill = await EmployeeSkill.findOne({
      where: { EmployeeId: employeeId, SkillId: skillId },
    });

    if (existingSkill) {
      return null;
    }

    return EmployeeSkill.create({ EmployeeId: employeeId, SkillId: skillId });
  }

  //  obtener el password de un empleado
  async getPasswordByEmployeeId(employeeId) {
    return Password.findByPk(employeeId);
  }

  //  actualizar el password de un empleado
  async updatePassword(employeeId, passwordData) {
    return Password.update(await bcrypt.hash(passwordData.password, 10), {
      where: { employeeId },
    });
  }

  // crear un password para un empleado
  async createPassword(passwordData) {
    return Password.create(await bcrypt.hash(passwordData.password, 10));
  }

  // LOGIN
  async login(username, password) {
    // Busca al empleado por su nombre de usuario
    const employee = await Employee.findOne({ where: { username } });
    if (!employee) {
      return { message: "Employee not found" };
    }

    // Obtiene la contraseña almacenada en la base de datos
    const passwordData = await this.getPasswordByEmployeeId(employee.id);
    
    // Compara la contraseña ingresada con la almacenada en la base de datos
    const validPassword = await bcrypt.compare(password, passwordData.password);

    if (!validPassword) {
      return { message: "Invalid password" };
    }

    // Genera el token JWT
    const token = await jwt.sign({ id: employee.id }, process.env.JWT_SECRET);

    // Devuelve el empleado y el token
    return { employee, token, message: "Login successful"};
  }
}
