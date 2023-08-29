const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Item extends Model {};

Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {

        },
        image: {

        },
        description: {
            
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

module.exports = Item;