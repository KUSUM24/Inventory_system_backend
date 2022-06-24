const express = require("express");
const app = express();
app.use("/allCategories", require("./allCategories"));
app.use("/addCategory", require("./addCategory"));
app.use("/deleteCategory", require("./deleteCategory"));
app.use("/products", require("./../products/main"));
module.exports = app;
