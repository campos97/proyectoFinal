import Position from "../models/position.js";

export default class PositionService {
  async getPositions() {
    return Position.findAll();
  }

  async getPositionById(positionId) {
    return Position.findByPk(positionId);
  }

  async createPosition(positionData) {
    return Position.create(positionData);
  }

  async removePosition(positionId) {
    return Position.destroy({ where: { id: positionId } });
  }

  async updatePosition(positionId, positionData) {
    return Position.update(positionData, { where: { id: positionId } });
  }
}