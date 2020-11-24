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
  const { email } = req;
  const { idx } = req.params;

  const SQL = 'DELETE FROM Shop WHERE idx=? & user_name=?';
  const params = [idx, email];

  conn.query(SQL, params, function(err, rows, fields){
    if (err) {
      console.log(err);
    } else {
      console.log('삭제 성공!');
    }
  });
}