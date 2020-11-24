const router = require('express').Router();

const auth = require('./auth');
const community = require('./community');
const shop = require('./shop');

router.use('/auth', auth);
router.use('/community', community);
router.use('/shop', shop);

module.exports = router