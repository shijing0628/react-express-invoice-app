//dependencies
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// static web server
app.use(express.static(path.join(__dirname, "dist")));

//connect to mongodb
mongoose.connect(
  "mongodb+srv://root:helloworld@" +
    "invoicegeneratorapp.iulw1.mongodb.net/invoiceStorage?" +
    "retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.on("error", (error) => {
  console.log("error" + error);
});
mongoose.connection.once("open", () => {
  console.log("connection is working");
});

//body parser

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//Rest API routes
app.use("/api/createinvoice", require("./routes/create.js"));
// app.use("/api/readinvoice", require("./routes/read.js"));
// app.use("/api/updateinvoice", require("./routes/update.js"));
// app.use("/api/deleteinvoice", require("./routes/delete.js"));

//port
app.listen(3000, () => {
  console.log("listen 3000");
});
