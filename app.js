const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To Database
mongoose.connect(config.database, { useNewUrlParser: true });

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
    console.log("Database error: " + err);
});

const app = express();

// CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const users = require('./routes/users');

app.use('/users', users);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Index Route
app.get('/', (req, res) => {
    res.send('INVALID ENDPOINT');
});

// PORT Number
const port = 3000;

// Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});

module.exports = app;