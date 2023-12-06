var mongoose = require('mongoose');
require('dotenv').config();

const dbURL = process.env;

mongoose.set('strictQuery', false);


const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/miniburg')
    console.log('MongoD is now runnning...')
  } catch (error) {
    process.exit(1)
  }
}

module.exports = connectDB;
