import { DataTypes, Model } from "sequelize";
import sequelize from "../Connection/sequelize.js";

class Band extends Model {}

Band.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 50],
    },
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 50],
    },
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 50],
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 200],
    },
  },
}, {
  sequelize,
  modelName: "Band",
});

export default Band;
