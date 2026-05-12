from fastapi import APIRouter, Depends

from app.core.config import Settings, get_settings
from app.domains.foundation.schemas import ApiHealthResponse, DatabaseTestResponse
from app.domains.foundation.service import FoundationService

router = APIRouter(tags=["Foundation"])


def get_foundation_service(settings: Settings = Depends(get_settings)) -> FoundationService:
    return FoundationService(settings)


@router.get("/api/health", response_model=ApiHealthResponse)
def api_health(service: FoundationService = Depends(get_foundation_service)) -> ApiHealthResponse:
    return service.api_health()


@router.get("/api/db-test", response_model=DatabaseTestResponse)
def db_test(service: FoundationService = Depends(get_foundation_service)) -> DatabaseTestResponse:
    return service.db_test()
