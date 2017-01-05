var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'ecommerce'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

app.get("/",function(req,res){
connection.query('SELECT * from products LIMIT 2', function(err, rows, fields) {
connection.end();
  if (!err){
    console.log('The solution is: ', rows);
	// var json = { name :"ed" , dni :"30103343" , surname : "asdas"} 
	res.send(rows);
  }else
    console.log('Error while performing Query.');
  });
  
  //insert
  
 var post  = { UserEmail: 'Hello MySQL' , userPassword: 'Hello MySQL' , userName: 'Hello MySQL' };
 var query = connection.query('INSERT INTO users SET ?', post, function(err, result) {
   // Neat!
 });
 console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
 
 //updateCommands
 connection.query('UPDATE users SET ? WHERE IdUsers = ?', [{ userName: 'alka' }, 21])
 connection.query('UPDATE users SET ? WHERE ?', [{ userName: 'keko' }, { IdUsers: 22 }])
 //connection.query('UPDATE users SET userName = :userName WHERE IdUser = :IdUser', {IdUser: 21, userName: 'alka'})
});

app.listen(3000);