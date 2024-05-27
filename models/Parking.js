const sequelize = require("../config/dbConfig");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define(
    "ParkingSlot",
    {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Type: {
            type: DataTypes.STRING
        },
        Occupied: {
            type: DataTypes.STRING
        },
        Employee_Id: {
            type: DataTypes.STRING
        }
    },
    {

        tableName: "ParkingSlot",
        timestamps: false
    }
)

sequelize.sync()
    .then(()=>console.log("ParkingSlot Table Created"))
    .catch(e => console.log(`Error creating Table: ${e}`));