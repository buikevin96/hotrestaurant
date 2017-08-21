var bodyParser = require('body-parser');
// Express makes routing easy for us using NodeJS
var express = require('express');
var path = require('path');

// Easily call express
var app = express();
// Take whatever port that is deployed by Heroku or 8080
var PORT = process.env.PORT || 8080;

 
app.listen(3000);

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

//Include api-routes into server file
require('./app/routing/api-routes')(app);
// Include html-routes into this server file
require('./app/routing/html-routes.js')(app);

// To know whenever our server is running whenever we use Node.JS
app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
})