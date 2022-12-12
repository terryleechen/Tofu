from fastapi import APIRouter, Body, Request, Response, HTTPException, status
from fastapi.encoders import jsonable_encoder
from typing import List

from models import Car

router = APIRouter()

@router.get("/", response_description="List all cars", response_model=List[Car])
def list_books(request: Request):
    cars = list(request.app.database["cars"].find(limit=100))
    return cars