const Parking = require("../models/Parking");

exports.fetchFreeSlots = async ( req, res ) => {
    try {
        console.log(req.query.query)
            data = await Parking.findAll({
                where: {
                    Occupied: "False"
                }
            }
            );
        slotsArray = [];
        data.forEach(element => {
            slotsArray.push(element.Id);
        });
        res.json({
            slots: slotsArray
        });
    } catch (error) {
        console.log(`Error fetching products: ${error}`)
        res.json({
            message: `Error fetching products: ${error}`
        })
    }
}