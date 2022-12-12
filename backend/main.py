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
    for db_info in client.list_database_names():
        print(db_info)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
    print("Disconnected from the MongoDB database!")
