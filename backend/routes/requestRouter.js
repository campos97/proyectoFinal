import express from "express";
import RequestService from "../services/requestService.js";

const requestRouter = express.Router();
const requestService = new RequestService();

// READ
requestRouter.get("/", async (req, res) => {
  const requests = await requestService.getAllRequests();
  res.json(requests);
});

requestRouter.get("/:requestId", async (req, res) => {
  const { requestId } = req.params;
  const request = await requestService.getRequestById(requestId);
  res.json(request);
});

requestRouter.get("/employee/:sender", async (req, res) => {
  const { sender } = req.params;
  const requests = await requestService.getRequestsByEmployeeId(sender);
  res.json(requests);
});

// CREATE

requestRouter.post("/addRequest", async (req, res) => {
  const requestData = req.body;
  const request = await requestService.createRequest(requestData);
  res.json(request);
});

// DELETE

requestRouter.delete("/delete/:requestId", async (req, res) => {
  const { requestId } = req.params;
  await requestService.removeRequest(requestId);
  res.json({ message: "Request removed" });
});

export default requestRouter;
