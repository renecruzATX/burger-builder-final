const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
 order: {
   type: Object
 } 
});

const OrderModel = mongoose.model("Order", orderSchema);
module.exports = OrderModel;