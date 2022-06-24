const express = require("express");
const app = express();
app.use("/allProducts", require("./allProducts"));
app.use("/addProduct", require("./addProduct"));
app.use("/deleteProduct", require("./deleteProduct"));
module.exports = app;
