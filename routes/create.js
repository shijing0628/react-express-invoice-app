//dependencies
const express = require("express");
const router = express.Router();
const invoiceModel = require("../models/invoice");

//routes
router.post("/", (req, res) => {
  const input = req.body;

  const newDocument = new invoiceModel({
    sellerName: input.sellerName,
    sellerAddress: input.sellerAddress,
    customerName: input.customerName,
    customerAddress: input.customerAddress,
    items: input.items,
    finalPrice: input.finalPrice,
    terms: input.terms,
    invoiceDescription: input.invoiceDescription,
  });

  // save info to DB
  newDocument.save((err, doc) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Problem when saving info to database." });
    } else {
      res
        .status(200)
        .json({ message: "invoice saving info to database successfully." });
    }
  });
});

//export contents
module.exports = router;
