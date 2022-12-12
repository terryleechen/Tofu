import uuid
from typing import Optional
from pydantic import BaseModel, Field

class Car(BaseModel):
    id: Optional[str] = Field(default_factory=uuid.uuid4, alias="_id")
    CarID: str = Field(...)
    Make: str = Field(...)
    Model: str = Field(...)
    Year: int = Field(...)
    Color: str = Field(...)
    FuelType: str = Field(...)
    LicensePlate: str = Field(...)
    Status: int = Field(...)
    Mileage: int = Field(...)

    class config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "CarID": "1",
                "Make": "Toyota",
                "Model": "Camry",
                "Year": 2010,
                "Color": "Blue",
                "FuelType": "Gas",
                "LicensePlate": "ABC123",
                "Status": 1,
                "Mileage": 1000
            }
        }
        