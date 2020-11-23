require('dotenv').config();
const express = require("express");
const app = express();

const api = require('./routes');

app.use('/', api);

app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

app.listen(process.env.PORT, function() {
    console.log("3000포트에서 열림");
});