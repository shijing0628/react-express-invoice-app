//dependencies
const express = require("express");
const router = express.Router();
const invoiceModel = require("../models/invoice");
//routes
router.put("/:invoiceId", (req, res) => {
  const input = req.body;
  invoiceModel.updateOne(
    {
      _id: req.params.invoiceId,
    },
    {
      sellerName: input.sellerName,
      sellerAddress: input.sellerAddress,
      customerName: input.customerName,
      customerAddress: input.customerAddress,
      items: input.items,
      finalPrice: input.finalPrice,
      terms: input.terms,
      invoiceDescription: input.invoiceDescription,
    },
    (err, invoice) => {
      if (err) {
        res
          .status(500)
          .json({ message: "Problem when update invoice to database." });
      } else {
        res.status(200).json(invoice);
      }
    }
  );
});

//export contents
module.exports = router;
