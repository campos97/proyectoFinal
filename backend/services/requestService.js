import Request from "../models/request.js";

export default class RequestService {
  async getAllRequests() {
    return Request.findAll();
  }

  async getRequestById(requestId) {
    return Request.findByPk(requestId);
  }

  async getRequestsByEmployeeId(sender) {
    return Request.findAll({ where: { sender } });
  }

  async createRequest(requestData) {
    return Request.create(requestData);
  }

  async removeRequest(requestId) {
    return Request.destroy({ where: { id: requestId } });
  }

  async updateRequest(requestId, requestData) {
    return Request.update(requestData, { where: { id: requestId } });
  }
}
