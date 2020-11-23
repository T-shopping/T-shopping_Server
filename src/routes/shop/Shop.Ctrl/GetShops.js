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
  const keyword = req.query.keyword;

  const sql = 'SELECT * FROM Shop WHERE title LIKE ?';
  let params = [];

  if (keyword) {
    params = ['%', keyword, '%'];
  } else {
    params = ['%%'];
  }

  conn.query(sql, params, function(err, rows, fields){
    if (err) {
      console.log(err);
    } else {
      console.log('게시글 불러오기 성공!');
    }
  });
}