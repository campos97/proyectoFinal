import Advise from "../models/advise.js";

export default class AdviseService {
  async getAllAdvises() {
    return Advise.findAll();
  }

  async getAdviseById(adviseId) {
    return Advise.findByPk(adviseId);
  }

  async getAdviseByUserId(userId) {
    return Advise.findOne({ where: { userId } });
  }

  async createAdvise(adviseData) {
    return Advise.create(adviseData);
  }

  async removeAdvise(adviseId) {
    return Advise.destroy({ where: { id: adviseId } });
  }

  async updateAdvise(adviseId, adviseData) {
    return Advise.update(adviseData, { where: { id: adviseId } });
  }
}