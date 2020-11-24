require('dotenv').config();
const bodyParser = require('body-parser');
const express = require("express");
const app = express();

const api = require('./routes');
app.use( bodyParser.urlencoded({ extended : true }));
app.use( bodyParser.json());

// app.use('/', api);

app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

app.listen(process.env.PORT, function() {
    console.log(`${process.env.PORT}포트에서 열림`);
});