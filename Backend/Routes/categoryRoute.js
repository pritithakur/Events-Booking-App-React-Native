const express = require("express");
const router = express.Router();
const CategoryController = require("../Controllers/categoryController");

router.get("/getCategory", CategoryController.getCategory);
router.post("/category/insert", CategoryController.createCategory);
router.delete("/category/delete/:id", CategoryController.deleteCategory);

module.exports = router;
