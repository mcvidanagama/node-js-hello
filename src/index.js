var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.send("Hello World from WSO2 App Cloud");
});

app.listen(process.env.PORT || 8080);
