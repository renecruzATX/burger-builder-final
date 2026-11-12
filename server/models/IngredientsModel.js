const mongoose = require("mongoose");

// strict: false so the existing ingredients document (lettuce, bacon, cheese, meat) is read as-is
const ingredientsSchema = new mongoose.Schema({}, { strict: false });

const IngredientsModel = mongoose.model("Ingredient", ingredientsSchema);
module.exports = IngredientsModel;
