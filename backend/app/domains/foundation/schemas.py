from pydantic import BaseModel


class HealthResponse(BaseModel):
    status: str
    service: str
    environment: str


class ApiHealthResponse(HealthResponse):
    api_version: str


class DatabaseTestResponse(BaseModel):
    status: str
    detail: str
