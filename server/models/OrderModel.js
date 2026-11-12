const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  order: {
    type: Object
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    index: true
  }
});

const OrderModel = mongoose.model("Order", orderSchema);
module.exports = OrderModel;
