const mongoose = require("mongoose");

const ingredientsSchema = new mongoose.Schema({
 order: {
   type: Object
 } 
});

const IngredientsModel = mongoose.model("Ingredient", ingredientsSchema);
module.exports = IngredientsModel;