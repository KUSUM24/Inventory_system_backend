const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", require("./routes/main"));
app.use("/products", require("./routes/products/main"));
app.use("/categories", require("./routes/categories/main"));
