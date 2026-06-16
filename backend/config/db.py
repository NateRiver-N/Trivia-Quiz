from pymongo import MongoClient

MONGO_URI = "mongodb+srv://Ayaan_TriviaAdmin:Ayaan_TriviaAdmin@cluster0.pzollb5.mongodb.net/trivia"

client = MongoClient(MONGO_URI)

db = client["trivia"]

users_collection = db["users"]
questions_collection = db["questions"]

