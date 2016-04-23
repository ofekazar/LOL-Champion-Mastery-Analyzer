from api_key import API_KEY as API_KEY
from RiotApi import RiotApi

def main():
	api = RiotApi(API_KEY)
	print api.get_summoner_id("eune", "bembelbi")

if __name__ == "__main__":
	main()