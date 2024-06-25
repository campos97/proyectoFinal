import Record from "../models/record.js";

export default class RecordService {
  async getAllRecords() {
    return Record.findAll();
  }

  // get all last day records by employeeId
  async getAllLastDayRecordsByEmployeeId(employeeId) {
    return Record.findAll({
      where: {
        employeeId,
        createdAt: { $gt: new Date(new Date() - 24 * 60 * 60 * 1000) },
      },
    });
  }

  async getRecordById(recordId) {
    return Record.findByPk(recordId);
  }

  async getLastRecordByEmployeeId(employeeId) {
    return Record.findOne({
      where: { employeeId },
      order: [["createdAt", "DESC"]],
    });
  }

  async getRecordByEmployeeId(employeeId) {
    return Record.findOne({ where: { employeeId } });
  }

  async createRecord(recordData) {
    return Record.create(recordData);
  }

  async removeRecord(recordId) {
    return Record.destroy({ where: { id: recordId } });
  }

  async updateRecord(recordId, recordData) {
    return Record.update(recordData, { where: { id: recordId } });
  }
}
