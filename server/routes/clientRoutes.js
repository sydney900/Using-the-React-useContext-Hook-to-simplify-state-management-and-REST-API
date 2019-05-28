"use strict";
module.exports = function(app) {
  var clients = require("../controllers/clientController");

  // clients Routes
  app
    .route("/clients")
    .get(clients.get_all_clients)
    .post(clients.create_client);

  app
    .route("/clients/:clientId")
    .all((req, res, next) => {
      if (!req.params.clientId) return;
      next();
    })
    .get(clients.read_client)
    .put(clients.update_client)
    .delete(clients.delete_client);
};
