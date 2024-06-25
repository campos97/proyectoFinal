import Role from "../models/role.js";

export default class RoleService {
  async getAllRoles() {
    return Role.findAll();
  }
  
  async getRoleById(roleId) {
    return Role.findByPk(roleId);
  }

  async createRole(roleData) {
    return Role.create(roleData);
  }

  async updateRole(roleId, roleData) {
    return Role.update(roleData, { where: { id: roleId } });
  }

  async removeRole(roleId) {
    return Role.destroy({ where: { id: roleId } });
  }
}