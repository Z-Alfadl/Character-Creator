const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Character extends Model {}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    char_name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    sex: {
      type: DataTypes.STRING,
    },
    pronouns: {
      type: DataTypes.STRING,
    },
    background: {
      type: DataTypes.TEXT,
    },
    eyes: {
      type: DataTypes.STRING,
    },
    hair: {
      type: DataTypes.STRING,
    },
    skin: {
      type: DataTypes.STRING,
    },
    build: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'character',
  });

  module.exports = Character;