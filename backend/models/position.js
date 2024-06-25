import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Position = sequelize.define("Position", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Position;
