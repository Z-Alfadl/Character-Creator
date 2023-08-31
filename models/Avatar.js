const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Avatar extends Model {}

Avatar.init(
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
    hair_color: {
      type: DataTypes.STRING,
    },
    hair_length: {
      type: DataTypes.STRING,
    },
    skin: {
      type: DataTypes.STRING,
    },
    build: {
      type: DataTypes.STRING,
    },
    head: {
      type: DataTypes.STRING,
    },
    chest: {
      type: DataTypes.STRING,
    },
    legs: {
      type: DataTypes.STRING,
    },
    item1: {
      type: DataTypes.STRING,
    },
    item2: {
      type: DataTypes.STRING,
    },
    item3: {
      type: DataTypes.STRING,
    }

    // may reference many item_ids
    // item_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'item',
    //     key: 'id',
    //   },
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'avatar',
  });

  module.exports = Avatar;