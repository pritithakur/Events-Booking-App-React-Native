const db = require("../models");
const Session = db.session;

const createSession = async (req, res) => {
  try {
    const session = await Session.create(req.body);
    res.status(201).json(session);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateSession = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Session.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedSession = await Session.findByPk(id);
      res.status(200).json(updatedSession);
    } else {
      throw new Error("Session not found");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteSession = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Session.destroy({
      where: { id: id },
    });
    if (deleted) {
      res.status(204).send("Event deleted successfully");
    } else {
      throw new Error("Session not found");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSessionsByEventId = async (req, res) => {
  try {
    const { eventId } = req.params;
    const sessions = await Session.findAll({
      where: { event_id: eventId },
    });
    if (sessions && sessions.length > 0) {
      res.status(200).json(sessions);
    } else {
      throw new Error("Sessions not found for the event");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createSession,
  updateSession,
  deleteSession,
  getSessionsByEventId,
};
