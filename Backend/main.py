from fastapi import FastAPI, Depends, HTTPException
from sqlmodel import SQLModel, Session, create_engine, Field, select
from pydantic import BaseModel
import httpx
import os
from contextlib import asynccontextmanager
from typing import List, Optional
from math import radians, sin, cos, sqrt, atan2
from fastapi.middleware.cors import CORSMiddleware

@asynccontextmanager
async def lifespan(app: FastAPI):
    yield

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Creating database and tables...")
    create_db_and_tables()
    yield
    print("Shutting down...")

sqlite_url = "sqlite:///./emergency.db"
engine = create_engine(sqlite_url, connect_args={"check_same_thread": False}, echo=True)

class Ambulance(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    latitude: float
    longitude: float
    contact: str
    available: bool = True

class Hospital(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    latitude: float
    longitude: float
    contact: str

class RouteRequest(BaseModel):
    start_lat: float
    start_lng: float
    end_lat: float
    end_lng: float
    mode: str = "driving"

class RouteResponse(BaseModel):
    distance: float
    duration: float
    polyline: List[List[float]]

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session

app = FastAPI(lifespan=lifespan)

def haversine(lat1, lon1, lat2, lon2):
    R = 6371000
    φ1 = radians(lat1)
    φ2 = radians(lat2)
    Δφ = radians(lat2 - lat1)
    Δλ = radians(lon2 - lon1)
    a = sin(Δφ / 2) * 2 + cos(φ1) * cos(φ2) * sin(Δλ / 2) * 2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))
    return R * c

@app.post("/ambulances/", response_model=Ambulance)
def create_ambulance(ambulance: Ambulance, session: Session = Depends(get_session)):
    session.add(ambulance)
    session.commit()
    session.refresh(ambulance)
    return ambulance

@app.get("/ambulances/nearby", response_model=List[Ambulance])
def get_nearby_ambulances(lat: float, lng: float, radius_km: float = 5.0, session: Session = Depends(get_session)):
    delta = 0.1 * radius_km
    ambulances = session.exec(
        select(Ambulance).where(
            (Ambulance.latitude.between(lat - delta, lat + delta)) &
            (Ambulance.longitude.between(lng - delta, lng + delta)) &
            (Ambulance.available == True)
        )
    ).all()
    nearby_ambulances = [
        amb for amb in ambulances
        if haversine(lat, lng, amb.latitude, amb.longitude) <= radius_km * 1000
    ]
    if not nearby_ambulances:
        raise HTTPException(status_code=404, detail="No ambulances available nearby")
    print(nearby_ambulances)
    return nearby_ambulances

@app.post("/calculate-route/", response_model=RouteResponse)
async def calculate_route(route: RouteRequest):
    GRAPHHOPPER_KEY = os.getenv("GRAPHHOPPER_KEY", "your-api-key")
    url = "https://graphhopper.com/api/1/route"
    vehicle_map = {
        "driving": "car",
        "taxi": "car",
        "public transport": "car",
        "walking": "foot"
    }
    mode_lower = route.mode.lower()
    vehicle = vehicle_map.get(mode_lower, "car")
    params = {
        "point": [
            f"{route.start_lat},{route.start_lng}",
            f"{route.end_lat},{route.end_lng}"
        ],
        "vehicle": vehicle,
        "key": GRAPHHOPPER_KEY,
        "instructions": "false",
        "points_encoded": "false"
    }
    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail="Routing failed")
        data = response.json()
        best_route = data["paths"][0]
        return RouteResponse(
            distance=best_route["distance"],
            duration=best_route["time"] / 1000,
            polyline=best_route["points"]["coordinates"]
        )

