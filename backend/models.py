import uuid
from typing import Optional
from pydantic import BaseModel, Field
#from bson import ObjectId


class Car(BaseModel):
    CarID: str = Field(...)
    Make: str = Field(...)
    Model: str = Field(...)
    Year: int = Field(...)
    Color: str = Field(...)
    FuelType: str = Field(...)
    LicensePlate: str = Field(...)
    Status: str = Field(...)
    Mileage: int = Field(...)

    class config:
        allow_population_by_field_name = True
        artitrary_types_allowed = True
        #json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "CarID": "1",
                "Make": "Toyota",
                "Model": "Camry",
                "Year": 2010,
                "Color": "Blue",
                "FuelType": "Gas",
                "LicensePlate": "ABC123",
                "Status": "Available",
                "Mileage": 1000
            }
        }
        