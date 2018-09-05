const Sequelize = require('sequelize');
const mysql = require('mysql2')

const connection = new Sequelize('nodetest','root','',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = connection;