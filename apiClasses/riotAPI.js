/**
 * @author Ofek Azarya - "Bembelbi"
 */


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
	var DATA = new RiotAPIData();

	self.championmastery = {}; //A container to all the champion mastery api related functions
	self.summoner = {}; 	   //A container to all the summoner api realted funtions
	self.staticdata = {};

	/**
	 * Assembles argument to a request. Also adds the apikey is an argument!
	 *
	 * @param URL Request URL
	 * @param args A dictonary of the argument name as a key and value as his value
	 *
	 * @return Returns the assambled URL.
	 */
	self.assemble_request = function(URL, args) {
		if (typeof args === 'undefined') {
			args = {};
		}
		args.api_key = DATA.API_KEY;


		URL = URL + "?";
		for (var key in args) {
			URL = URL + key + "=" + args[key] + "&";
		}
		URL = URL.substring(0, URL.length - 1);

		return URL;
	};

	/**
	 * This funtion sends requests in parallel and performs a function on the respones (if given).
	 * This function does block the code until all getting all the responses or until its been too long.
	 * 
	 * @param requests A list of requests to send.
	 * @param method   A method to performe on the respones, a good use for this method is loading the data to a database.
	 *
	 * @return This function returns a list of dictionarys holding the data {status: <statusCode>, responseText: <data>}
	 *         The response index does not correspond to the request index.
	 */
	self.parallel_requests = function(requests, method) {};

	/**
	 * Make a single blocking XHR request and return the response parsed with JSON.parse . 
	 *
	 * @param request The request URL.
	 *
	 * @return Returns the reponse text, return null when failed;
	 */
	self.blocking_request = function(request) {
		var xhr = new XMLHttpRequest();

		xhr.open("GET", request, false);
		xhr.send();

		if (xhr.status != 200) {
			return null;
		}

		return JSON.parse(xhr.responseText);
	};

	/**
	 * Handle the base of all the api request made to the server and add the rest of the path to it.
	 *
	 * @param region The region the target data
	 * @param apiURL The url of the rest of the request
	 *
	 * @return The full URL of the request without the parameters
	 */
	self.handle_base = function(region, apiURL) {
		return DATA.URLS.base.format({
			host:DATA.HOSTS[region],
			url:apiURL
		});
	};

	////////////////////////////////////////////////////////////////////////
	/////////////////////////////// SUMMONER ///////////////////////////////
	////////////////////////////////////////////////////////////////////////

	/**
	 * Handle the base of all the summoner API requests.
	 * 
	 * @param region The region the target data
	 * @param apiURL The url of the rest of the request (Any formated URL in DATA.URLS.summoner aside from base)
	 *
	 * @return The full URL of the request without the parameters
	 */
	self.summoner.handle_base = function(region, apiURL) {
		return self.handle_base(region, DATA.URLS.summoner.base.format({
			region:DATA.HOSTS[region],
			version:DATA.API_VERSIONS.summoner,
			url:apiURL
		}));
	};

	/**
	 * Returns the id of a summoner given a name and a region.
	 */
	self.summoner.get_id = function(region, summonerName) {
		var byNameURL = DATA.URLS.summoner.by_name.format({
			summonerNames: summonerName
		});

		var summonerURL = self.summoner.handle_base(region, byNameURL);
		var request = self.assemble_request(summonerURL);

		return self.blocking_request(request)[summonerName]["id"];
	};

	////////////////////////////////////////////////////////////////////////
	/////////////////////////// CHAMPION MASTERY ///////////////////////////
	////////////////////////////////////////////////////////////////////////

	/**
	 * Handle the base of all the championmastery API requests.
	 * 
	 * @param region The region the target data
	 * @param apiURL The url of the rest of the request (Any formated URL in DATA.URLS.championmastery aside from base)
	 *
	 * @return The full URL of the request without the parameters
	 */
	self.championmastery.handle_base = function(region, playerId, apiURL) {
		return self.handle_base(region, DATA.URLS.championmastery.base.format({
			platformId:DATA.PLATFORMS[region],
			playerId:playerId,
			url:apiURL
		}));
	};

	/**
	 * Returns a champion mastery given a playerId and a championId
	 */
	self.championmastery.get_champion_mastery = function(region, playerId, championId) { 
		var singleChampionmasteryURL = DATA.URLS.championmastery.single_champion_mastery.format({
			championId: championId
		});

		var championmasteryURL =  self.championmastery.handle_base(region, playerId, singleChampionmasteryURL);
		var request = self.assemble_request(championmasteryURL);

		return self.blocking_request(request).championPoints;
	};

	/**
	 * Return all champions mastery of a given playerId
	 */
	self.championmastery.get_all_champions_mastery = function(region, playerId) {
		var allChampionsMasteryURL = DATA.championmastery.all_champions_mastery;
		var championmasteryURL = self.championmastery.handle_base(region, playerId, allChampionsMasteryURL);
		var request = self.assemble_request(championmasteryURL);

		return self.blocking_request(request);
	};

	/**
	 * Returns the sum of all champion mastery level of a given playerId
	 */
	self.championmastery.get_total_level = function(region, playerId) {
		var scoreURL = DATA.championmastery.score;
		var championmasteryURL = self.championmastery.handle_base(region, playerId, scoreURL);
		var request = self.assemble_request(championmasteryURL);

		return self.blocking_request(request);
	};

	/**
	 * Returns the top <count> champions mastery of a given playerId
	 */
	self.championmastery.get_top_champions = function(region, playerId, count) {
		var topChampionsURL = DATA.championmastery.top_champions;
		var championmasteryURL = self.championmastery.handle_base(region, playerId, topChampionsURL);
		var request = self.assemble_request(championmasteryURL, {count:count});

		return self.blocking_request(request);
	};

	////////////////////////////////////////////////////////////////////////
	///////////////////////////// STATIC DATA //////////////////////////////
	////////////////////////////////////////////////////////////////////////

	/**
	 * Handle the base of all the lol_static_data API requests.
	 * 
	 * @param region The region the target data
	 * @param apiURL The url of the rest of the request (Any formated URL in DATA.URLS.staticdata aside from base)
	 *
	 * @return The full URL of the request without the parameters
	 */
	self.statcidata.handle_base = function(apiURL) {
		return DATA.URLS.summoner.base.format({
			region:DATA.HOSTS.na,
			version:DATA.API_VERSIONS.lol_static_data,
			url:apiURL
		});
	};

	self.staticdata.get_champion_id = function(championName) { 
		return DATA.CHAMPIONS.championName;
	};

	self.staticdata.get_champion_name = function(championId) {
		return DATA.CHAMPIONS.championId;
	};

	/**
	 * This function return a dictonary with the champion names as keys (ids if dataById is true) and the diffrent data requests as sub keys.
	 *
	 * @param dataById (boolean) If true use champion id as keys
	 * @param args A list of data tags to request for
	 *             [all, allytips, altimages, blurb, enemytips, image, info, lore, partype, passive, recommended, skins, spells, stats, tags]
	 *
	 * @return A dictonary with the champion names as keys (ids if dataById is true) and the diffrent data requests as sub keys.
	 *		   Basic data is id, title, name, key. 
	 */ 
	self.staticdata.get_champions_list = function(dataById ,args) { 
		var championsDataURL = DATA.staticdata.champions;
		var staticdataURL = DATA.staticdata.handle_base(championsDataURL);
		var request = self.assemble_request(staticdataURL, {
			dataById:dataById,
			champData:args.toString()
		});

		return self.blocking_request(request).data;
	};

	/**
	 * Get data about a specific champion
	 * 
	 * @param championId The wanted champion id
	 * @param args A list of data tags to request for
	 *             [all, allytips, altimages, blurb, enemytips, image, info, lore, partype, passive, recommended, skins, spells, stats, tags]
	 *
	 * @return Returns the champion data as dictonary, each data tag is a key by it self. Basic data is id, title, name, key. 
	 */
	self.staticdata.get_champion = function(championId ,args) {
		var championDataURL = DATA.staticdata.champion.format({
			championId: championId
		});
		var staticdataURL = DATA.staticdata.handle_base(championDataURL);
		var request = self.assemble_request(staticdataURL, {champData:args.toString()});

		return self.blocking_request(request);
	};
}
