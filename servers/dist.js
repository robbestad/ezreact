var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var path = require("path");
var compression = require("compression");

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "assets")));
app.use(compression());
app.get("*", function (req, res) {
  var file = path.join(__dirname, "../", "assets", req.path);
  res.sendFile(file);
});

app.listen(port, function () {});
