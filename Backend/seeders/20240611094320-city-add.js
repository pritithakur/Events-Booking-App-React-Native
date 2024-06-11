"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Cities",
      [
        {
          city: "Delhi",
          image: "https://rb.gy/14rx8c",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          city: "Kullu",
          image: "https://rb.gy/r613ms",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          city: "Manali",
          image: "https://rb.gy/kvm9cc",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          city: "Shimla",
          image:
            "https://ap-south-1.graphassets.com/clv1zk1gb1p0z07o384204dd2/clv52dqw20jyq07pgi6qpl18n",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Cities", null, {});
  },
};
