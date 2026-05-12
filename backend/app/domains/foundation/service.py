from app.core.config import Settings
from app.domains.foundation.schemas import (
    ApiHealthResponse,
    DatabaseTestResponse,
    HealthResponse,
)


class FoundationService:
    def __init__(self, settings: Settings) -> None:
        self.settings = settings

    def health(self) -> HealthResponse:
        return HealthResponse(
            status="ok",
            service=self.settings.service_name,
            environment=self.settings.environment,
        )

    def api_health(self) -> ApiHealthResponse:
        return ApiHealthResponse(
            status="ok",
            service=self.settings.service_name,
            environment=self.settings.environment,
            api_version=self.settings.api_version,
        )

    def db_test(self) -> DatabaseTestResponse:
        if not self.settings.database_url:
            return DatabaseTestResponse(
                status="not_configured",
                detail="DATABASE_URL is not set",
            )

        return DatabaseTestResponse(
            status="configured",
            detail="DATABASE_URL is set",
        )
