# HireMinds

HireMinds is a domain-wise modular monolith with a FastAPI backend and a Vite React frontend.

## Foundation Domain

The first domain provides the local app foundation:

- FastAPI application setup
- CORS configuration
- Root and API health checks
- Explicit database configuration check
- Vite React application shell
- Backend and frontend test setup

## Local Development

Backend:

```bash
cd backend
python -m pip install -e ".[dev]"
python -m uvicorn app.main:app --reload
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Health endpoints:

- `GET /health`
- `GET /api/health`
- `GET /api/db-test`
