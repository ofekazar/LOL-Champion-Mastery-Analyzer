
#Those are the host starts for the different regions, uses the format:
#{Host}.api.pvp.net
HOSTS = {
	"brazil"              : 'br'   ,
	"europe_nordic_east"  : 'eune' ,
	"europe_west"         : 'euw'  ,
	"korea"               : 'kr'   ,
	"latin_america_north" : 'lan'  ,
	"latin_america_south" : 'las'  ,
	"north_america"       : 'na'   ,
	"oceania"             : 'oce'  ,
	"russia"              : 'ru'   ,
	"turkey"              : 'tr'   ,
    
    "br"   : 'br'   ,
    "eune" : 'eune' ,
    "euw"  : 'euw'  ,
    "kr"   : 'kr'   ,
    "lan"  : 'lan'  ,
    "las"  : 'las'  ,
    "na"   : 'na'   ,
    "oce"  : 'oce'  ,
    "ru"   : 'ru'   ,
    "ty"   : 'tr'
}

PLATFORMS = {
    "brazil"              : 'BR1'  ,
    "europe_nordic_east"  : 'EUN1' ,
    "europe_west"         : 'EUW1' ,
    "korea"               : 'KR'   ,
    "latin_america_north" : 'LA1'  ,
    "latin_america_south" : 'LA2'  ,
   	"north_america"       : 'NA1'  ,
    "oceania"             : 'OC1'  ,
    "russia"              : 'RU'   ,
    "turkey"              : 'TR1'  ,

    "br"   : 'BR1'  ,
    "eune" : 'EUN1' ,
    "euw"  : 'EUW1' ,
    "kr"   : 'KR'   ,
    "lan"  : 'LA1'  ,
    "las"  : 'LA2'  ,
    "na"   : 'NA1'  ,
    "oce"  : 'OC1'  ,
    "ru"   : 'RU'   ,
    "ty"   : 'TR1'    
}

#All the queue type introduced to League of Legends
QUEUE_TYPES = [
    'CUSTOM',  # Custom games
    'NORMAL_5x5_BLIND',  # Normal 5v5 blind pick
    'BOT_5x5',  # Historical Summoners Rift coop vs AI games
    'BOT_5x5_INTRO',  # Summoners Rift Intro bots
    'BOT_5x5_BEGINNER',  # Summoner's Rift Coop vs AI Beginner Bot games
    'BOT_5x5_INTERMEDIATE',  # Historical Summoner's Rift Coop vs AI Intermediate Bot games
    'NORMAL_3x3',  # Normal 3v3 games
    'NORMAL_5x5_DRAFT',  # Normal 5v5 Draft Pick games
    'ODIN_5x5_BLIND',  # Dominion 5v5 Blind Pick games
    'ODIN_5x5_DRAFT',  # Dominion 5v5 Draft Pick games
    'BOT_ODIN_5x5',  # Dominion Coop vs AI games
    'RANKED_SOLO_5x5',  # Ranked Solo 5v5 games
    'RANKED_PREMADE_3x3',  # Ranked Premade 3v3 games
    'RANKED_PREMADE_5x5',  # Ranked Premade 5v5 games
    'RANKED_TEAM_3x3',  # Ranked Team 3v3 games
    'RANKED_TEAM_5x5',  # Ranked Team 5v5 games
    'BOT_TT_3x3',  # Twisted Treeline Coop vs AI games
    'GROUP_FINDER_5x5',  # Team Builder games
    'ARAM_5x5',  # ARAM games
    'ONEFORALL_5x5',  # One for All games
    'FIRSTBLOOD_1x1',  # Snowdown Showdown 1v1 games
    'FIRSTBLOOD_2x2',  # Snowdown Showdown 2v2 games
    'SR_6x6',  # Hexakill games
    'URF_5x5',  # Ultra Rapid Fire games
    'BOT_URF_5x5',  # Ultra Rapid Fire games played against AI games
    'NIGHTMARE_BOT_5x5_RANK1',  # Doom Bots Rank 1 games
    'NIGHTMARE_BOT_5x5_RANK2',  # Doom Bots Rank 2 games
    'NIGHTMARE_BOT_5x5_RANK5',  # Doom Bots Rank 5 games
    'ASCENSION_5x5',  # Ascension games
    'HEXAKILL',  # 6v6 games on twisted treeline
    'KING_PORO_5x5',  # King Poro game games
    'COUNTER_PICK',  # Nemesis games,
    'BILGEWATER_5x5',  # Black Market Brawlers games
]

#The different maps existing in League of Legends
GAME_MAPS = [
    {'map_id': 1, 'name': "Summoner's Rift", 'notes': "Summer Variant"},
    {'map_id': 2, 'name': "Summoner's Rift", 'notes': "Autumn Variant"},
    {'map_id': 3, 'name': "The Proving Grounds", 'notes': "Tutorial Map"},
    {'map_id': 4, 'name': "Twisted Treeline", 'notes': "Original Version"},
    {'map_id': 8, 'name': "The Crystal Scar", 'notes': "Dominion Map"},
    {'map_id': 10, 'name': "Twisted Treeline", 'notes': "Current Version"},
    {'map_id': 11, 'name': "Summoner's Rift", 'notes': "Current Version"},
    {'map_id': 12, 'name': "Howling Abyss", 'notes': "ARAM Map"},
    {'map_id': 14, 'name': "Butcher's Bridge", 'notes': "ARAM Map"},
]

API_VERSIONS = {
    'champion': 1.2,
    'current-game': 1.0,
    'featured-games': 1.0,
    'game': 1.3,
    'league': 2.5,
    'lol-static-data': 1.2,
    'lol-status': 1.0,
    'match': 2.2,
    'matchlist': 2.2,
    'stats': 1.3,
    'summoner': 1.4,
    'team': 2.4
}

#The different errors a riot api request can throw
ERRORS = {
	400: "Bad request",
	401: "Unauthorized",
	403: "Blacklisted key",
	404: "Game data not found",
	429: "Too many requests",
	500: "Internal server error",
	503: "Service unavailable",
	504: 'Gateway timeout'
}

#The urls used to make a request to the server
URLS = {
	"base": "https://{host}.api.pvp.net/{url}",
	"summoner": {
		"base"           : "api/lol/{region}/v{version}/summoner/{url}",
		"by_name"        : "by-name/{summonerNames}",
		"by_ids"         : "{summonerIds}",
		"masteries_by_id": "{summonerIds}/masteries",
		"name_by_id"     : "{summonerIds}/name",
		"runes_by_id"    : "{summonerIds}/runes"
	},
	"championmastery": {
		"base"  				  : "championmastery/location/{platformId}/player/{playerId}/{url}",
		"single_champion_mastery" : "champion/{championId}",
		"all_champions_mastery"   : "champions",
		"total_score"             : "score",
		"top_champions"           : "topchampions"
	}
}