var path = require('path');

module.exports = function (app) {

	// Based on user's url, send the user to different pages
	// Whenever we get this url...
	app.get('/tables', function(req, res) {
		//...Execute this file, /tables.html
		res.sendFile(path.join(__dirname + '/../public/tables.html'));
	});

	app.get('/reserve', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/reserve.html'));
	});

	// If using app, going to any app other than tables or reserve, go to homepage
	app.use('/', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
}