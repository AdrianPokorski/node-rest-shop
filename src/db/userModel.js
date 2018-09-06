const connection = require('../config/connection.js');
const Sequelize = require('sequelize');


const User = connection.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

module.exports = User;