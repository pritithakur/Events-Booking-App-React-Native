const db = require("../models");
const Event = db.events;
const Session = db.session;
const Ticket = db.ticket;
const TicketInventory = db.ticket_inventory;

const recurrentEvent = async () => {
  try {
    const events = await Event.findAll({
      where: {
        is_recurrent: true,
      },
      include: [
        {
          model: Session,
          as: "session",
          include: [
            {
              model: Ticket,
              as: "ticket",
              include: [{ model: TicketInventory, as: "ticket_inventory" }],
            },
          ],
        },
      ],
    });

    function getDays(year, month) {
      return new Date(year, month + 1, 0).getDate();
    }

    const updateDate = events.map(async (event) => {
      event.recurrent_count = (event.recurrent_count || 0) + 1;

      const newDate = new Date(event.start_date);
      let shouldUpdate = false;

      switch (event.recurrent_type) {
        case "daily":
          newDate.setDate(newDate.getDate() + 1);
          shouldUpdate = true;
          event.recurrent_count = 0;
          break;
        case "weekly":
          if (event.recurrent_count > 7) {
            newDate.setDate(newDate.getDate() + 7);
            shouldUpdate = true;
            event.recurrent_count = 0;
          }
          break;
        case "biweekly":
          if (event.recurrent_count > 14) {
            newDate.setDate(newDate.getDate() + 14);
            shouldUpdate = true;
            event.recurrent_count = 0;
          }
          break;
        case "monthly":
          const month = newDate.getMonth();
          const year = newDate.getFullYear();
          const days = getDays(year, month);
          console.log("days: ", days);
          if (event.recurrent_count > days) {
            newDate.setMonth(newDate.getMonth() + 1);
            shouldUpdate = true;
            event.recurrent_count = 0;
          }
          break;
        default:
          console.error("Unknown recurrent_type:", event.recurrent_type);
          return;
      }

      if (shouldUpdate) {
        event.start_date = newDate;

        // Update ticket inventory capacity
        for (const session of event.session) {
          for (const ticket of session.ticket) {
            if (ticket.ticket_inventory) {
              ticket.ticket_inventory.quantity = ticket.capacity;
              await ticket.ticket_inventory.save();
            }
          }
        }

        await event.save();
      }
    });

    await Promise.all(updateDate);
    console.log("Event dates and ticket inventory updated");
    // res.status(200).send("Event dates and ticket inventory updated");
  } catch (error) {
    console.error("Error updating event dates and ticket inventory:", error);
    // res.status(500).send("Error updating event dates and ticket inventory");
  }
};

module.exports = recurrentEvent;
