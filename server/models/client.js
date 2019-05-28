const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: String,
  password: String,
  email: String,
  created: { type: Date, default: Date.now },
  modified: { type: Date, default: Date.now },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "product"
    }
  ]
});

// specify the transform schema option
if (!ClientSchema.options.toJSON) ClientSchema.options.toJSON = {};
ClientSchema.options.toJSON.transform = function(doc, ret, options) {
  // remove the _id of every document before returning the result
  delete ret._id;
};
ClientSchema.options.toJSON.virtuals = true;

// ClientSchema.virtual("id").get(() => ClientSchema.path("_id"));
// // Ensure virtual fields are serialised.
// ClientSchema.set("toJSON", {
//   virtuals: true
// });

ClientSchema.statics.addProduct = function(id, name) {
  const Product = mongoose.model("product");

  return this.findById(id).then(client => {
    const product = new Product({ name });
    client.products.push(product);
    return Promise.all([product.save(), client.save()]).then(
      ([product, client]) => client
    );
  });
};

ClientSchema.statics.deleteProduct = function(id, clientId) {
  const Client = mongoose.model("client");

  return Client.findById(clientId)
    .populate("products")
    .then(client => {
      const index = client.products.finIndex(element => element.id === id);
      if (index > -1) {
        client.products.splice(index, 1);
        return client.save().then(client => client);
      }
    });
};

ClientSchema.statics.findProducts = function(id) {
  return this.findById(id)
    .populate("products")
    .then(client => client.products);
};

module.exports = mongoose.model("Client", ClientSchema);
