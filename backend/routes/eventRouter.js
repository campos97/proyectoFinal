import express from "express";
import EventService from "../services/eventService.js";
import { verifyRole } from "../middlewares/roles.js";

const eventRouter = express.Router();
const eventService = new EventService();

// READ

eventRouter.get("/employee/:employeeId", async (req, res) => {
  const { employeeId } = req.params;
  const event = await eventService.getEventsByEmployeeId(employeeId);
  res.json(event);
});

// CREATE

eventRouter.post("/addEvent", verifyRole(["ADMIN"]),async (req, res) => {
  const eventData = req.body;
  const event = await eventService.createEvent(eventData);
  res.json(event);
});

// DELETE

eventRouter.delete("/delete/:eventId",verifyRole(["ADMIN"]), async (req, res) => {
  const { eventId } = req.params;
  await eventService.removeEvent(eventId);
  res.json({ message: "Event removed" });
});

export default eventRouter;