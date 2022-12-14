from fastapi import APIRouter, Body, Request, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from typing import Optional, List
from models import Car

router = APIRouter()

@router.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}

@router.get("/cars", response_description="List all cars", response_model=List[Car])
async def get_cars(request: Request):
    cars = list(request.app.db["cars"].find())
    return cars

    