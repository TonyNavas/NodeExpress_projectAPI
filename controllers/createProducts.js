const products = require('../Models/ProductModel');

function createProduct(req, res) {
  const { name, price } = req.body;
  const id = products.length + 1;
  const newProduct = {
    id,
    name,
    price
  };
  products.push(newProduct);
  res.status(201).send(newProduct);
}

module.exports = createProduct;