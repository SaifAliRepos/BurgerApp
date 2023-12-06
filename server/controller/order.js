const Order = require('../models/order')
const config = require('config');
const User = require('../models/user');

const postOrder = async (req, res) => {

  try {
    //see if user exists
    console.log(req.body.user)
    let user = await User.findOne({ _id: req.body.user })
    console.log(user)
    if (user) {
      let order = await Order.create(req.body);
      console.log(order)
      res.status(200).json(order)
    }
    res.status(500)

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const getAllOrders = async (req, res) => {
  try {

    let orders = await Order.find({})
    if (!orders) {
      res.json({ Message: "No orders found" })
    }

    res.json(orders)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  postOrder, getAllOrders
};
