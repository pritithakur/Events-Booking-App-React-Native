module.exports = (sequelize, DataTypes) => {
  const restaurant = sequelize.define("restaurant", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // city_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "city",
    //     key: "id",
    //   },
    // },
    // region_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "region",
    //     key: "id",
    //   },
    // },
    location_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // event_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: "events",
    //     key: "id",
    //   },
    // },
    latitude: {
      type: DataTypes.DECIMAL(11,8), 
    },
    longitude: {
      type: DataTypes.DECIMAL(11,8),
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

  restaurant.associate = (models) => {
    restaurant.hasMany(models.events, {
      foreignKey: "restaurant_id",
      as: "events",
    });
  };
  
  return restaurant;
};
