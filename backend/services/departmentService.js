import Department from '../models/department.js';

export default class DepartmentService {
    async getAllDepartments() {
        return Department.findAll();
    }

    async getDepartmentById(departmentId) {
        return Department.findByPk(departmentId);
    }

    async getDepartmentByUserId(userId) {
        return Department.findOne({ where: { userId } });
    }

    async createDepartment(departmentData) {
        return Department.create(departmentData);
    }

    async removeDepartment(departmentId) {
        return Department.destroy({ where: { id: departmentId } });
    }

    async updateDepartment(departmentId, departmentData) {
        return Department.update(departmentData, { where: { id: departmentId } });
    }
}