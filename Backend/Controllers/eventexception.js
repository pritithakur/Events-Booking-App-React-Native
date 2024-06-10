const db = require("../models");
const EventException = db.event_exception;

const createEventException = async (req, res) => {
  try {
    const eventException = await EventException.create(req.body);
    res.status(201).json(eventException);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateEventException = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await EventException.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedEventException = await EventException.findByPk(id);
      res.status(200).json(updatedEventException);
    } else {
      throw new Error("Event Exception not found");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteEventException = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await EventException.destroy({
      where: { id },
    });
    if (deleted) {
      res.status(204).send("Event Exceptio deleted successfully");
    } else {
      throw new Error("Event Exception not found");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createEventException,
  updateEventException,
  deleteEventException,
};
