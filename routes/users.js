const express = require('express');
const router = express.Router();

const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
    console.log(req.body);
    let newUser = new User({
        firstName: req.body.firstName,
        surname: req.body.surname,
        age: req.body.age,
        gender: req.body.gender
    });
    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({success: false, msg:'Failed to register user'});
        }else {
            res.json({success: true, msg:'User registered'});
        }
    });
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

// Profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});


module.exports = router;