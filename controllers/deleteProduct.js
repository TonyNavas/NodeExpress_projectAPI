const products = require('../Models/ProductModel');

function deleteProduct(req, res) {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === id);
  if (productIndex === -1) {
    res.sendStatus(404);
  } else {
    products.splice(productIndex, 1);
    res.sendStatus(204);
    console.log("Producto eliminado correctamente")
  }
}

module.exports = deleteProduct;