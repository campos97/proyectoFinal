import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Department from "./department.js";
import Role from "./role.js";
import Position from "./position.js";

const Employee = sequelize.define("Employee", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departmentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Department,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Role,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  positionId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Position,
      key: "id",
    },
    onDelete: "CASCADE",
  },
});

export default Employee;
