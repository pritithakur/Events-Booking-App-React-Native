const express = require('express');
const router = express.Router();
const ticketController = require('../Controllers/ticketinventorycontroller');

router.post('/inventory/create', ticketController.createTicketInventory);

module.exports = router;
