const sequelize = require("../config/dbConfig");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define(
    "Employee",
    {
        Employee_Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING
        },
        Email: {
            type: DataTypes.STRING
        }
    },
    {

        tableName: "Employee",
        timestamps: false
    }
)

sequelize.sync()
    .then(()=>console.log("User Table Created"))
    .catch(e => console.log(`Error creating Table: ${e}`));