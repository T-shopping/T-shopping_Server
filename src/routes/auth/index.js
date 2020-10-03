const express = require("express");
const auth = express();

auth.post('/register', require('./auth.controller').register);
auth.post('/login', require('./auth.controller').login);

module.exports = auth;