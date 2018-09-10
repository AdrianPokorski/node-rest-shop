const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const connection = require('./src/config/connection.js');
const importRoutes = require('./src/controllers/import');
const allUsersRoutes = require('./src/controllers/users.js');

connection.sync();

app.use( bodyParser.urlencoded({extended: true}) );
app.use(express.json());
app.use(cors());

app.use('/import', importRoutes);
app.use('/users', allUsersRoutes);

module.exports = app;