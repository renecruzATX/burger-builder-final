const IngredientsModel = require("../models/IngredientsModel");

// Starting burger. Used when the database has no ingredients document yet,
// so a fresh database works without a manual seed step.
const DEFAULT_INGREDIENTS = { lettuce: 0, bacon: 0, cheese: 0, meat: 0 };

module.exports.list = function list(req, res, next) {
    IngredientsModel.findOne().lean().exec()
        .then((doc) => {
            const ingredients = { ...DEFAULT_INGREDIENTS };
            if (doc) {
                Object.keys(DEFAULT_INGREDIENTS).forEach((k) => {
                    if (typeof doc[k] === "number") ingredients[k] = doc[k];
                });
            }
            // client expects an array and takes the first element
            return res.json([ingredients]);
        })
        .catch(next);
};
