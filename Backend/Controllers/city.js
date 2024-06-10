const db = require("../models");
const City = db.City;

const getCity = async (req, res) => {
  try {
    const results = await City.findAll();
    res.status(200).json(results);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createCity = async (req, res) => {
  try {
    const newCity = await City.create(req.body);
    res.status(201).json({ newCity });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error during insertion" });
  }
};

module.exports = { getCity, createCity };
