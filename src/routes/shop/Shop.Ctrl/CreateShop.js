const mysql = require('mysql');

module.exports = async (req, res) => {
  const { body, user } = req;

  const SQL = 'INSERT INTO Shop (item_name, price, stock, category) VALUES(?, ?, ?, ?)';
  const params = [body.item_name, body.price, body.stock, body.category];

}