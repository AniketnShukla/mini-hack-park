const Parking = require("../models/Parking");

exports.fetchFreeSlots = async ( req, res ) => {
    try {
        console.log(req.query.query)
            res = await Parking.findAll({
                where: {
                    Occupied: False
                }
            }
            );
        res.json({
            products: data
        });
    } catch (error) {
        console.log(`Error fetching products: ${error}`)
        res.json({
            message: `Error fetching products: ${error}`
        })
    }
}