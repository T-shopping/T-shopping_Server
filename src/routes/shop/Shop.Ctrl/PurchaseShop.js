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
  const { stock } = req.body;
  const { idx } = req.params;

  const sql = 'UPDATE Shop SET stock=? WHERE idx=?';
  const params = [stock - 1, idx];

  conn.query(sql, params, function(err, rows, fields){
    if (err) {
      console.log(err);
    } else {
      console.log('게시글 불러오기 성공!');
    }
  });
}