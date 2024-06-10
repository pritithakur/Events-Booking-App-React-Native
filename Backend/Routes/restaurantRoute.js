const express = require('express');
const { getNearbyEvents } = require('../Controllers/restaurantcontroller');

const router = express.Router();

router.get('/restaurants', getNearbyEvents);

module.exports = router;
