# HireMinds - Main Domains

## What Is A Domain?

In this project, a domain means a complete product workflow or a major technical capability.

A domain is not a small UI piece. For example, a login button is not a domain, but Identity & Access is a domain because it includes signup, login, sessions, protected routes, roles, and profile access.

The goal is to keep the product modular without creating too many tiny folders.

---

# Final Domain Model

The earlier 25-domain plan has been merged into 14 stronger domains. Related workflows now live together.

```txt
1. Foundation
2. Public Website
3. Identity & Access
4. Candidate Workspace
5. Resume Intelligence
6. Interview Engine
7. Evaluation & Reports
8. AI Infrastructure
9. Recruiter Hiring
10. Coding Platform
11. Growth & Learning
12. Monetization
13. Operations
14. Enterprise
```

---

# Domain Merge Map

```txt
Foundation
- Old Foundation Domain

Public Website
- Old Landing Domain

Identity & Access
- Old Auth Domain
- User profile
- Candidate/recruiter/admin role foundation

Candidate Workspace
- Old Candidate Dashboard Domain
- Old Interview History Domain
- Candidate progress and activity overview

Resume Intelligence
- Old Resume Domain
- Old Resume Enhancement Domain

Interview Engine
- Old Job Role / JD Domain
- Old Interview Domain
- Old Voice Interview Domain
- Old Proctoring Domain
- Old Role Template Domain

Evaluation & Reports
- Old Scoring and Report Domain
- Shareable reports later
- PDF reports later

AI Infrastructure
- Old AI Reliability and Cost Domain
- Prompt versions
- AI logs
- JSON validation
- Model routing
- Cost tracking
- Caching

Recruiter Hiring
- Old Recruiter Domain
- Old Jobs Domain
- Candidate invites
- Hiring campaigns
- Applications

Coding Platform
- Old Coding Practice Domain
- Old Coding Assessment Domain
- Old Tournament Domain

Growth & Learning
- Old Learning Domain
- Old Hackathon Domain
- Skill roadmaps
- Career preparation

Monetization
- Old Pricing Domain
- Billing
- Subscriptions
- Credits
- Usage limits

Operations
- Old Admin Domain
- Old Analytics Domain
- Internal monitoring
- Feedback
- Abuse prevention

Enterprise
- Old Enterprise Domain
- Organizations
- Team members
- API keys
- Webhooks
- Audit logs
```

---

# MVP Domains

Build only these domains first.

```txt
1. Foundation
2. Public Website
3. Identity & Access
4. Candidate Workspace
5. Resume Intelligence
6. Interview Engine
7. Evaluation & Reports
8. AI Infrastructure
```

Do not build recruiter, jobs, coding platform, pricing, hackathons, analytics dashboards, or enterprise features in the first MVP.

---

## 1. Foundation Domain

### Purpose

The technical base of the entire project.

### Includes

- Monorepo/project setup
- Frontend setup
- Backend setup
- Environment configuration
- Shared constants
- Shared types
- Error handling
- API response helpers
- Logging foundation
- Health check
- Database connection test
- Linting and formatting setup
- Git hooks
- Deployment configuration

### Frontend Areas

- Global app providers
- Shared UI foundation
- Theme setup
- Toast setup
- Loading and error states

### Backend Areas

- FastAPI app setup
- Settings management
- CORS
- Global exception handlers
- Health endpoints
- Database session setup
- Logging

### APIs

```txt
GET /health
GET /api/health
GET /api/db-test
```

### Tables

None directly.

### Main Output

The app runs locally, connects to the database, and has a clean structure for every future domain.

---

## 2. Public Website Domain

### Purpose

Public-facing marketing website for visitors before login.

### Includes

- Landing page
- Public navigation
- Hero section
- Product explanation
- How it works
- Benefits
- Feature sections
- FAQ
- CTA buttons
- Footer
- Pricing teaser later

### Pages

```txt
/
```

### APIs

None required for MVP.

### Tables

None.

### Main Output

Visitors understand the product and sign up.

---

## 3. Identity & Access Domain

### Purpose

Authentication, authorization, user profile, and role access.

### Includes

- Signup
- Login
- Logout
- Forgot password
- Google OAuth later
- JWT/session handling
- Protected routes
- User profile
- User role foundation
- Candidate/recruiter/admin roles

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

### Main Output

A user can create an account, log in, keep a session, and access protected pages.

---

## 4. Candidate Workspace Domain

### Purpose

Candidate home, progress, interview history, and quick actions.

### Includes

- Dashboard overview
- Quick start interview
- Resume status
- Recent interviews
- Interview history
- Score trends
- Improvement areas
- Empty states
- Progress summary

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

### Tables Used

```txt
users
resumes
interviews
interview_scores
interview_reports
```

### Main Output

Candidate knows what to do next and can track interview progress over time.

---

## 5. Resume Intelligence Domain

### Purpose

Resume upload, parsing, structured candidate profile, and later resume improvement.

### Includes

- Resume upload
- PDF validation
- Resume storage
- Resume text extraction
- Resume parsing
- Skills extraction
- Projects extraction
- Education extraction
- Experience extraction
- Resume preview
- Active resume selection
- Resume delete/re-upload
- Resume parsing retry
- Resume enhancement later
- ATS score later
- Resume rewrite suggestions later

### Pages

```txt
/resume
/resume/enhance later
```

### APIs

```txt
POST /api/resumes/upload
POST /api/resumes/{id}/parse
GET /api/resumes
GET /api/resumes/{id}
DELETE /api/resumes/{id}
POST /api/resumes/{id}/enhance later
```

### Tables

```txt
resumes
candidate_profiles
resume_reviews later
resume_versions later
```

### AI Agents

```txt
Resume Parser Agent
Resume Review Agent later
Resume Rewrite Agent later
```

### Open-Source Tools

```txt
PyMuPDF
pdfplumber
spaCy
sentence-transformers
pgvector
```

### Main Output

Candidate resume becomes structured data that can power interviews, reports, matching, and learning suggestions.

---

## 6. Interview Engine Domain

### Purpose

Complete interview workflow from setup to completion.

### Includes

- Role selection
- Skill level selection
- Job description paste/upload
- JD parsing
- Required skill extraction
- Interview focus areas
- Interview setup
- Consent step
- Interview plan generation
- Question generation
- Interview room
- Text answers
- Follow-up questions
- Timer
- Progress tracking
- Answer saving
- Interview completion
- Abandoned interview handling
- Interview recovery
- Voice interview later
- Proctoring later
- Role templates later

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
POST /api/interviews/{id}/proctoring-event later
POST /api/interviews/{id}/voice-answer later
```

### Tables

```txt
roles
job_descriptions
interviews
interview_questions
interview_answers
role_templates later
question_templates later
rubric_templates later
proctoring_events later
consent_logs later
```

### AI Agents

```txt
JD Analyzer Agent
Interview Planner Agent
Question Generator Agent
Follow-Up Question Agent
Voice Interview Agent later
Proctoring Summary Agent later
```

### Main Output

Candidate completes a full role/resume/JD-based AI interview.

---

## 7. Evaluation & Reports Domain

### Purpose

Evaluate interview performance and show useful feedback.

### Includes

- Batch answer evaluation
- Overall score
- Category scores
- Grade
- Strengths
- Weaknesses
- Improvement suggestions
- Per-question feedback
- Resume authenticity score
- Job-fit score
- Report page
- Shareable report later
- PDF report later

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

### Main Output

Candidate receives a clear interview score and actionable improvement feedback.

---

## 8. AI Infrastructure Domain

### Purpose

Control AI quality, reliability, observability, and cost.

### Includes

- Google ADK setup
- Agent registry
- Prompt versioning
- AI usage logs
- Token tracking
- Cost tracking
- JSON validation
- Retry logic
- Error logging
- Caching
- Rate limiting
- Model selection
- AI fallback handling
- Local model experimentation

### APIs

Mostly internal backend services.

Later:

```txt
GET /api/admin/ai-logs
GET /api/admin/ai-errors
```

### Tables

```txt
prompt_versions
ai_usage_logs
ai_error_logs
ai_cache_entries
```

### Recommended AI Stack

```txt
Google ADK for agents
Gemini API for main production LLM calls
Ollama for local model development
vLLM for future GPU model serving
llama.cpp for CPU/local inference
faster-whisper or whisper.cpp for speech-to-text
Piper TTS as a free TTS fallback
ElevenLabs for premium voice
```

### Main Output

AI features are stable, cheaper to operate, easier to debug, and safer to scale.

---

# Post-MVP Domains

## 9. Recruiter Hiring Domain

### Purpose

Recruiter, company, job posting, candidate invites, and application workflows.

### Includes

- Recruiter signup
- Company profile
- Recruiter dashboard
- Candidate invite links
- Interview campaigns
- Candidate reports
- Shortlist/reject workflow
- Job posting
- Job listing
- Job application
- Candidate-job matching

### Pages

```txt
/recruiter/dashboard
/recruiter/company
/recruiter/candidates
/recruiter/candidates/{id}/report
/recruiter/jobs
/recruiter/jobs/new
/jobs
/jobs/{id}
/jobs/{id}/apply
```

### Tables

```txt
companies
recruiters
recruiter_teams
candidate_invites
jobs
applications
job_matches
```

---

## 10. Coding Platform Domain

### Purpose

Coding practice, company assessments, and competitive tournaments.

### Includes

- Coding question bank
- Topic filters
- Difficulty filters
- Code editor
- Run code
- Submit code
- Test cases
- Timed coding tests
- Hidden test cases
- AI code review
- Coding score
- Leaderboards
- Tournaments

### Pages

```txt
/coding
/coding/{questionId}
/assessment/{id}
/recruiter/assessments
/recruiter/assessments/new
/tournaments
/tournaments/{id}
/tournaments/{id}/leaderboard
```

### Tables

```txt
coding_questions
coding_submissions
coding_progress
bookmarked_questions
coding_assessments
assessment_questions
assessment_results
tournaments
tournament_participants
tournament_questions
leaderboard_entries
badges
```

### Open-Source Tools

```txt
Monaco Editor
Judge0 CE
```

---

## 11. Growth & Learning Domain

### Purpose

Help candidates improve skills, follow learning roadmaps, and join growth activities.

### Includes

- Skill gap analysis
- Learning roadmap
- Topic recommendations
- Curated resources
- Progress tracking
- Role-based preparation
- Hackathons later
- Team formation later
- Project submissions later

### Pages

```txt
/learn
/learn/{pathId}
/hackathons
/hackathons/{id}
/hackathons/{id}/register
```

### Tables

```txt
learning_paths
learning_modules
user_learning_progress
hackathons
hackathon_participants
hackathon_teams
hackathon_submissions
hackathon_judging
certificates
```

---

## 12. Monetization Domain

### Purpose

Plans, usage limits, interview credits, subscriptions, and payments.

### Includes

- Free plan
- Pro candidate plan
- Recruiter plan
- Enterprise plan
- Interview credits
- Usage limits
- Payment checkout
- Subscription management
- Billing history
- Upgrade/downgrade
- Razorpay/Stripe integration

### Pages

```txt
/pricing
/billing
/checkout
/settings/billing
```

### Tables

```txt
plans
subscriptions
usage_limits
interview_credits
payment_transactions
```

---

## 13. Operations Domain

### Purpose

Internal admin, analytics, monitoring, abuse prevention, and product visibility.

### Includes

- User management
- Interview monitoring
- Failed AI call logs
- Cost logs
- Report inspection
- Feedback management
- Abuse prevention
- Feature flags
- Product analytics
- Funnel tracking
- Drop-off tracking

### Pages

```txt
/admin
/admin/users
/admin/interviews
/admin/ai-logs
/admin/analytics
/admin/feedback
```

### Tables

```txt
analytics_events
dashboard_metrics
feature_flags
feedback
```

### Open-Source Tools

```txt
PostHog Community
Sentry self-host or free tier
Prometheus
Grafana
```

---

## 14. Enterprise Domain

### Purpose

Large company workflows, organization accounts, APIs, permissions, and compliance.

### Includes

- Organization accounts
- Team members
- Permissions
- Custom interview pipelines
- API access
- Webhooks
- Audit logs
- Data retention controls
- SSO later
- Compliance settings

### Pages

```txt
/enterprise/dashboard
/enterprise/settings
/enterprise/api-keys
```

### Tables

```txt
organizations
organization_members
api_keys
webhooks
audit_logs
enterprise_settings
```

---

# Recommended Build Order

## Stage 1: Core MVP

```txt
1. Foundation
2. Public Website
3. Identity & Access
4. Candidate Workspace
5. Resume Intelligence
6. Interview Engine
7. Evaluation & Reports
8. AI Infrastructure
```

## Stage 2: Product Quality

```txt
1. Resume enhancement inside Resume Intelligence
2. Voice interview inside Interview Engine
3. Proctoring inside Interview Engine
4. Role templates inside Interview Engine
```

## Stage 3: Hiring Platform

```txt
1. Recruiter Hiring
2. Monetization
```

## Stage 4: Career Ecosystem

```txt
1. Coding Platform
2. Growth & Learning
```

## Stage 5: Scale

```txt
1. Operations
2. Enterprise
```

---

# Final MVP Definition

The MVP is complete when this flow works:

```txt
User signs up
-> User uploads resume
-> System parses resume
-> User selects role or pastes JD
-> User starts interview
-> AI asks role/resume/JD-based questions
-> User answers in text
-> AI asks limited follow-up questions
-> Interview completes
-> AI evaluates answers
-> Candidate receives score report
-> Candidate can view interview history
```

