# HireMinds - Domain Wise Build Plan

## Purpose

This plan defines HireMinds as a domain-wise modular monolith with a separate frontend and backend.

The product should start small, prove the AI interview workflow, and then grow into a hiring and career platform.

---

# 1. Product Vision

HireMinds is an AI-powered interview and career platform where candidates can:

- Upload resumes
- Take AI mock interviews
- Get scored reports
- Improve resumes
- Practice coding
- Prepare for jobs
- Apply to jobs
- Join coding contests and hackathons

Recruiters and companies can later:

- Post jobs
- Invite candidates
- Conduct AI interviews
- Review candidate reports
- Run coding assessments
- Manage hiring workflows

---

# 2. Core MVP Goal

The MVP should prove one core value:

```txt
A candidate can upload a resume, select a role or paste a job description,
take an AI interview, and receive a useful score report.
```

The first MVP should focus only on:

```txt
1. Signup/login
2. Resume upload and parsing
3. Role/JD-based interview setup
4. Text-based AI interview
5. Answer saving
6. Scoring and report
7. Interview history
8. AI reliability and cost tracking
```

Do not build recruiter dashboards, payments, coding practice, hackathons, enterprise, or analytics dashboards before the basic interview experience works well.

---

# 3. Recommended Tech Stack

## Frontend

```txt
React
Vite
TypeScript
Tailwind CSS
shadcn/ui
Zustand
TanStack Query
React Hook Form
Zod
Axios or a typed fetch wrapper
Vitest
Playwright
ESLint
Prettier or Biome
```

### Frontend Rule

```txt
Server data = TanStack Query
Client/UI state = Zustand
Forms = React Hook Form + Zod
Shared UI = shadcn/ui + Tailwind
```

## Backend

```txt
Python 3.11+
FastAPI
Pydantic v2
SQLAlchemy 2.0 async
Alembic
asyncpg
Uvicorn
Google ADK
ElevenLabs API
Redis
ARQ for async background jobs
pytest
pytest-asyncio
httpx
Ruff
Pyright
```

## Database

```txt
PostgreSQL
pgvector
Redis
```

Recommended MVP database option:

```txt
Supabase Postgres + Supabase Storage
```

Recommended self-host option later:

```txt
PostgreSQL + pgvector + Redis + MinIO
```

## AI And Voice

```txt
Google ADK for agent orchestration
Gemini API for production LLM calls
ElevenLabs for premium voice
faster-whisper or whisper.cpp for free speech-to-text
Piper TTS as free local TTS fallback
Ollama for local model testing
vLLM for future GPU model serving
llama.cpp for local CPU inference
```

## Open-Source Tools Worth Using

```txt
PyMuPDF - resume PDF text extraction
pdfplumber - resume PDF extraction fallback
spaCy - entity and skill extraction support
sentence-transformers - embeddings
nomic-embed-text - free embedding model option
pgvector - vector search inside PostgreSQL
Judge0 CE - code execution for coding platform later
Monaco Editor - code editor later
PostHog Community - product analytics later
Prometheus + Grafana - infrastructure metrics later
Sentry free/self-host - error tracking
```

## Quality And Git Hooks

```txt
pre-commit:
- Ruff check
- Ruff format
- ESLint
- Prettier or Biome
- trailing whitespace check
- large file check
- env leak check

commit-msg:
- Conventional commit format

pre-push:
- TypeScript typecheck
- Python typecheck
- backend tests
- frontend tests
```

Post-commit hooks are not recommended for important checks because the commit already exists by then. Keep post-commit only for harmless local messages if needed.

---

# 4. Final Domain Roadmap

## MVP Domains

| Order | Domain | Purpose |
|---|---|---|
| 1 | Foundation | Project base, frontend/backend setup, config, health checks, quality tools |
| 2 | Public Website | Landing page and public marketing website |
| 3 | Identity & Access | Signup, login, sessions, profile, roles |
| 4 | Candidate Workspace | Dashboard, interview history, progress overview |
| 5 | Resume Intelligence | Resume upload, extraction, parsing, candidate profile |
| 6 | Interview Engine | Role/JD setup, interview flow, questions, answers, completion |
| 7 | Evaluation & Reports | Scoring, feedback, reports |
| 8 | AI Infrastructure | Google ADK, prompts, logs, validation, retries, cost tracking |

## Post-MVP Domains

| Order | Domain | Purpose |
|---|---|---|
| 9 | Recruiter Hiring | Companies, recruiters, jobs, invites, applications |
| 10 | Coding Platform | Coding practice, assessments, tournaments |
| 11 | Growth & Learning | Learning paths, skill gaps, hackathons |
| 12 | Monetization | Pricing, billing, plans, credits, usage limits |
| 13 | Operations | Admin, analytics, monitoring, feedback |
| 14 | Enterprise | Organizations, team permissions, APIs, webhooks, audit logs |

---

# 5. MVP Build Plan

## Domain 1: Foundation

### Goal

Create the technical base for the product.

### Frontend Work

```txt
Create Vite React TypeScript app
Configure Tailwind CSS
Install shadcn/ui
Configure routes
Set up shared layout
Set up global providers
Set up toast system
Set up loading/error states
Configure TanStack Query provider
Configure Zustand store pattern
Configure environment variables
```

### Backend Work

```txt
Create FastAPI app
Configure Pydantic settings
Configure CORS
Configure global exception handling
Configure logging
Set up SQLAlchemy async engine
Set up Alembic migrations
Connect PostgreSQL
Connect Redis
Add health check endpoint
Add database test endpoint
```

### Quality Work

```txt
Configure ESLint
Configure Prettier or Biome
Configure Ruff
Configure Pyright
Configure pytest
Configure Vitest
Configure Playwright
Configure pre-commit hooks
Configure commit-msg hook
Configure pre-push hook
```

### Completion Criteria

```txt
Frontend runs locally
Backend runs locally
Database connection works
Health check works
Linting works
Tests can run
Folder structure is clean
```

---

## Domain 2: Public Website

### Goal

Create the public landing page.

### Pages

```txt
/
```

### Sections

```txt
Public navbar
Hero
How it works
AI interview features
Resume intelligence features
Candidate benefits
Future recruiter vision
FAQ
Footer
```

### Completion Criteria

```txt
Visitor understands the product quickly
CTA sends user to signup
Page is responsive
Page looks production-ready
```

---

## Domain 3: Identity & Access

### Goal

Allow users to create accounts, log in, and access protected pages.

### Pages

```txt
/login
/signup
/forgot-password
/profile
```

### APIs

```txt
POST /api/auth/signup
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/me
GET /api/profile
PATCH /api/profile
```

### Tables

```txt
users
user_profiles
```

### Completion Criteria

```txt
User can sign up
User can log in
User can log out
Session persists
Protected pages block unauthenticated users
Profile loads for authenticated users
```

---

## Domain 4: Candidate Workspace

### Goal

Give candidates a central place to start interviews and track progress.

### Pages

```txt
/dashboard
/history
```

### APIs

```txt
GET /api/dashboard
GET /api/interviews
GET /api/candidate/progress
```

### Includes

```txt
Dashboard overview
Quick start interview button
Resume status
Recent interviews
Average score
Best score
Interview history
Role filters
Date filters
Report access
Retake interview action
Empty states
```

### Completion Criteria

```txt
New users see useful empty states
Returning users see stats
Candidate can start interview quickly
Candidate can open past reports
```

---

## Domain 5: Resume Intelligence

### Goal

Allow candidates to upload resumes and extract useful structured profile data.

### Pages

```txt
/resume
```

Later:

```txt
/resume/enhance
```

### APIs

```txt
POST /api/resumes/upload
POST /api/resumes/{id}/parse
GET /api/resumes
GET /api/resumes/{id}
DELETE /api/resumes/{id}
```

### Tables

```txt
resumes
candidate_profiles
```

Later:

```txt
resume_reviews
resume_versions
```

### AI Agents

```txt
Resume Parser Agent
```

Later:

```txt
Resume Review Agent
Resume Rewrite Agent
```

### Open-Source Tools

```txt
PyMuPDF
pdfplumber
spaCy
sentence-transformers
pgvector
```

### Completion Criteria

```txt
Resume uploads successfully
Resume text is extracted
AI returns validated structured JSON
Parsed data is saved
Candidate can view parsed profile
Resume can be used in interview setup
```

---

## Domain 6: Interview Engine

### Goal

Build the complete role/resume/JD-based AI interview workflow.

### Pages

```txt
/interview/setup
/interview/{id}/consent
/interview/{id}/room
/interview/{id}/completed
```

### APIs

```txt
GET /api/roles
POST /api/job-descriptions
GET /api/job-descriptions
POST /api/interviews
GET /api/interviews/{id}
POST /api/interviews/{id}/consent
POST /api/interviews/{id}/start
POST /api/interviews/{id}/answer
POST /api/interviews/{id}/complete
```

### Tables

```txt
roles
job_descriptions
interviews
interview_questions
interview_answers
```

Later:

```txt
role_templates
question_templates
rubric_templates
proctoring_events
consent_logs
```

### AI Agents

```txt
JD Analyzer Agent
Interview Planner Agent
Question Generator Agent
Follow-Up Question Agent
```

### MVP Rule

Build text interview first.

Voice and proctoring are post-MVP upgrades inside this same domain.

### Completion Criteria

```txt
User selects role and level
User can paste JD
JD is parsed
Interview is created
Questions are generated
Answers are saved
Follow-up questions work
Interview can be completed
Interrupted interview can recover
```

---

## Domain 7: Evaluation & Reports

### Goal

Evaluate candidate performance and show useful feedback.

### Pages

```txt
/interview/{id}/report
```

### APIs

```txt
POST /api/interviews/{id}/evaluate
GET /api/interviews/{id}/score
GET /api/interviews/{id}/report
```

### Tables

```txt
interview_scores
interview_reports
```

### AI Agents

```txt
Answer Evaluation Agent
Scoring Agent
Report Generator Agent
```

### Completion Criteria

```txt
Completed interview can be evaluated
Overall score is generated
Category scores are generated
Per-question feedback is shown
Strengths and weaknesses are useful
Report is saved and reloadable
```

---

## Domain 8: AI Infrastructure

### Goal

Make AI features reliable, observable, cheaper, and easier to debug.

### Includes

```txt
Google ADK setup
Agent registry
Prompt versioning
Prompt templates
LLM client wrapper
JSON schema validation
Retries
Timeout handling
AI usage logs
Token/cost tracking
AI error logs
AI response cache
Rate limiting
Fallback model strategy
```

### Tables

```txt
prompt_versions
ai_usage_logs
ai_error_logs
ai_cache_entries
```

### Completion Criteria

```txt
AI outputs are validated
Invalid JSON does not break user flow
Failed AI calls are logged
Token usage is tracked
Cost per interview is visible
Prompt versions are traceable
Common AI calls go through one service layer
```

---

# 6. MVP Database Summary

Create only these first:

```txt
users
user_profiles
resumes
candidate_profiles
roles
job_descriptions
interviews
interview_questions
interview_answers
interview_scores
interview_reports
prompt_versions
ai_usage_logs
ai_error_logs
ai_cache_entries
```

Do not create all future tables at the beginning.

---

# 7. MVP Page Summary

Build only:

```txt
/
/login
/signup
/forgot-password
/profile
/dashboard
/resume
/history
/interview/setup
/interview/{id}/consent
/interview/{id}/room
/interview/{id}/completed
/interview/{id}/report
```

---

# 8. MVP API Summary

```txt
Foundation:
GET /api/health
GET /api/db-test

Identity & Access:
POST /api/auth/signup
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/me
GET /api/profile
PATCH /api/profile

Candidate Workspace:
GET /api/dashboard
GET /api/interviews
GET /api/candidate/progress

Resume Intelligence:
POST /api/resumes/upload
POST /api/resumes/{id}/parse
GET /api/resumes
GET /api/resumes/{id}
DELETE /api/resumes/{id}

Interview Engine:
GET /api/roles
POST /api/job-descriptions
GET /api/job-descriptions
POST /api/interviews
GET /api/interviews/{id}
POST /api/interviews/{id}/consent
POST /api/interviews/{id}/start
POST /api/interviews/{id}/answer
POST /api/interviews/{id}/complete

Evaluation & Reports:
POST /api/interviews/{id}/evaluate
GET /api/interviews/{id}/score
GET /api/interviews/{id}/report
```

---

# 9. Post-MVP Build Order

## Stage 2: Product Quality

Build inside existing MVP domains:

```txt
Resume Intelligence:
- Resume enhancement
- ATS score
- Resume rewrite suggestions

Interview Engine:
- Voice interview
- ElevenLabs voice output
- faster-whisper transcription
- Proctoring events
- Role templates

Evaluation & Reports:
- PDF report
- Shareable report
```

## Stage 3: Hiring Platform

```txt
Recruiter Hiring:
- Company profile
- Recruiter dashboard
- Candidate invites
- Jobs
- Applications
- Candidate reports

Monetization:
- Pricing
- Usage limits
- Interview credits
- Billing
```

## Stage 4: Career Ecosystem

```txt
Coding Platform:
- Coding practice
- Judge0 CE execution
- Coding assessments
- Tournaments

Growth & Learning:
- Learning paths
- Skill gap roadmaps
- Hackathons
```

## Stage 5: Scale

```txt
Operations:
- Admin dashboard
- Analytics
- AI log viewer
- Feedback management
- Abuse prevention

Enterprise:
- Organizations
- Team permissions
- API keys
- Webhooks
- Audit logs
```

---

# 10. Final MVP Flow

```txt
User signs up
-> User uploads resume
-> System extracts resume text
-> Resume Parser Agent creates structured candidate profile
-> User selects role or pastes JD
-> JD Analyzer Agent extracts focus areas
-> Interview Planner Agent creates interview plan
-> Question Generator Agent creates questions
-> User answers in text
-> Follow-Up Question Agent asks limited follow-ups
-> Interview completes
-> Answer Evaluation Agent evaluates answers
-> Scoring Agent generates scores
-> Report Generator Agent generates report
-> Candidate views report
-> Candidate can view interview history
```

This is enough to launch the first version.

---

# 11. Architecture Recommendation

Use a modular frontend and backend:

```txt
frontend/
- React + Vite + TypeScript
- Domain folders under src/domains
- Shared UI under src/shared
- API calls centralized under src/api

backend/
- FastAPI
- Domain folders under app/domains
- Shared infrastructure under app/core
- Database models under app/db
- AI orchestration under app/ai
```

Each domain should own its own:

```txt
components or API routers
schemas
services
repositories
types
tests
```

Shared code should be promoted to shared/core only when multiple domains truly use it.

