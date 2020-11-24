const express = require('express');
const auth = express();

const authCtroller = require('./auth.controller')

auth.post('/reister/local', authCtroller.reqister);
auth.post('/login/local', authCtroller.login);