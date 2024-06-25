import express from "express";
import RecordService from "../services/recordService.js";

const recordRouter = express.Router();
const recordService = new RecordService();

// READ

// get last record by employeeId
recordRouter.get("/last/:employeeId", async (req, res) => {
  const { employeeId } = req.params;
  const record = await recordService.getLastRecordByEmployeeId(employeeId);

  if (record) {
    res.json(record);
  } else {
    res.status(404).json({ message: "Record not found" });
  }
});

// get all last day records by employeeId
recordRouter.get("/lastDay/:employeeId", async (req, res) => {
  const { employeeId } = req.params;
  const record = await recordService.getAllLastDayRecordsByEmployeeId(
    employeeId
  );

  if (record) {
    res.json(record);
  } else {
    res.status(404).json({ message: "Record not found" });
  }
});

// CREATE

recordRouter.post("/addRecord", async (req, res) => {
  const recordData = req.body;
  const record = await recordService.createRecord(recordData);
  res.json(record);
});

export default recordRouter;
