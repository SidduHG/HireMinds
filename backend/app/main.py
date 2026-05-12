from fastapi import FastAPI, Depends

from app.core.config import Settings, get_settings
from app.core.cors import configure_cors
from app.domains.foundation.router import router as foundation_router
from app.domains.foundation.schemas import HealthResponse
from app.domains.foundation.service import FoundationService


def create_app() -> FastAPI:
    settings = get_settings()
    api = FastAPI(title=settings.app_name)

    configure_cors(api, settings)
    api.include_router(foundation_router)

    return api


app = create_app()


@app.get("/health", response_model=HealthResponse, tags=["Foundation"])
def health(settings: Settings = Depends(get_settings)) -> HealthResponse:
    return FoundationService(settings).health()
