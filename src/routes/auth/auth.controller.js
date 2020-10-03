const express = require('express');
const app = express();
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const { user } = process.env;
const { password } = process.env;
const { database } = process.env;
const dbOptions = {
    host: 'localhost',
    user: user,
    password: password,
    database: database
};
app.use(session({
    secret: process.env.database,
    store: new MySQLStore(dbOptions),
    resave: false,
    saveUninitialized: false
}))
exports.register = (res,req) =>{
    const User_info = {
        email : req.body.email,
        user_name : req.body.user_name,
        address: req.body.address,
        branch_number: req.body.branch_number,
        phone : req.body.phone,
        gender: req.body.gender
    }
    connenction.query('INSERT INTO User_info SET ?' , User_info, function (error, results, fields) {
        if (error) {
            console.log("error ocurred", error);
            res.send({
                "code" : 400,
                "failed": "error ocurred"
            })
        } else {
            console.log('The solution is: ', results);
            res.send({
                "code": 200,
                "success": "user registered sucessfully"
            });
        }
    });
}
exports.login = (res, req) =>{
    const email = req.body.email;
    const password = req.body.password;
    connenction.qurey('SELECT * FROM User_info WHERE email = ?',[email]),
    function(error, results, fields){
        if (error){
            res.send({
                "code" : 400,
                "failed" : "error ocurred"
            })
        } else{
            if(results.length > 0) {
                if(results[0].password == password) {
                    res.send({
                        "code": 200,
                        "success": "login sucessfull"
                    });
                    req.session.email = results[0].email;
                    req.session.save(function(){ 
                        rsp.redirect('/');
                    });
                } else {
                    res.send({
                        "code": 204,
                        "success": "Email and password does not match"
                    });
                }
            } else {
                res.send({
                    "code":204,
                    "success": "Email does not exists"
                });
            }
        }
    }
}