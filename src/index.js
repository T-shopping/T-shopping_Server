const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

app.listen(3000, function() {
    console.log("3000포트에서 열림");
});