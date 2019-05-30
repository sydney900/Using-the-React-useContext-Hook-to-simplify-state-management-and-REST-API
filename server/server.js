var express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  cors = require("cors"),
  Client = require("./models/client"), //created model loading here
  Product = require("./models/product"), //created model loading here
  bodyParser = require("body-parser"),
  config = require("./server-config.json"),
  process = require("process");

if (process.pid) {
  console.log("This process is your pid " + process.pid);
}

var port = process.env.PORT || config.server.port || 3001;
var dbUrl =
  process.env.MONGODB ||
  (config && config.mongodb && config.mongodb.url) ||
  "mongodb://localhost/mydb";

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl, { useNewUrlParser: true });
mongoose.connection
  .once("openUri", () => console.log("Connected to MongoLab instance."))
  .on("error", error => {
    console.log("Error connecting to MongoLab:", error);
    setTimeout(() => {
      mongoose.connect(dbUrl, { useNewUrlParser: true });
    }, 1000);
  });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var clientRoutes = require("./routes/clientRoutes"); //importing route
clientRoutes(app); //register the route
var productRoutes = require("./routes/productRoutes"); //importing route
productRoutes(app); //register the route

app.listen(port);

console.log("The RESTful API server started on: " + port);
