const express = requier(express);
const auth = express();

auth.post('/reister/local', require('./auth.controller'));
auth.post('login/auth', require('./auth.controller'));