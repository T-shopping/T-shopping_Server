require('dotenv').config();
const mysql = require('mysql');

const { host } = process.env;
const { user } = process.env;
const { password } = process.env;
const { database } = process.env;

const conn = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
});

module.exports = async (req, res) => {
  const { body, user } = req;

  const SQL = 'INSERT INTO Shop (item_name, item_content, user_name, price, stock, category) VALUES(?, ?, ?, ?)';
  const params = [body.item_name, body.item_content, body.user_name, body.price, body.stock, body.category];

  conn.query(SQL, params, function(err, rows, fields){
    if (err) {
      console.log(err);
    } else {
      console.log('게시 성공!'); 
    }
  });
}