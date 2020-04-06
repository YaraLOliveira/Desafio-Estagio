//chamda principal 
const express = require('express');
const routes = require("./routes");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');
const app = express();
//-----------------------------------------------
app.use(cookieParser());
app.use(express.json());
app.use(routes);
app.listen(3333);
module.exports = app;