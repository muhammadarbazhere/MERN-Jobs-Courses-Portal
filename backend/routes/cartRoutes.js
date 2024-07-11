// applyJobRoutes.js
const express = require('express');
const router = express.Router();

const { addCart, removeCart, getCartItems } = require('../controller/CartController');
const { verifyToken } = require('../controller/UserController')


router.post('/addCart', verifyToken, addCart); 
router.delete('/deleteCart', verifyToken, removeCart);
router.get('/getCart', verifyToken, getCartItems);

module.exports = router;
