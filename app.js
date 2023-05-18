const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require('cors');

app.use(express.json());
app.use(fileUpload());
app.use(cors());

//Routs Import
const product = require("./routes/productRoute");

app.use("/api/v1", product);

//Middleware for Error
app.use(errorMiddleware);

module.exports = app;