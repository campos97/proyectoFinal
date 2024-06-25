import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Employee from "./employee.js";

const Record = sequelize.define("Record", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  employeeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Employee,
      key: "id",
    },
    onDelete: "CASCADE",
  },
});

export default Record;
