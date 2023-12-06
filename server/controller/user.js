const User = require('../models/user')
const config = require('config')

const postUser = async (req, res) => {

  const { email, password } = req.body;

  try {
    //see if user exists
    let user = await User.findOne({ email })
    if (user) {
      res.status(400).json({ errors: [{ msg: "User already exists.." }] })
    }

    user = new User({
      email,
      password,
    });

    await user.save()
    res.status(200).json(user)

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const getAllUsers = async (req, res) => {
  try {

    let users = await User.find({})
    if (!users) {
      res.json({ Message: "No user found!" })
    }

    res.json({ users })
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const loginUser = async (req, res) => {
  try {
    const user = await User.find({
      $and: [
        { user: req.body.user },
        { password: req.body.password }
      ]
    });

    if (!user.length > 0) {
      return res.status(500).json('Server error')
    }
    return res.status(200).json(user[0])
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  postUser, getAllUsers, loginUser
};
