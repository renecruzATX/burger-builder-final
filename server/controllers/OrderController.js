const OrderModel = require("../models/OrderModel");

// Orders are scoped to the logged-in user so nobody can see or delete
// someone else's name/address
module.exports.list = function list(req, res, next) {
    OrderModel.find({ user: req.user._id }).exec()
        .then((orders) => res.json(orders))
        .catch(next);
};
module.exports.show = function show(req, res, next) {
    OrderModel.findOne({ _id: req.params.id, user: req.user._id }).exec()
        .then((order) => order ? res.json(order) : res.status(404).json({ error: "Not found" }))
        .catch(next);
};
module.exports.create = function create(req, res, next) {
    const order = new OrderModel({ ...req.body, user: req.user._id });
    order.save()
        .then((newOrder) => res.json(newOrder))
        .catch(next);
};
module.exports.remove = function remove(req, res, next) {
    OrderModel.findOneAndDelete({ _id: req.params.id, user: req.user._id }).exec()
        .then((deleted) => deleted ? res.json("Deleted") : res.status(404).json({ error: "Not found" }))
        .catch(next);
};
