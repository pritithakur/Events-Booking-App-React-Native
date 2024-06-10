const db = require("../models");
const EventGallery = db.event_gallery;

const createEventGallery = async (req, res) => {
  try {
    const eventGallery = await EventGallery.create(req.body);
    res.status(201).json(eventGallery);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateEventGallery = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await EventGallery.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedEventGallery = await EventGallery.findByPk(id);
      res.status(200).json(updatedEventGallery);
    } else {
      throw new Error("Event Gallery not found");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteEventGallery = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await EventGallery.destroy({
      where: { id: id },
    });
    if (deleted) {
      res.status(204).send("Deleted Successfully");
    } else {
      throw new Error("Event Gallery not found");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getEventGalleriesByEventId = async (req, res) => {
  try {
    const { eventId } = req.params;
    const eventGalleries = await EventGallery.findAll({
      where: { event_id: eventId },
    });
    if (eventGalleries && eventGalleries.length > 0) {
      res.status(200).json(eventGalleries);
    } else {
      throw new Error("Event Galleries not found for the event");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createEventGallery,
  updateEventGallery,
  deleteEventGallery,
  getEventGalleriesByEventId,
};
