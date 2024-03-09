// Schema
const Product = require("../models/product.model");

const getListProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ data: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const search = req.params.search;
    const products = await Product.findById(search);
    if (!products) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ data: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postProduct = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const productReq = {
      name: req.body.name || "",
      price: req.body.price || 0,
      description: req.body.description || "",
      image: req.body.image || "",
    };

    const product = await Product.create(productReq);

    res.status(200).json({ data: product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ data: product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getListProduct,
  getProductById,
  postProduct,
  deleteProduct,
};
