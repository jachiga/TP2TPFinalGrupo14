import { DataTypes, Model } from "sequelize";
import sequelize from "../Connection/sequelize.js";

class Album extends Model {}

Album.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 1,
    },
  },
  bandId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
    },
  },
}, {
  sequelize,
  modelName: "Album",
});

export default Album;
