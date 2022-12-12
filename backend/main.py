import os
from fastapi import FastAPI
from dotenv import load_dotenv
from pymongo import MongoClient

app = FastAPI()
client = None

@app.on_event("startup")
async def startup_event():
    # Load config from a .env file:
    load_dotenv()
    MONGODB_URI = os.environ["MONGODB_URI"]
    client = MongoClient(MONGODB_URI)
    print("Connected to the MongoDB database!")

    print(client["inventory"].list_collection_names())
    collections = client["cars"].list_collection_names()
    for collection in collections:
        print(collection)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
    print("Disconnected from the MongoDB database!")
