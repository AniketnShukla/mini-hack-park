const express = require("express");
// const ecomController = require("../controllers/ecomController.js")
const router = express.Router();
const parkingController = require("../controller/parkingController")

router.get("/fetch-free-slots", parkingController.fetchFreeSlots);
// router.post("/checkout", ecomController.checkoutUser);
// router.post("/add-to-cart", ecomController.addToCart);
// router.post("/remove-from-cart", ecomController.removefromCart);

// router.get("/cart/:userId", ecomController.getCartItems);

// router.get("/get-account-details/:userId", ecomController.getAccountDetails);
// router.get("/categories", ecomController.getCategories);


// router.post("/admin/add-product", ecomController.addProduct);

// router.post("/login", ecomController.login);
// router.post("/signup", ecomController.signup);

module.exports = router;