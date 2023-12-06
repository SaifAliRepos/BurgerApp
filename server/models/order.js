const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  details: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Order', orderSchema)
