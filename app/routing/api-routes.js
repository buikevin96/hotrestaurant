var tableData = require ('../data/table-data.js');
var waitingListData = require ('../data/waitinglist-data.js');

module.exports = function (app) {

	// Get function, whenever you go to this url...
	app.get('/api/tables', function (req, res) {
		//... Display tableData in json format
		res.json(tableData);
	});
	// Get function, whenever you go to this url...
	app.get('/api/waitlist', function (req, res) {
		//... Display waitingListData
		res.json(waitingListData);
	});
}