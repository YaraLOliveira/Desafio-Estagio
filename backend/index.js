//chamda principal 
const express = require('express');
const routes = require("./routes");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');
const index = express();
//-----------------------------------------------
index.use(cookieParser());
index.use(express.json());
index.use(routes);

module.exports = index;
index.listen(3000);