
module.exports = function RiotAPIData() {

	this.API_KEY = "a87fca94-3772-455d-a6df-e49033325d1e"

	this.HOSTS = {
		brazil              : 'br'   ,
		europe_nordic_east  : 'eune' ,
		europe_west         : 'euw'  ,
		korea               : 'kr'   ,
		latin_america_north : 'lan'  ,
		latin_america_south : 'las'  ,
		north_america       : 'na'   ,
		oceania             : 'oe'  ,
		russia              : 'ru'   ,
		turkey              : 'tr'   ,
	    
	    br   : 'br'   ,
	    eune : 'eune' ,
	    euw  : 'euw'  ,
	    kr   : 'kr'   ,
	    lan  : 'lan'  ,
	    las  : 'las'  ,
	    na   : 'na'   ,
	    oce  : 'oce'  ,
	    ru   : 'ru'   ,
	    ty   : 'tr'
	}

	this.PLATFORMS = {
	    brazil              : 'BR1'  ,
	    europe_nordic_east  : 'EUN1' ,
	    europe_west         : 'EUW1' ,
	    korea               : 'KR'   ,
	    latin_america_north : 'LA1'  ,
	    latin_america_south : 'LA2'  ,
	   	north_america       : 'NA1'  ,
	    oceania             : 'OC1'  ,
	    russia              : 'RU'   ,
	    turkey              : 'TR1'  ,

	    br   : 'BR1'  ,
	    eune : 'EUN1' ,
	    euw  : 'EUW1' ,
	    kr   : 'KR'   ,
	    lan  : 'LA1'  ,
	    las  : 'LA2'  ,
	    na   : 'NA1'  ,
	    oce  : 'OC1'  ,
	    ru   : 'RU'   ,
	    ty   : 'TR1'    
	}

	this.API_VERSIONS = {
	    champion        : "1.2",
	    current_game    : "1.0",
	    featured_games  : "1.0",
	    game            : "1.3",
	    league          : "2.5",
	    lol_static_data : "1.2",
	    lol_status      : "1.0",
	    match           : "2.2",
	    matchlist       : "2.2",
	    stats           : "1.3",
	    summoner        : "1.4",
	    team            : "2.4"
	}

	this.URLS = {
		base: "https://{host}.api.pvp.net/{url}",
		summoner: {
			base           : "api/lol/{region}/v{version}/summoner/{url}",
			by_name        : "by-name/{summonerNames}",
			by_ids         : "{summonerIds}",
			masteries_by_id: "{summonerIds}/masteries",
			name_by_id     : "{summonerIds}/name",
			runes_by_id    : "{summonerIds}/runes"
		},
		championmastery: {
			base  				  : "championmastery/location/{platformId}/player/{playerId}/{url}",
			single_champion_mastery : "champion/{championId}",
			all_champions_mastery   : "champions",
			total_score             : "score",
			top_champions           : "topchampions"
		}
	}
}