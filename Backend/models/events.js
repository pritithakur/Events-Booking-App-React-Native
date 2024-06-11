module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define("events", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      refrences: {
        model: "restaurant",
        key: "id",
      },
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_image: {
      type: DataTypes.STRING,
    },
    city_id: {
      type: DataTypes.INTEGER,
      refrences: {
        model: "city",
        key: "id",
      },
    },
    region_id: {
      type: DataTypes.INTEGER,
      refrences: {
        model: "region",
        key: "id",
      },
    },
    event_description: {
      type: DataTypes.TEXT,
    },
    recurrent_type: {
      type: DataTypes.ENUM("daily", "weekly", "monthly", "yearly", "biweekly"),
      allowNull: true,
    },
    custom_day: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    all_day: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      refrences: {
        model: "event_category",
        key: "id",
      },
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    is_Recurrent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    tags: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    starting_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.STRING,
    },
    updated_by: {
      type: DataTypes.STRING,
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

  events.associate = (models) => {
    events.hasMany(models.session, {
      foreignKey: "event_id",
      as: "session",
    });
      events.belongsTo(models.event_category, {
        foreignKey: "category_id",
        as: "category",
      });
    events.belongsTo(models.restaurant, {
      foreignKey: "restaurant_id",
      as: "restaurant",
    });
    events.belongsTo(models.City, {
      foreignKey: "city_id",
      as: "city",
    });
  };
  return events;
};
