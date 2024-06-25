import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Employee from "./employee.js";

const Request = sequelize.define("Request", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  sender: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Employee,
      key: "id",
    },
    onDelete: 'CASCADE',
  },
  status: {
    type: DataTypes.ENUM("PENDIENTE", "APROBADO", "RECHAZADO"),
    defaultValue: "PENDIENTE",
  },
});

export default Request;