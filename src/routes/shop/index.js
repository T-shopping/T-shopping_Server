const router = require('express').Router();

const createShop = require('./Shop.Ctrl/CreateShop');
const deleteShop = require('./Shop.Ctrl/DeleteShop');
const getShops = require('./Shop.Ctrl/GetShops');
const getShop = require('./Shop.Ctrl/GetShop');
const searchShop = require('./Shop.Ctrl/SearchShop');
const purchaseShop = require('./Shop.Ctrl/PurchaseShop');

router.post('/create', createShop);
router.delete('/delete', deleteShop);
router.get('/getlist', getShops);
router.get('/getshop', getShop);
router.get('/purchase', purchaseShop);

module.exports = router;