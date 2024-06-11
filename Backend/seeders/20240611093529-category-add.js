"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "event_categories",
      [
        {
          name: "Late Night",
          icon: "https://shorturl.at/fY6OZ",
          created_at: new Date(),
          updated_at: new Date(),
          created_by: "admin",
          updated_by: "admin",
        },
        {
          name: "Music",
          icon: "https://shorturl.at/m0GoV",
          created_at: new Date(),
          updated_at: new Date(),
          created_by: "admin",
          updated_by: "admin",
        },
        {
          name: "Dance",
          icon: "https://www.daysoftheyear.com/wp-content/uploads/two-dancers-young-man-and-woman-dancing-hip-hop-i-2021-12-09-16-11-52-utc-scaled-e1655460990779.jpg",
          created_at: new Date(),
          updated_at: new Date(),
          created_by: "admin",
          updated_by: "admin",
        },
        {
          name: "Party",
          icon: "https://shorturl.at/cRlL3",
          created_at: new Date(),
          updated_at: new Date(),
          created_by: "admin",
          updated_by: "admin",
        },
        {
          name: "Food",
          icon: "https://shorturl.at/WBXbW",
          created_at: new Date(),
          updated_at: new Date(),
          created_by: "admin",
          updated_by: "admin",
        },
        {
          name: "Nearby",
          icon: "https://shorturl.at/Zcha7",
          created_at: new Date(),
          updated_at: new Date(),
          created_by: "admin",
          updated_by: "admin",
        },
        {
          name: "Comedy",
          icon: "https://shorturl.at/CW83T",
          created_at: new Date(),
          updated_at: new Date(),
          created_by: "admin",
          updated_by: "admin",
        },
        {
          name: "Culture",
          icon: "https://shorturl.at/uqJcJ",
          created_at: new Date(),
          updated_at: new Date(),
          created_by: "admin",
          updated_by: "admin",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
