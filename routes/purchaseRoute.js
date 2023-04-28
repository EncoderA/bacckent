const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const { createPurchase, getPurchase } = require("../controllers/purchaseController");
 

router.post("/createPurchase", protect, createPurchase);
router.get("/getPurchase", protect, getPurchase);

module.exports = router;
