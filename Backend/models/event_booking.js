module.exports = (sequelize, DataTypes) => {
  const event_booking = sequelize.define("event_booking", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      refrences: {
        model: "tickets",
        key: "id",
      },
    },
    status: {
      type: DataTypes.ENUM("completed", "confirmed", "cancel"),
      allowNull: false,
    },
    booking_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    no_of_persons: {
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
  event_booking.associate = (models) => {
    event_booking.belongsTo(models.ticket, {
      foreignkey: "ticket_id",
      as: "ticket",
    });
  };

  return event_booking;
};
