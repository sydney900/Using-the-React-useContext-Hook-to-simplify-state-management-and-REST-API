"use strict";
module.exports = function(app) {
  var products = require("../controllers/productController");

  // products Routes
  app
    .route("/products")
    .get(products.get_all_products)
    .post(products.create_product);

  app
    .route("/product/:productId")
    .all((req, res, next) => {
      if (!req.params.productId) return;
      next();
    })
    .get(products.read_product)
    .put(products.update_product)
    .delete(products.delete_product);
};
