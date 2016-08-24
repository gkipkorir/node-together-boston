var express = require('express');
var rules = require('./app/index.js');
var app = express();
app.use(rules);


var port = process.env.PORT || "8080";
var host = process.env.HOST || "0.0.0.0";


app.listen(port, host);
console.log("Listening on port 8080");