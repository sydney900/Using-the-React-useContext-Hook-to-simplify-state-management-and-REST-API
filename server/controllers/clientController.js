"use strict";

//require("../models/client");

var mongoose = require("mongoose"),
  Client = mongoose.model("Client");

exports.get_all_clients = function(req, res) {
  Client.find({}, function(err, client) {
    if (err) {
      res.status(500).send(err);
    }
    res.json(client);
  });
};

exports.create_client = function(req, res) {
  var new_client = new Client(req.body);
  new_client.save(function(err, client) {
    if (err) {
      res.status(400).send(err);
    }
    res.json(client);
  });
};

exports.read_client = function(req, res) {
  Client.findById(req.params.clientId, function(err, client) {
    if (err) res.send(err);
    res.json(client);
  });
};

exports.update_client = function(req, res) {
  Client.findOneAndUpdate(
    { _id: req.params.clientId },
    req.body,
    { new: true },
    function(err, client) {
      if (err) res.send(err);
      res.json(client);
    }
  );
};

exports.delete_client = function(req, res) {
  Client.findById(req.params.clientId, function(err, client) {
    if (err) {
      res.status(404).send(err);
      return;
    }

    Client.deleteOne(
      {
        _id: req.params.clientId
      },
      function(err, ret) {
        if (err) res.send(err);
        res.json(client);
      }
    );
  });
};
