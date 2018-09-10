const express = require('express');
const router = express.Router();
const User = require('../db/userModel.js');

router.get('/', (req, res, next) => {

    User.findAll({  }).then(response => {
        res.status(200).send(response)
    });

});

router.get('/:id', (req, res, next) => {

    User.findOne({ where: {id: req.params.id } }).then(User => {
        res.status(200).send(User);
      });

});

router.delete('/', (req, res, next) => {

    User.destroy({where: {id: req.body.id} }).then(deleteresponse => {
        res.status(200).json({
            status: 'ok',
            message: 'Leady usunięty poprawnie',
        });
    });

});

router.post('/add', (req, res, next) => {

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
        });
    });

});


module.exports = router;