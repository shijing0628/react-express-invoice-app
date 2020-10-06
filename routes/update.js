//dependencies
const express = require("express");
const router = express.Router();

//routes
router.get("/", (req, res) => {
  res.send("hello from router update.js");
});

//export contents
module.exports = router;
