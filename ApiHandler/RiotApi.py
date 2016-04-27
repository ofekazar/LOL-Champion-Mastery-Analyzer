import RiotApiData as Consts
import requests

class RiotApi():

	def __init__(self, api_key):
		self.api_key = api_key

	def _request(self, region, api_url, params = {}):
		args = {"api_key": self.api_key}
		for key, value in params.items():
			if key not in args:
				args[key] = value

		response = requests.get(
				Consts.URLS["base"].format(
						host=Consts.HOSTS[region],
						url=api_url
					),
				params=args
			)

		return response.json()

	#############################################################
	####                  Champion Mastery                   ####
	#############################################################

	def handle_base_championmastery(self, region, player_id, api_url):
		return Consts.URLS["championmastery"]["base"].format(
				platformId=Consts.PLATFORMS[region],
				playerId=player_id,
				url=api_url
			)

	#############################################################
	####                      Summoner                       ####
	#############################################################
	

	def handle_base_summoner(self, region, api_url):
		return Consts.URLS["summoner"]["base"].format(
				region=Consts.HOSTS[region],
				version=Consts.API_VERSIONS["summoner"],
				url=api_url
			)

	def get_summoner_id(self, region, summoner_name):
		by_name_url = Consts.URLS["summoner"]["by_name"].format(
				summonerNames=summoner_name
			)
		summoner_url = self.handle_base_summoner(region, by_name_url)

		return self._request(region, summoner_url)[summoner_name]["id"]