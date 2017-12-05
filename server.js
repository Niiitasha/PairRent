var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var pg = require("pg");
var pool = require("./pg-connection-pool");

app.use(express.static('client/build'));
app.use(bodyParser.json());


app.get("/api/profiles", function(req, res) {
  pool.query("SELECT * FROM pairrent").then(function(result) {
    res.send(result.rows);
  }).catch(function(err) {
    console.log(err);
    res.status(500);
    res.send("Failed to Load");
  });
});

var port = process.env.PORT || 5000;
var server = app.listen(port, function () {
console.log("App's server listening at http://localhost:%s", port);
});
