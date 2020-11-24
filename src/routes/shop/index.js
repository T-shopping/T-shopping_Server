const router = require('express').Router();

const authMiddleWare = require('../../middleware/auth');
const createShop = require('./Shop.Ctrl/CreateShop');
const deleteShop = require('./Shop.Ctrl/DeleteShop');
const getShops = require('./Shop.Ctrl/GetShops');
const getShop = require('./Shop.Ctrl/GetShop');
const purchaseShop = require('./Shop.Ctrl/PurchaseShop');

router.post('/create', authMiddleWare.user, createShop);
router.delete('/delete/:idx', authMiddleWare.user, deleteShop);
router.get('/getlist', authMiddleWare.guest, getShops);
router.get('/getshop/:idx', authMiddleWare.guest, getShop);
router.post('/purchase/:idx', authMiddleWare.user, purchaseShop);

module.exports = router;