const express = require('express');
const router = express.Router();
const sessionController = require('../Controllers/sessionscontroller');

// Create a session for an event
router.post('/session', sessionController.createSession);

router.put('/session/:id', sessionController.updateSession);

router.delete('/session/:id', sessionController.deleteSession);

router.get('/session/event/:eventId', sessionController.getSessionsByEventId);

module.exports = router;
