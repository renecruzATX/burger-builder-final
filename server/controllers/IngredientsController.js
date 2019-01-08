const IngredientsModel = require("../models/IngredientsModel");

module.exports.list = function list(req, res) {
    IngredientsModel.find().exec()
        .then((ingredients) => {
            return res.json(ingredients);
        });
    
}
module.exports.show = function show(req, res) {
    IngredientsModel.findById(req.params.id).exec()
        .then((ingredients) => {
            return res.json(ingredients);
        });
}
module.exports.create = function create(req, res) {
    const order = new IngredientsModel(req.body);
    order.save().then(newIngredients => {
        res.json(newIngredients);
    });
}