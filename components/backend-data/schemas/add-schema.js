const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  description: String,
  price: String,
  image: String,
});

export const Shoes = mongoose.model("shoes", schema);
