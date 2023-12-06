const express = require('express')
const { postUser, getAllUsers, loginUser } = require('../controller/User')
const router = express.Router()

// @route GET /user
// @desc Test route
// @access Public

router.post('/new', postUser)

router.get('/all', getAllUsers)

router.post('/login', loginUser)

module.exports = router;
