"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("events", "starting_price", {
      type: Sequelize.INTEGER, // Change data type to integer
      allowNull: true, // Modify this based on your requirements
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("events", "starting_price", {
      type: Sequelize.DECIMAL(10, 2), // Revert back to the previous data type
      allowNull: true, // Modify this based on your requirements
    });
  },
};
