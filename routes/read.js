//dependencies
const express = require("express");
const router = express.Router();
const invoiceModel = require("../models/invoice");

//routes
router.get("/all", (req, res) => {
  invoiceModel.find((err, docs) => {
    if (err) {
      res.status(500).json({ message: "Problem when read info to database." });
    } else {
      res.status(200).json(docs);
    }
  });
});

router.get("/:invoiceId", (req, res) => {
  invoiceModel.findOne(
    {
      _id: req.params.invoiceId,
    },
    (err, invoice) => {
      if (err) {
        res
          .status(500)
          .json({ message: "Problem when read invoice to database." });
      } else {
        res.status(200).json(invoice);
      }
    }
  );
});

//export contents
module.exports = router;
