const express = require("express");
const router = express.Router();
const eventgalleryController = require("../Controllers/eventgallery");

router.post('/eventgallery',eventgalleryController.createEventGallery);
router.put('/eventgallery/:id',eventgalleryController.updateEventGallery);
router.delete('/eventgallery/:id',eventgalleryController.deleteEventGallery);
router.get('/eventgallery/event/:eventId',eventgalleryController.getEventGalleriesByEventId);


module.exports = router;