const express = require("express");
const router = express.Router();
const CityController = require("../Controllers/city");

router.get("/getCity", CityController.getCity);
router.post("/city/insert", CityController.createCity);

module.exports = router;
