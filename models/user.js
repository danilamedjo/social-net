const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
const userSchema = mongoose.Schema({
    firstName: String,
    surname: String,
    age: Number,
    gender: String,
    friends: [
        {type: String, ref: 'User'}
      ]
});

const User = module.exports = mongoose.model('User', userSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.getUserByFirstName = function(firstName, callback){
    const query = { firstName: firstName }
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback) {
    newUser.save(callback);
}

module.exports.findAllUsers = function({}, callback) {
    User.find(callback);
}