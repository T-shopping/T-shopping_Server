const mysql = require('mysql');

const conn = mysql.createConnection({
    'host': process.env.host,
    'user': process.env.user,
    'password': process.env.password,
    'database': process.env.database
});


module.exports = async (req, res) => {
    const { body } = req;
  
    const SQL = 'Update set community where 글 아이디 = ?';
    const params = ['글 아이디'];

    conn.query('', params, function(err, rows, fields){
        if(err){
            console.log(err);
        }
        else {
            res.json({
                "code": 200,
                "msg": "성공"
            });
        }
    });
}