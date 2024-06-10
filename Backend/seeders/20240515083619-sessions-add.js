"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "sessions",
      [
        {
          session: "Morning",
          event_id: 3,
          new_description: "Sample description for morning",
          start_time: "09:00:00",
          end_time: "12:00:00",
          created_by: "Admin",
          updated_by: "Admin",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          session: "Afternoon",
          event_id: 4,
          new_description: "Sample description for afternoon",
          start_time: "12:00:00",
          end_time: "4:00:00",
          created_by: "Admin",
          updated_by: "Admin",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          session: "Evening",
          event_id: 3,
          new_description: "Sample description for evening",
          start_time: "4:00:00",
          end_time: "8:00:00",
          created_by: "Admin",
          updated_by: "Admin",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          session: "Night",
          event_id: 4,
          new_description: "Sample description for night",
          start_time: "8:00:00",
          end_time: "12:00:00",
          created_by: "Admin",
          updated_by: "Admin",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
