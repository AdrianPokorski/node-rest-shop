const express = require('express');
const router = express.Router();
const User = require('../db/userModel.js');

router.post('/', (req, res, next) => {

    let addUserId;

    User.sync({force: false}).then(() => {

        User.create({
            
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email

        }).then((e) => {

            res.status(200).json({
                status: 'ok',
                message: 'Leady dodany poprawnie',
                id: e.get('id')
            });

        }).catch((e) => {

            res.status(200).json({
                status: 'err',
                message: 'blad'
            });

        });

    });


});

module.exports = router;