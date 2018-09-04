const Sequelize = require('sequelize');
const fs = require('fs');
const obj = JSON.parse(fs.readFileSync('./api/users/user.json', 'utf8'));


const connection = new Sequelize('nodetest','root','admin',{
    host:'localhost',
    dialect:'mysql'
});


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


User.sync({force: true}).then(() => {

    for(var i = 0; i < obj.length; i++){

        User.create({
            firstName: obj[i].firstName,
            lastName: obj[i].lastName,
            email: obj[i].email
        });

    }

});


module.exports = connection;



// var test = connection.authenticate()
//     .then(function () {
//         console.log("CONNECTED! ");
//     })
//     .catch(function (err) {
//         console.log("SOMETHING DONE GOOFED");
//     })
//     .done();