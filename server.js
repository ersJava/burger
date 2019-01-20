var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
host: "localhost",
port: 3306,
user: "root",
password: "think&gr0W$",
database: "burgers_db"
});


app.listen(PORT, function() {
console.log("Server listening on: http://localhost:" + PORT);
});