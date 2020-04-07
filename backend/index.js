//chamda principal 
const express = require('express');
const routes = require("./src/routes/routes");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const app = express();
//-----------------------------------------------
app.use(cookieParser());
app.use(express.json());
app.use(routes);
app.listen(3333);
module.exports = app;