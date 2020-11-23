const router = require('express').Router();

const CreateComm = require('./Comm.Ctrl/CreateComm');
const DetleComm = require('./Comm.Ctrl/DeleteComm');
const UpdateComm = require('./Comm.Ctrl/UpdateComm');
const GetById = require('./Comm.Ctrl/GetByidComm');
const GetAll = require('./Comm.Ctrl/GetComm');



router.post('/create', CreateComm);
router.delete('/delete', DetleComm);
router.patch('/put', UpdateComm);
router.get('/getbyid', GetById);
router.get('/getall', GetAll);


module.exports = router;