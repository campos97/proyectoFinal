import Event from "../models/event.js";

export default class EventService {
  async getEventsByEmployeeId(employeeId) {
    return Event.findAll({ where: { employeeId } });
  }

  async createEvent(eventData) {
    return Event.create(eventData);
  }

  async removeEvent(eventId) {
    return Event.destroy({ where: { id: eventId } });
  }
}