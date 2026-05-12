from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_root_health_reports_service_status() -> None:
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json() == {
        "status": "ok",
        "service": "hireminds-api",
        "environment": "development",
    }


def test_api_health_reports_versioned_status() -> None:
    response = client.get("/api/health")

    assert response.status_code == 200
    assert response.json()["status"] == "ok"
    assert response.json()["api_version"] == "v1"


def test_db_test_is_explicit_when_database_is_not_configured() -> None:
    response = client.get("/api/db-test")

    assert response.status_code == 200
    assert response.json() == {
        "status": "not_configured",
        "detail": "DATABASE_URL is not set",
    }
