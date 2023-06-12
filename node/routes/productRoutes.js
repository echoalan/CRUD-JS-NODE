const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');


router.get('/products', productController.getAllProducts);
router.post('/products', productController.createProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;