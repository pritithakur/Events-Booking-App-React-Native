const express = require("express");
const router = express.Router();
const bookingController = require("../Controllers/bookingController");

router.post("/booking/insert", bookingController.createBooking);
router.get("/booking", bookingController.getBookings);
router.get("/booking/:custId", bookingController.getBookingByCustId);

module.exports = router;
