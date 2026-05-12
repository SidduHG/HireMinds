from functools import lru_cache

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = Field(default="HireMinds API", alias="APP_NAME")
    service_name: str = Field(default="hireminds-api", alias="SERVICE_NAME")
    environment: str = Field(default="development", alias="ENVIRONMENT")
    api_version: str = Field(default="v1", alias="API_VERSION")
    database_url: str | None = Field(default=None, alias="DATABASE_URL")
    cors_origins: list[str] = Field(
        default=["http://localhost:5173", "http://127.0.0.1:5173"],
        alias="CORS_ORIGINS",
    )

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
        populate_by_name=True,
    )


@lru_cache
def get_settings() -> Settings:
    return Settings()
