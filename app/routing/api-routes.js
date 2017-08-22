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

	// When post to /api/tables, run this function
	app.post("/api/tables", function (req, res) {
		// If less than 5 entries
		if(tableData.length < 5) {
			// Send reservation to tableData array
			tableData.push(req.body);
			// Boolean value to trigger different message to user
			res.json(true);
		} else {
			// Otherwise send to waitListData array
			waitingListData.push(req.body);
			res.json(false);
		}
	});

	app.post("/api/clear", function(){
		// Clear the tableData and waitingListData array
		tableData = [];
		waitingListData = [];

		console.log(tableData);
		console.log(waitingListData);
	})
}