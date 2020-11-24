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

  const SQL = 'SELECT * FROM Shop WHERE idx=?';
  const params = [idx, email];

  conn.query(SQL, params, function(err, rows, fields){
    if (err) {
      console.log(err);
    } 
    if(!rows[0]){
      console.log('비어 있음');
    } else {
      console.log('조회됨!');
    }
  });
}