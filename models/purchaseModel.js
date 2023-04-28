const mongoose = require("mongoose");

const purchaseSchema = mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: "User"
  // },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product"
  },
  purchaseDay: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true,
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now
  // }
},
{
  timestamps: true,
}
);

// Define the model for the sales collection
const Purchase = mongoose.model("Purchase", purchaseSchema);
module.exports = Purchase;