
String.prototype.format = function(dict) {
	var result = this;
	for (var key in dict) {
		if (dict.hasOwnProperty(key)) {
			result = result.replace("{" + key + "}", dict[key]);
		}
	}
	return result;
};

module.exports = function RiotAPI(XMLHttpRequest, DATA) {
	var self = this;
	self.champion = {};
	self.championmastery = {}; //A container to all the champion mastery api related functions
	self.summoner = {}; 	   //A container to all the summoner api realted funtions

	self.request = function(URL, args) {
		if (typeof args === 'undefined') {
			args = {};
		}
		args.api_key = DATA.API_KEY;


		URL = URL + "?";
		for (var key in args) {
			URL = URL + key + "=" + args[key] + "&";
		}
		URL = URL.substring(0, URL.length - 1);

		xhr = new XMLHttpRequest();

		xhr.open("GET", URL, false);

		xhr.send(null);

		var response = JSON.parse(xhr.responseText);

		return response;
	}
	
	self.handle_base = function(region, apiURL) {
		return DATA.URLS.base.format({
			host:DATA.HOSTS[region],
			url:apiURL
		});
	}

	self.summoner.handle_base = function(region, apiURL) {
		return self.handle_base(region, DATA.URLS.summoner.base.format({
			region:DATA.HOSTS[region],
			version:DATA.API_VERSIONS.summoner,
			url:apiURL
		}));
	}

	self.summoner.get_id = function(region, summonerName) {
		byNameURL = DATA.URLS.summoner.by_name.format({
			summonerNames: summonerName
		});

		summonerURL = self.summoner.handle_base(region, byNameURL);

		return self.request(summonerURL)[summonerName]["id"];
	}
}
