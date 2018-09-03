const Sequelize = require('sequelize');
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./api/users/user.json', 'utf8'));


const connection = new Sequelize('nodetest','root','',{
    host:'localhost',
    dialect:'mysql'
});


const User = connection.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});


for(var i = 0; i < obj.length; i++){
    User.sync({force: true}).then(() => {
        // Table created

        return User.create({
            firstName: obj[0].firstName,
            lastName: obj[0].lastName
        });
    });

}


module.exports = connection;



// var test = connection.authenticate()
//     .then(function () {
//         console.log("CONNECTED! ");
//     })
//     .catch(function (err) {
//         console.log("SOMETHING DONE GOOFED");
//     })
//     .done();