const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: Number,
  description: String,
  image: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);