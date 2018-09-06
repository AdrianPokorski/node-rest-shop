const express = require('express');
const router = express.Router();

const fs = require('fs');
const obj = JSON.parse(fs.readFileSync('./src/users/user.json', 'utf8'));
const User = require('../db/userModel.js');

router.get('/', (req, res, next) => {

    User.sync({force: true}).then(() => {

        for(var i = 0; i < obj.length; i++){
            User.create({
                firstName: obj[i].firstName,
                lastName: obj[i].lastName,
                email: obj[i].email
            }).then(() => {
                console.log('sukces')
            })
        }

    });

    res.status(200).json({
        message: 'imported'
    });

});

module.exports = router;