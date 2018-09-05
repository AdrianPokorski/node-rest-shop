const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const connection = require('./app/db/connection.js');
const productRoutes = require('./app/routes/products');
const importRoutes = require('./app/routes/import');
const createUser = require('./app/routes/createuser');
const orderRoutes = require('./app/routes/orders');
const allUsersRoutes = require('./app/routes/allusers');

connection.sync();

app.use( bodyParser.urlencoded({extended: true}) );
app.use(express.json());
app.use(cors());

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/import', importRoutes);
app.use('/createuser', createUser);
app.use('/allusers', allUsersRoutes);

module.exports = app;