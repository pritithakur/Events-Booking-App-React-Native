module.exports = (sequelize, DataTypes) => {
  const ticket = sequelize.define("ticket", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    session_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      refrences: {
        model: "sessions",
        key: "id",
      },
    },
    ticket_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ticket_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    actual_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    display_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "created_at",
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "updated_at",
      defaultValue: DataTypes.NOW,
    },
  });

  ticket.associate = (models) => {
    ticket.belongsTo(models.session, {
      foreignKey: "session_id",
      as: "session",
    });
    ticket.hasOne(models.ticket_inventory, {
      foreignKey: "ticket_id",
      as: "ticket_inventory",
    });
    ticket.hasMany(models.event_booking, {
      foreignKey: "ticket_id",
      as: "event_booking",
    });
  };

  ticket.addHook("afterCreate", async (ticket, options) => {
    const { ticket_inventory } = sequelize.models;
    try {
      // Fetch the capacity from the ticket
      const { capacity } = await ticket.reload();
      // Create the ticket_inventory entry with quantity set to the capacity
      await ticket_inventory.create({
        ticket_id: ticket.id,
        quantity: capacity,
        start_date: new Date(),
      });
    } catch (error) {
      console.error("Error creating ticket_inventory:", error);
    }
  });

  return ticket;
};
