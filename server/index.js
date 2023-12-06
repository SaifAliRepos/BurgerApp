const express = require('express')
const userRouter = require('./router/users')
const orderRouter = require('./router/order')
const methodOverride = require('method-override')
const connectDB = require('./config/db');
const app = express()

connectDB();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(methodOverride('_method'))

app.use(express.json()) //allow us to get data in body
app.use('/users', userRouter);
app.use('/orders', orderRouter);

const PORT = process.env.PORT || 3005
app.listen(PORT, () => console.log(`Now listening to ${PORT}`))
