const express = require("express");
const router = express.Router();
// Controller
const {
  getListProduct,
  getProductById,
  postProduct,
  deleteProduct,
} = require("../controllers/product.controller");

// path /product
router.get("/", getListProduct);
router.get("/:search", getProductById);
router.post("/", postProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
