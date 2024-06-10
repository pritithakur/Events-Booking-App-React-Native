const db = require("../models");
const Session = db.session;
const Ticket = db.ticket;
const Event = db.events;
const EventException = db.event_exception;

const getTicket = async (req, res) => {
  try {
    const sessionId = req.query.session_id;
    let results;
    if (sessionId) {
      results = await Ticket.findOne({ where: { session_id: sessionId } });
    }
    res.status(200).send(results);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Exception applied on tickets on the basis of session_id
const createTicket = async (req, res) => {
  try {
    const {session_id, ticket_name, cost, actual_price, display_price, capacity } = req.body;
    const session = await Session.findOne({
      where: { id: session_id },
      include: [{ model: Event, as: "events" }],
    });

    if (!session || !session.events) {
      return res
        .status(400)
        .json({ error: "Session or associated event not found" });
    }

    const { start_date, end_date, recurrent_type } = session.events;
    const eventStart = new Date(start_date);
    const eventEnd = end_date ? new Date(end_date) : null;

    const exceptions = await EventException.findAll({
      where: { session_id },
      attributes: ["start_date", "end_date"],
    });
//When end date is given range of dates need to be stored
    const exceptionRanges = exceptions.map((ex) => ({
      ExStart: new Date(ex.start_date),
      ExEnd: ex.end_date ? new Date(ex.end_date) : new Date(ex.start_date),
    }));

    const ticketData = []; //array to store ticket dates with data

    let d = new Date(eventStart);
    while (!eventEnd || d <= eventEnd) {
      const isException = exceptionRanges.some((range) => d >= range.ExStart && d <= range.ExEnd);
      if (!isException) {
        ticketData.push({
          session_id,
          ticket_date: new Date(d),
          ticket_name,
          cost,
          actual_price,
          display_price,
          capacity,
        });
      } else {
        console.log(
          `Skipping ticket creation for date: ${d.toISOString()} due to exception`
        );
      }

      if (recurrent_type === "daily") {
        d.setDate(d.getDate() + 1);
      } else if (recurrent_type === "weekly") {
        d.setDate(d.getDate() + 7);
      } else if (recurrent_type === "biweekly") {
        d.setDate(d.getDate() + 14);
      } else if (recurrent_type === "monthly") {
        d.setMonth(d.getMonth() + 1);
      } else {
        break;
      }
    }

    const ticketPromises = [];
    for (let i = 0; i < ticketData.length; i++) {
      try {
        const ticket = ticketData[i];
        const createdTicket = await Ticket.create(ticket);
        ticketPromises.push(createdTicket);
      } catch (error) {
        console.error("Error creating ticket:", error);
      }
    }

    const tickets = await Promise.all(ticketPromises);
    res.status(201).json({ tickets });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error during ticket creation" });
  }
};

// api for updating ticket
const updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Ticket.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedTicket = await Ticket.findByPk(id);
      res.status(200).json(updatedTicket);
    } else {
      throw new Error("Ticket not found");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Ticket.destroy({
      where: { id: id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      throw new Error("Ticket not found");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createTicket,
  updateTicket,
  deleteTicket,
  getTicket,
};
