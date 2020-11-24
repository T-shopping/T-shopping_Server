const express = requier(express);
const auth = express();

auth.post('/reister/local', require('./auth.controller').reqister);
auth.post('/login/local', require('./auth.controller').login);