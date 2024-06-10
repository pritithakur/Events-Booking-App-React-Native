'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tickets', [{
      session_id: 13,
      ticket_name: 'Silver',
      cost:900,
      actual_price:1000,
      display_price:950,
      capacity:2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      session_id: 13,
      ticket_name: 'Gold',
      cost:500,
      actual_price:800,
      display_price:650,
      capacity:3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      session_id: 14,
      ticket_name: 'Platinum',
      cost:500,
      actual_price:800,
      display_price:650,
      capacity:4,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      session_id: 14,
      ticket_name: 'Basic',
      cost:500,
      actual_price:800,
      display_price:650,
      capacity:4,
      created_at: new Date(),
      updated_at: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
