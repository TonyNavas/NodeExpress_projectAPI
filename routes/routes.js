const express = require('express');
const router = express.Router();

const getProducts = require('../controllers/getProducts');
const createProduct = require('../controllers/createProducts');
const updateProduct = require('../controllers/updateProduct');
const deleteProduct = require('../controllers/deleteProduct');

router.get('/products', getProducts);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;