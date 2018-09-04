const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const connection = require('./app/db/connection.js');
const productRoutes = require('./app/routes/products');
const importRoutes = require('./app/routes/import');
const orderRoutes = require('./app/routes/orders');

connection.sync();

app.use( bodyParser.urlencoded({extended: true}) );


app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/import', importRoutes);

module.exports = app;