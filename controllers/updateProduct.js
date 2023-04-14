const products = require('../Models/ProductModel');

function updateProduct(req, res) {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === id);
  if (productIndex === -1) {
    res.sendStatus(404);
  } else {
    const { name, price } = req.body;
    const updatedProduct = {
      id,
      name,
      price
    };
    products[productIndex] = updatedProduct;
    res.send(updatedProduct);
  }
}

module.exports = updateProduct;