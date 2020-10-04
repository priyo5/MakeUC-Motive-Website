var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
//port:"25565",
  user: "root",
  password: ""
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});