// applyJobRoutes.js
const express = require('express');
const router = express.Router();

const { addToCart, removeFromCart, getUserCart } = require('../controller/CartController');
const { verifyToken } = require('../controller/UserController')


router.post('/addCart', verifyToken, addToCart); 
router.delete('/deleteCart/:id', verifyToken, removeFromCart);
router.get('/getUserCart', verifyToken, getUserCart);

module.exports = router;
