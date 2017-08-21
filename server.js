var bodyParser = require('body-parser');
// Express makes routing easy for us using NodeJS
var express = require('express');
// Easily call express
var app = express();
// Take whatever port that is deployed by Heroku or 8080
var PORT = process.env.PORT || 8080;
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000);

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

// To know whenever our server is running whenever we use Node.JS
app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
})