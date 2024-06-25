import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import bodyParser from "body-parser";

import sequelize from "./config/database.js";

import cors from "./middlewares/cors.js";
import { verifyToken } from "./middlewares/jwt.js";

import loginRouter from "./routes/loginRouter.js";
import employeeRouter from "./routes/employeeRouter.js";
import departmentRouter from "./routes/departmentRouter.js";
import skillRouter from "./routes/skillRouter.js";
import eventRouter from "./routes/eventRouter.js";
import adviseRouter from "./routes/adviseRouter.js";
import recordRouter from "./routes/recordRouter.js";
import profileRouter from "./routes/profileRouter.js";
import passwordRouter from "./routes/passwordRouter.js";
import roleRouter from "./routes/roleRouter.js";
import positionRouter from "./routes/positionRouter.js";
import requestRouter from "./routes/requestRouter.js";

/****/

dotenv.config();

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(cors);
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Rutas
app.use("/api", loginRouter);
app.use("/api/employees", verifyToken, employeeRouter);
app.use("/api/departments", verifyToken, departmentRouter);
app.use("/api/skills", verifyToken, skillRouter);
app.use("/api/events", verifyToken, eventRouter);
app.use("/api/advises", verifyToken, adviseRouter);
app.use("/api/records", verifyToken, recordRouter);
app.use("/api/profiles", verifyToken, profileRouter);
app.use("/api/passwords", verifyToken, passwordRouter);
app.use("/api/roles", verifyToken, roleRouter);
app.use("/api/positions", verifyToken, positionRouter);
app.use("/api/requests", verifyToken, requestRouter);


// Sincronizar modelos con la base de datos
await sequelize.sync({ alter: true });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
