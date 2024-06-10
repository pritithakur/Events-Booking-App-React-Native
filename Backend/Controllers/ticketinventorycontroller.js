const db = require("../models");
const Inventory = db.inventory;
const TicketInventory = db.ticket_inventory;

const upsertInventory = async (sessionId, initialTickets) => {
  try {
    let inventory = await Inventory.findOne({ where: { session_id: sessionId } });
    if (inventory) {
      inventory.available_tickets += initialTickets;
      await inventory.save();
    } else {
      await Inventory.create({
        session_id: sessionId,
        available_tickets: initialTickets,
      });
    }
  } catch (error) {
    console.error("Error upserting inventory:", error);
    throw error;
  }
};

// const updateTicketInventoryController = async (ticket_id, no_of_person) => {
//   try {
//     const inventory = await TicketInventory.findOne({ where: { ticket_id } });

//     if (!inventory) {
//       throw new Error('Ticket inventory not found');
//     }

//     if (inventory.quantity < no_of_person) {
//       throw new Error('Not enough tickets available');
//     }

//     inventory.quantity =inventory.quantity- no_of_person;
//     await inventory.save();

//     return inventory;
//   } catch (error) {
//     console.error("Error updating ticket inventory:", error);
//     throw new Error(error.message);
//   }
// };

module.exports = {
  upsertInventory,
  // updateTicketInventoryController
};
