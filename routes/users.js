const express = require('express');
const router = express.Router();

const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        firstName: req.body.firstName,
        surname: req.body.surname,
        age: req.body.age,
        gender: req.body.gender,
        friends: req.body.friends
    });
    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Failed to register user'
            });
        } else {
            res.json({
                success: true,
                msg: 'User registered'
            });
        }
    });
});


// All Users
router.get('/all', (req, res, next) => {
    User.findAllUsers({}, (err, user) => {
        if (err) {
            res.status(500, 'Something went wrong!');
            next();
        } else {
            res.send(user);
        }
    })
});

// Profile
router.get('/:id', (req, res, next) => {
    User.getUserById(req.params.id, (err, user) => {
        if(!user) {
            return res.status(404).end();
        }
        return res.status(200).json(user);
    })
    
});

// Friends
router.get('/friends', (req, res) => {
    
})



module.exports = router;