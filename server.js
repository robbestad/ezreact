var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var path = require("path");
var staticGzip =  require('http-static-gzip-regexp')

app.use(staticGzip(/(\.ico|\.html|\.js|\.css)$/));
app.use(express.static(path.join(__dirname, "public")));

app.get("*", function (req, res) {
  var file = path.join(__dirname, "public", req.path);
  //res.set('Content-Encoding', 'gzip');
  
  res.sendFile(file);
});

app.listen(port, function () {
});
