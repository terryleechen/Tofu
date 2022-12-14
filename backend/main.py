import os
import uvicorn
from fastapi import FastAPI
from dotenv import load_dotenv
from pymongo import MongoClient

from routers import router

app = FastAPI()

@app.on_event("startup")
async def startup():
    app.client =  MongoClient()
    app.db =  app.client["inventory"]
    print("Connected to the MongoDB database!")

@app.on_event("shutdown")
async def shutdown():
    app.client.close()
    print("Disconnected from the MongoDB database!")

app.include_router(router)

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host ="127.0.0.1",
        port = 8000,
        reload= True,
    )