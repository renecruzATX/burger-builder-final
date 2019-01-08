const OrderModel = require("../models/OrderModel");

module.exports.list = function list(req, res) {
    OrderModel.find().exec()
        .then((orders) => {
            return res.json(orders);
        });
    
}
module.exports.show = function show(req, res) {
    OrderModel.findById(req.params.id).exec()
        .then((order) => {
            return res.json(order);
        });
}
module.exports.create = function create(req, res) {
    const order = new OrderModel(req.body);
    order.save().then(newOrder => {
        res.json(newOrder);
    });
}
module.exports.remove = function remove(req, res) {
    OrderModel.findByIdAndDelete(req.params.id).exec()
        .then(res.json('Deleted'));
}