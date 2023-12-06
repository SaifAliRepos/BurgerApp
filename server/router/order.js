const express = require('express');
const { postOrder, getAllOrders } = require('../controller/order');

const router = express.Router()

// @route GET /user
// @desc Test route
// @access Public

router.post('/new', postOrder)

router.get('/all', getAllOrders)

module.exports = router;
