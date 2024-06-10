const express = require("express");
const router = express.Router();
const sortController = require("../Controllers/sortEvent");

router.get("/Eventcost", sortController.eventCost);
router.get("/eventDate", sortController.eventDate);

module.exports = router;
