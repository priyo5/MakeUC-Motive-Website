
var mysql = require('mysql');
var con = mysql.createConnection({
    host: '41.50.187.94',
    //port: '25565', 
    user: 'Sameer',
    password: 'Samo1234',
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });