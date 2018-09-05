const express = require('express');
const router = express.Router();
const User = require('../db/userModel.js');

router.get('/', (req, res, next) => {

    let usersData = User.findAll({  }).then((response) => {
        // res.send(response);

        res.status(200).send(response)
            
        

    });

    
    
});


module.exports = router;