//dependencies
const express = require("express");
const router = express.Router();
const invoiceModel = require("../models/invoice");
//routes
router.delete("/:invoiceId", (req, res) => {
  invoiceModel.deleteOne(
    {
      _id: req.params.invoiceId,
    },
    (err, invoice) => {
      if (err) {
        res
          .status(500)
          .json({ message: "Problem when delete invoice to database." });
      } else {
        res
          .status(200)
          .json({ message: "this invoice is deleted from database" });
      }
    }
  );
});

//export contents
module.exports = router;
