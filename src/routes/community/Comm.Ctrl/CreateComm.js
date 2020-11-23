const mysql = require('mysql');

const conn = mysql.createConnection({
    'host': process.env.host,
    'user': process.env.user,
    'password': process.env.password,
    'database': process.env.database
});


module.exports = async (req, res) => {
    const { body } = req;
  
    const SQL = 'INSERT INTO community () VALUES(?, ?, ?, ?)';
    const params = [body.item_name, body.price, body.stock, body.category];

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