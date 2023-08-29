const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Inventory extends Model {};

Inventory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        // items 1, 2, and 3 are arrays that will hold three variables: a name, an image, and a description
        // array structure is as such: ["name","img.ext","description"]
        item_1: {
            type: DataTypes.ARRAY
        },
        item_2: {
            type: DataTypes.ARRAY
        },
        item_3: {
            type: DataTypes.ARRAY
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'inventory',  
    }
);

module.exports = Inventory;