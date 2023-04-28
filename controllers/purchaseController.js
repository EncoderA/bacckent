const asyncHandler = require("express-async-handler");
// const Sale = require("../models/saleModel");
const Purchase = require("../models/purchaseModel")
// const Product = require("../models/productModel");


// Create a new sale document and save it to the database
// Create a new sale document and save it to the database
const createPurchase = asyncHandler( async (req, res) => {
  // const product = await Product.findOne({ _id: _id })
    const { purchaseDay, date } = req.body;

    if (!purchaseDay || !date ) {
      res.status(400);
      throw new Error("Please fill in all fields");
    }

    const purchase = await Purchase.create({
      product: req.product._id,
      purchaseDay,
      date,
     
    });

   
    res.status(201).json(sale);
   
});



const getPurchase = asyncHandler(async (req, res) => {
  const purchases = await Purchase.find({ product: req.product._id }).sort("-createdAt");
  res.status(200).json(purchases);
});


module.exports = { createPurchase, getPurchase };