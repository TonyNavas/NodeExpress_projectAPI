const products = require('../Models/ProductModel');

function getProducts(req, res) {
  res.send(products);
}
module.exports = getProducts;