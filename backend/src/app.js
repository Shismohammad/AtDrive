const express = require('express');
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: '*',
  }),
);
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(express.json({ limit: '1mb' }));
app.use(express.static('public'));

// routes import
const userRouter = require('./routes/user.routes.js');
const productRouter = require('./routes/product.routes.js');
const orderRouter = require('./routes/orders.routes.js');

// routes declaration
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/orders', orderRouter);

module.exports = { app };
