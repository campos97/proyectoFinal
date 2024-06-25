import Password from "../models/password.js";
import bcrypt from "bcrypt";

export default class PasswordService {
  async getPasswordByEmployeeId(employeeId) {
    return Password.findByPk(employeeId);
  }

  async createPassword(passwordData) {
    return Password.create(passwordData);
  }

  async removePassword(employeeId) {
    return Password.destroy({ where: { employeeId } });
  }

  async updatePassword(passwordData) {
    const bcryptPassword = await bcrypt.hash(passwordData.password, 10);
    const newPasswordData = {
      password: bcryptPassword,
      employeeId: passwordData.employeeId,
    };

    return Password.update(newPasswordData, { where: { employeeId: passwordData.employeeId } });
  }
}
