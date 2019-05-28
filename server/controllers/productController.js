"use strict";

var mongoose = require("mongoose"),
  Product = mongoose.model("Product");

exports.get_all_products = function(req, res) {
  Product.find({}, function(err, product) {
    if (err) res.send(err);
    res.json(product);
  });
};

exports.create_product = function(req, res) {
  var new_product = new Product(req.body);
  new_product.save(function(err, product) {
    if (err) res.send(err);
    res.json(product);
  });
};

exports.read_product = function(req, res) {
  Product.findById(req.params.productId, function(err, product) {
    if (err) res.send(err);
    res.json(product);
  });
};

exports.update_product = function(req, res) {
  Product.findOneAndUpdate(
    { _id: req.params.productId },
    req.body,
    { new: true },
    function(err, product) {
      if (err) res.send(err);
      res.json(product);
    }
  );
};

exports.delete_product = function(req, res) {
  Product.findById(req.params.productId, function(err, product) {
    if (err) {
      res.send(err);
      return;
    }

    Product.deleteOne(
      {
        _id: req.params.productId
      },
      function(err, ret) {
        if (err) res.send(err);
        res.json(product);
      }
    );
  });
};
