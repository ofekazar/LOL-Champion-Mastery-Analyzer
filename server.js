var express = require('express');
var app = express();
var exphbs = require('express3-handlebars');
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

var RiotAPIData = require('./apiClasses/riotAPIData.js');
var RiotAPI = require('./apiClasses/riotAPI.js');


app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
	var riotAPI = new RiotAPI(XMLHttpRequest ,new RiotAPIData());

	var bembID = riotAPI.summoner.get_id("eune", "bembelbi");

	res.render('index', {
		name: bembID
	});
});
var port = Number(process.env.PORT || 5000);
app.listen(port);