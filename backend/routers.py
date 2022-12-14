from fastapi import APIRouter, Body, Request, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from typing import Optional, List
from models import Car, Branch, CarType, Employee, Customer, Reservation

router = APIRouter()

@router.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}

@router.get("/cars", response_description="List all cars", response_model=List[Car])
async def get_cars(request: Request):
    cars = list(request.app.db["cars"].find())
    return cars

@router.get("/cars/{id}", response_description="Get a single car", response_model=Car)
async def get_car(CarID: str, request: Request):
    if (car := request.app.db["cars"].find_one({"CarID": CarID})) is not None:
        return car

    raise HTTPException(status_code=404, detail=f"Car {CarID} not found")

@router.get("/branches", response_description="List all branches", response_model=List[Branch])
async def get_branches(request: Request):
    branches = list(request.app.db["branches"].find())
    return branches

@router.get("/carTypes", response_description="List all car types", response_model=List[CarType])
async def get_carTypes(request: Request):
    carTypes = list(request.app.db["carType"].find())
    return carTypes

@router.get("/employees", response_description="List all employees", response_model=List[Employee])
async def get_employees(request: Request):
    employees = list(request.app.db["employee"].find())
    return employees
