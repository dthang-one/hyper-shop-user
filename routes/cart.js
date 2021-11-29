const express = require('express');

const router = express.Router();
const cartController = require('../controllers/cart');

router.get('/', cartController.getCart);
router.post('/add', cartController.addToCart);

module.exports = router;
