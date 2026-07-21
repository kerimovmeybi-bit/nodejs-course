const express = require("express");

const router = express.Router();

const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Получить все товары
router.get("/", getProducts);

// Получить товар по ID
router.get("/:id", getProductById);

// Создать товар
router.post("/", createProduct);

// Обновить товар
router.put("/:id", updateProduct);

// Удалить товар
router.delete("/:id", deleteProduct);

module.exports = router;