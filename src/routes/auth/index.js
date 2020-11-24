const express = require("express");
const auth = express();

auth.post('/register/local', require('./auth.controller').register);
auth.post('/login/local', require('./auth.controller').login);

module.exports = auth;