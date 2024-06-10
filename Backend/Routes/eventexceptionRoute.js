const express = require("express");
const router = express.Router();
const eventExceptionController = require("../Controllers/eventexception");

router.post('/event-exceptions', eventExceptionController.createEventException);
router.put('/event-exceptions/:id', eventExceptionController.updateEventException);
router.delete('/event-exceptions/:id', eventExceptionController.deleteEventException);

module.exports = router;
