// eventException.js

module.exports = (sequelize, DataTypes) => {
  const event_exception = sequelize.define("event_exception", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    session_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "sessions",
        key: "id",
      },
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    day: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    remarks: {
      type: DataTypes.STRING,
      allowNull: true,
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

  event_exception.associate = (models) => {
    event_exception.belongsTo(models.session, {
      foreignKey: "session_id",
      as: "session",
    });
  };
  return event_exception;
};
