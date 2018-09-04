const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2')
var obj = require("./api/users/user.json");

const connection = require('./api/config/db.js');
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

connection.sync();

app.use( bodyParser.urlencoded({extended: true}) );


app.use('/products', productRoutes);
app.use('/orders', orderRoutes);



module.exports = app;