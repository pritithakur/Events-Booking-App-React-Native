module.exports = (sequelize, DataTypes) => {
  const ticket_inventory = sequelize.define("ticket_inventory", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "tickets",
        key: "id",
      },
    },
    quantity: {
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

  ticket_inventory.associate = (models) => {
    ticket_inventory.belongsTo(models.ticket, {
      foreignKey: "ticket_id",
      as: "ticket",
    });
  };

  return ticket_inventory;
};
