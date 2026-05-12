# HireMinds - Entire Folder Structure

This is the full folder structure for the complete HireMinds platform.

It is modular, but not over-partitioned. Each domain has its own `docs/` folder so domain knowledge stays close to the code.

```txt
HireMinds/
├── frontend/
│   ├── public/
│   │   ├── images/
│   │   ├── icons/
│   │   ├── brand/
│   │   └── favicon.ico
│   │
│   ├── src/
│   │   ├── app/
│   │   │   ├── App.tsx
│   │   │   ├── router.tsx
│   │   │   ├── providers.tsx
│   │   │   ├── protected-route.tsx
│   │   │   ├── error-boundary.tsx
│   │   │   └── not-found.tsx
│   │   │
│   │   ├── routes/
│   │   │   ├── public.routes.tsx
│   │   │   ├── auth.routes.tsx
│   │   │   ├── candidate.routes.tsx
│   │   │   ├── interview.routes.tsx
│   │   │   ├── recruiter.routes.tsx
│   │   │   ├── coding.routes.tsx
│   │   │   ├── learning.routes.tsx
│   │   │   ├── billing.routes.tsx
│   │   │   ├── admin.routes.tsx
│   │   │   └── enterprise.routes.tsx
│   │   │
│   │   ├── domains/
│   │   │   ├── public-website/
│   │   │   │   ├── pages/
│   │   │   │   │   └── LandingPage.tsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── PublicNavbar.tsx
│   │   │   │   │   ├── PublicFooter.tsx
│   │   │   │   │   ├── HeroSection.tsx
│   │   │   │   │   ├── HowItWorksSection.tsx
│   │   │   │   │   ├── FeaturesSection.tsx
│   │   │   │   │   ├── BenefitsSection.tsx
│   │   │   │   │   ├── FAQSection.tsx
│   │   │   │   │   └── FinalCTASection.tsx
│   │   │   │   ├── services/
│   │   │   │   │   └── landing-content.ts
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   ├── types.ts
│   │   │   │   ├── constants.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── identity-access/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── LoginPage.tsx
│   │   │   │   │   ├── SignupPage.tsx
│   │   │   │   │   ├── ForgotPasswordPage.tsx
│   │   │   │   │   └── ProfilePage.tsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── AuthLayout.tsx
│   │   │   │   │   ├── LoginForm.tsx
│   │   │   │   │   ├── SignupForm.tsx
│   │   │   │   │   ├── ForgotPasswordForm.tsx
│   │   │   │   │   └── ProfileForm.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   ├── useAuth.ts
│   │   │   │   │   ├── useCurrentUser.ts
│   │   │   │   │   └── useProfile.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── auth-api.ts
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   ├── types.ts
│   │   │   │   ├── validators.ts
│   │   │   │   ├── store.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── candidate-workspace/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── DashboardPage.tsx
│   │   │   │   │   └── HistoryPage.tsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── DashboardStats.tsx
│   │   │   │   │   ├── QuickActions.tsx
│   │   │   │   │   ├── ResumeStatusCard.tsx
│   │   │   │   │   ├── RecentInterviews.tsx
│   │   │   │   │   ├── InterviewHistoryTable.tsx
│   │   │   │   │   └── ProgressSummary.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   ├── useDashboard.ts
│   │   │   │   │   └── useInterviewHistory.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── candidate-api.ts
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   ├── types.ts
│   │   │   │   ├── constants.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── resume-intelligence/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── ResumePage.tsx
│   │   │   │   │   └── ResumeEnhancePage.tsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── ResumeUploadDropzone.tsx
│   │   │   │   │   ├── ResumeList.tsx
│   │   │   │   │   ├── ResumePreview.tsx
│   │   │   │   │   ├── ParsedProfileCard.tsx
│   │   │   │   │   ├── SkillList.tsx
│   │   │   │   │   ├── ProjectList.tsx
│   │   │   │   │   └── ResumeParseStatus.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   ├── useResumes.ts
│   │   │   │   │   ├── useUploadResume.ts
│   │   │   │   │   ├── useParseResume.ts
│   │   │   │   │   └── useActiveResume.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── resume-api.ts
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   ├── types.ts
│   │   │   │   ├── validators.ts
│   │   │   │   ├── store.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── interview-engine/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── InterviewSetupPage.tsx
│   │   │   │   │   ├── InterviewConsentPage.tsx
│   │   │   │   │   ├── InterviewRoomPage.tsx
│   │   │   │   │   └── InterviewCompletedPage.tsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── RoleSelector.tsx
│   │   │   │   │   ├── LevelSelector.tsx
│   │   │   │   │   ├── JDInput.tsx
│   │   │   │   │   ├── InterviewSetupForm.tsx
│   │   │   │   │   ├── ConsentCard.tsx
│   │   │   │   │   ├── InterviewQuestion.tsx
│   │   │   │   │   ├── AnswerEditor.tsx
│   │   │   │   │   ├── InterviewTimer.tsx
│   │   │   │   │   ├── InterviewProgress.tsx
│   │   │   │   │   ├── RoomActions.tsx
│   │   │   │   │   └── CompletedSummary.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   ├── useRoles.ts
│   │   │   │   │   ├── useJobDescription.ts
│   │   │   │   │   ├── useInterviewSession.ts
│   │   │   │   │   ├── useInterviewTimer.ts
│   │   │   │   │   └── useSubmitAnswer.ts
│   │   │   │   ├── services/
│   │   │   │   │   ├── interview-api.ts
│   │   │   │   │   └── interview-state.service.ts
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   ├── types.ts
│   │   │   │   ├── validators.ts
│   │   │   │   ├── constants.ts
│   │   │   │   ├── store.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── evaluation-reports/
│   │   │   │   ├── pages/
│   │   │   │   │   └── InterviewReportPage.tsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── ScoreSummary.tsx
│   │   │   │   │   ├── CategoryScores.tsx
│   │   │   │   │   ├── StrengthsList.tsx
│   │   │   │   │   ├── WeaknessList.tsx
│   │   │   │   │   ├── ImprovementPlan.tsx
│   │   │   │   │   ├── QuestionFeedbackList.tsx
│   │   │   │   │   └── ReportActions.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   ├── useReport.ts
│   │   │   │   │   └── useEvaluateInterview.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── report-api.ts
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   ├── types.ts
│   │   │   │   ├── constants.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── recruiter-hiring/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── RecruiterDashboardPage.tsx
│   │   │   │   │   ├── CompanyPage.tsx
│   │   │   │   │   ├── CandidatesPage.tsx
│   │   │   │   │   ├── CandidateReportPage.tsx
│   │   │   │   │   ├── JobsPage.tsx
│   │   │   │   │   ├── JobDetailsPage.tsx
│   │   │   │   │   ├── JobApplyPage.tsx
│   │   │   │   │   └── RecruiterJobsPage.tsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── CompanyForm.tsx
│   │   │   │   │   ├── CandidateInviteForm.tsx
│   │   │   │   │   ├── CandidateTable.tsx
│   │   │   │   │   ├── JobForm.tsx
│   │   │   │   │   ├── JobCard.tsx
│   │   │   │   │   └── ApplicationStatusBadge.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   ├── useRecruiterDashboard.ts
│   │   │   │   │   ├── useJobs.ts
│   │   │   │   │   └── useApplications.ts
│   │   │   │   ├── services/
│   │   │   │   │   ├── recruiter-api.ts
│   │   │   │   │   └── jobs-api.ts
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   ├── types.ts
│   │   │   │   ├── validators.ts
│   │   │   │   ├── constants.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── coding-platform/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── CodingHomePage.tsx
│   │   │   │   │   ├── CodingQuestionPage.tsx
│   │   │   │   │   ├── AssessmentPage.tsx
│   │   │   │   │   ├── RecruiterAssessmentsPage.tsx
│   │   │   │   │   ├── NewAssessmentPage.tsx
│   │   │   │   │   ├── TournamentsPage.tsx
│   │   │   │   │   └── TournamentLeaderboardPage.tsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── ProblemList.tsx
│   │   │   │   │   ├── ProblemFilters.tsx
│   │   │   │   │   ├── CodeEditor.tsx
│   │   │   │   │   ├── TestCasePanel.tsx
│   │   │   │   │   ├── SubmissionResult.tsx
│   │   │   │   │   ├── AssessmentTimer.tsx
│   │   │   │   │   └── LeaderboardTable.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   ├── useCodingQuestions.ts
│   │   │   │   │   ├── useRunCode.ts
│   │   │   │   │   ├── useSubmitCode.ts
│   │   │   │   │   └── useLeaderboard.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── coding-api.ts
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   ├── types.ts
│   │   │   │   ├── validators.ts
│   │   │   │   ├── constants.ts
│   │   │   │   ├── store.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── growth-learning/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── LearnPage.tsx
│   │   │   │   │   ├── LearningPathPage.tsx
│   │   │   │   │   ├── HackathonsPage.tsx
│   │   │   │   │   ├── HackathonDetailsPage.tsx
│   │   │   │   │   └── HackathonRegisterPage.tsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── LearningPathCard.tsx
│   │   │   │   │   ├── ModuleList.tsx
│   │   │   │   │   ├── SkillGapPanel.tsx
│   │   │   │   │   ├── HackathonCard.tsx
│   │   │   │   │   └── HackathonRegistrationForm.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   ├── useLearningPaths.ts
│   │   │   │   │   └── useHackathons.ts
│   │   │   │   ├── services/
│   │   │   │   │   ├── learning-api.ts
│   │   │   │   │   └── hackathon-api.ts
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   ├── types.ts
│   │   │   │   ├── validators.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── monetization/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── PricingPage.tsx
│   │   │   │   │   ├── BillingPage.tsx
│   │   │   │   │   └── CheckoutPage.tsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── PricingCards.tsx
│   │   │   │   │   ├── UsageLimitsPanel.tsx
│   │   │   │   │   ├── BillingHistoryTable.tsx
│   │   │   │   │   └── CheckoutSummary.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   ├── usePlans.ts
│   │   │   │   │   └── useBilling.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── billing-api.ts
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   ├── types.ts
│   │   │   │   ├── constants.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── operations/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── AdminDashboardPage.tsx
│   │   │   │   │   ├── AdminUsersPage.tsx
│   │   │   │   │   ├── AdminInterviewsPage.tsx
│   │   │   │   │   ├── AdminAILogsPage.tsx
│   │   │   │   │   ├── AdminAnalyticsPage.tsx
│   │   │   │   │   └── AdminFeedbackPage.tsx
│   │   │   │   ├── components/
│   │   │   │   │   ├── AdminStats.tsx
│   │   │   │   │   ├── UserTable.tsx
│   │   │   │   │   ├── AILogTable.tsx
│   │   │   │   │   ├── CostChart.tsx
│   │   │   │   │   └── FeedbackTable.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   ├── useAdminUsers.ts
│   │   │   │   │   ├── useAILogs.ts
│   │   │   │   │   └── useAnalytics.ts
│   │   │   │   ├── services/
│   │   │   │   │   ├── admin-api.ts
│   │   │   │   │   └── analytics-api.ts
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   ├── types.ts
│   │   │   │   ├── constants.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   └── enterprise/
│   │   │       ├── pages/
│   │   │       │   ├── EnterpriseDashboardPage.tsx
│   │   │       │   ├── EnterpriseSettingsPage.tsx
│   │   │       │   └── ApiKeysPage.tsx
│   │   │       ├── components/
│   │   │       │   ├── OrganizationSwitcher.tsx
│   │   │       │   ├── MemberTable.tsx
│   │   │       │   ├── PermissionEditor.tsx
│   │   │       │   ├── ApiKeyTable.tsx
│   │   │       │   └── WebhookList.tsx
│   │   │       ├── hooks/
│   │   │       │   ├── useOrganization.ts
│   │   │       │   └── useApiKeys.ts
│   │   │       ├── services/
│   │   │       │   └── enterprise-api.ts
│   │   │       ├── docs/
│   │   │       │   └── README.md
│   │   │       ├── types.ts
│   │   │       ├── validators.ts
│   │   │       └── index.ts
│   │   │
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   ├── layout/
│   │   │   ├── forms/
│   │   │   ├── feedback/
│   │   │   ├── navigation/
│   │   │   ├── data-display/
│   │   │   └── empty-states/
│   │   │
│   │   ├── services/
│   │   │   ├── api-client.ts
│   │   │   ├── query-client.ts
│   │   │   ├── auth-token.service.ts
│   │   │   ├── storage.service.ts
│   │   │   ├── error.service.ts
│   │   │   ├── analytics.service.ts
│   │   │   └── file.service.ts
│   │   │
│   │   ├── hooks/
│   │   │   ├── use-debounce.ts
│   │   │   ├── use-media-query.ts
│   │   │   ├── use-local-storage.ts
│   │   │   ├── use-click-outside.ts
│   │   │   └── use-page-title.ts
│   │   │
│   │   ├── store/
│   │   │   ├── ui.store.ts
│   │   │   ├── auth-session.store.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── types/
│   │   │   ├── api.types.ts
│   │   │   ├── pagination.types.ts
│   │   │   ├── common.types.ts
│   │   │   └── user-role.types.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── cn.ts
│   │   │   ├── date.ts
│   │   │   ├── file.ts
│   │   │   ├── format-score.ts
│   │   │   └── format-error.ts
│   │   │
│   │   ├── constants/
│   │   │   ├── routes.ts
│   │   │   └── query-keys.ts
│   │   │
│   │   ├── config/
│   │   │   ├── env.ts
│   │   │   ├── app.ts
│   │   │   └── routes.ts
│   │   │
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   └── theme.css
│   │   │
│   │   ├── test/
│   │   │   ├── setup.ts
│   │   │   ├── mocks/
│   │   │   └── fixtures/
│   │   │
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   │
│   ├── e2e/
│   ├── index.html
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   ├── postcss.config.js
│   ├── components.json
│   ├── eslint.config.js
│   ├── prettier.config.js
│   └── .env.example
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── api.py
│   │   │
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   ├── security.py
│   │   │   ├── logging.py
│   │   │   ├── exceptions.py
│   │   │   ├── responses.py
│   │   │   ├── cors.py
│   │   │   └── constants.py
│   │   │
│   │   ├── db/
│   │   │   ├── base.py
│   │   │   ├── session.py
│   │   │   ├── models.py
│   │   │   └── types.py
│   │   │
│   │   ├── domains/
│   │   │   ├── foundation/
│   │   │   │   ├── router.py
│   │   │   │   ├── service.py
│   │   │   │   ├── schemas.py
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   └── tests/
│   │   │   │       └── test_foundation.py
│   │   │   │
│   │   │   ├── identity_access/
│   │   │   │   ├── router.py
│   │   │   │   ├── service.py
│   │   │   │   ├── repository.py
│   │   │   │   ├── schemas.py
│   │   │   │   ├── models.py
│   │   │   │   ├── constants.py
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   └── tests/
│   │   │   │       ├── test_auth_router.py
│   │   │   │       └── test_auth_service.py
│   │   │   │
│   │   │   ├── candidate_workspace/
│   │   │   │   ├── router.py
│   │   │   │   ├── service.py
│   │   │   │   ├── repository.py
│   │   │   │   ├── schemas.py
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   └── tests/
│   │   │   │       └── test_candidate_workspace.py
│   │   │   │
│   │   │   ├── resume_intelligence/
│   │   │   │   ├── router.py
│   │   │   │   ├── service.py
│   │   │   │   ├── repository.py
│   │   │   │   ├── schemas.py
│   │   │   │   ├── models.py
│   │   │   │   ├── tasks.py
│   │   │   │   ├── prompts.py
│   │   │   │   ├── extractors.py
│   │   │   │   ├── constants.py
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   └── tests/
│   │   │   │       ├── test_resume_router.py
│   │   │   │       ├── test_resume_service.py
│   │   │   │       └── test_extractors.py
│   │   │   │
│   │   │   ├── interview_engine/
│   │   │   │   ├── router.py
│   │   │   │   ├── service.py
│   │   │   │   ├── repository.py
│   │   │   │   ├── schemas.py
│   │   │   │   ├── models.py
│   │   │   │   ├── tasks.py
│   │   │   │   ├── prompts.py
│   │   │   │   ├── state.py
│   │   │   │   ├── constants.py
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   └── tests/
│   │   │   │       ├── test_interview_router.py
│   │   │   │       ├── test_interview_service.py
│   │   │   │       └── test_interview_state.py
│   │   │   │
│   │   │   ├── evaluation_reports/
│   │   │   │   ├── router.py
│   │   │   │   ├── service.py
│   │   │   │   ├── repository.py
│   │   │   │   ├── schemas.py
│   │   │   │   ├── models.py
│   │   │   │   ├── tasks.py
│   │   │   │   ├── prompts.py
│   │   │   │   ├── scoring.py
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   └── tests/
│   │   │   │       ├── test_evaluation_router.py
│   │   │   │       ├── test_scoring.py
│   │   │   │       └── test_report_service.py
│   │   │   │
│   │   │   ├── ai_infrastructure/
│   │   │   │   ├── router.py
│   │   │   │   ├── service.py
│   │   │   │   ├── repository.py
│   │   │   │   ├── schemas.py
│   │   │   │   ├── models.py
│   │   │   │   ├── tasks.py
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   └── tests/
│   │   │   │       └── test_ai_infrastructure.py
│   │   │   │
│   │   │   ├── recruiter_hiring/
│   │   │   │   ├── router.py
│   │   │   │   ├── service.py
│   │   │   │   ├── repository.py
│   │   │   │   ├── schemas.py
│   │   │   │   ├── models.py
│   │   │   │   ├── tasks.py
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   └── tests/
│   │   │   │       └── test_recruiter_hiring.py
│   │   │   │
│   │   │   ├── coding_platform/
│   │   │   │   ├── router.py
│   │   │   │   ├── service.py
│   │   │   │   ├── repository.py
│   │   │   │   ├── schemas.py
│   │   │   │   ├── models.py
│   │   │   │   ├── tasks.py
│   │   │   │   ├── constants.py
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   └── tests/
│   │   │   │       └── test_coding_platform.py
│   │   │   │
│   │   │   ├── growth_learning/
│   │   │   │   ├── router.py
│   │   │   │   ├── service.py
│   │   │   │   ├── repository.py
│   │   │   │   ├── schemas.py
│   │   │   │   ├── models.py
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   └── tests/
│   │   │   │       └── test_growth_learning.py
│   │   │   │
│   │   │   ├── monetization/
│   │   │   │   ├── router.py
│   │   │   │   ├── service.py
│   │   │   │   ├── repository.py
│   │   │   │   ├── schemas.py
│   │   │   │   ├── models.py
│   │   │   │   ├── tasks.py
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   └── tests/
│   │   │   │       └── test_monetization.py
│   │   │   │
│   │   │   ├── operations/
│   │   │   │   ├── router.py
│   │   │   │   ├── service.py
│   │   │   │   ├── repository.py
│   │   │   │   ├── schemas.py
│   │   │   │   ├── models.py
│   │   │   │   ├── tasks.py
│   │   │   │   ├── docs/
│   │   │   │   │   └── README.md
│   │   │   │   └── tests/
│   │   │   │       └── test_operations.py
│   │   │   │
│   │   │   └── enterprise/
│   │   │       ├── router.py
│   │   │       ├── service.py
│   │   │       ├── repository.py
│   │   │       ├── schemas.py
│   │   │       ├── models.py
│   │   │       ├── tasks.py
│   │   │       ├── docs/
│   │   │       │   └── README.md
│   │   │       └── tests/
│   │   │           └── test_enterprise.py
│   │   │
│   │   ├── services/
│   │   │   ├── storage_service.py
│   │   │   ├── email_service.py
│   │   │   ├── redis_service.py
│   │   │   ├── rate_limit_service.py
│   │   │   ├── file_service.py
│   │   │   ├── analytics_service.py
│   │   │   ├── ai/
│   │   │   │   ├── adk_service.py
│   │   │   │   ├── gemini_service.py
│   │   │   │   ├── elevenlabs_service.py
│   │   │   │   ├── whisper_service.py
│   │   │   │   ├── prompt_service.py
│   │   │   │   ├── ai_cache_service.py
│   │   │   │   └── ai_usage_service.py
│   │   │   └── integrations/
│   │   │       ├── payment_service.py
│   │   │       └── judge0_service.py
│   │   │
│   │   ├── workers/
│   │   │   ├── redis.py
│   │   │   ├── arq_settings.py
│   │   │   ├── jobs.py
│   │   │   └── tasks.py
│   │   │
│   │   ├── utils/
│   │   │   ├── date_utils.py
│   │   │   ├── id_utils.py
│   │   │   ├── text_utils.py
│   │   │   ├── file_utils.py
│   │   │   └── pagination.py
│   │   │
│   │   └── tests/
│   │       ├── conftest.py
│   │       ├── fixtures/
│   │       └── factories/
│   │
│   ├── alembic/
│   │   ├── versions/
│   │   └── env.py
│   │
│   ├── scripts/
│   │   ├── seed_roles.py
│   │   ├── create_admin.py
│   │   └── backfill_embeddings.py
│   │
│   ├── pyproject.toml
│   ├── uv.lock
│   ├── alembic.ini
│   ├── pytest.ini
│   ├── Dockerfile
│   └── .env.example
│
├── docs/
│   ├── README.md
│   ├── architecture.md
│   ├── api.md
│   ├── database.md
│   ├── deployment.md
│   ├── ai-agents.md
│   ├── prompts.md
│   ├── security.md
│   ├── testing.md
│   └── decisions/
│       └── 0001-domain-structure.md
│
├── infra/
│   ├── docker/
│   │   ├── postgres/
│   │   ├── redis/
│   │   └── minio/
│   ├── nginx/
│   ├── monitoring/
│   │   ├── prometheus/
│   │   └── grafana/
│   └── README.md
│
├── scripts/
│   ├── setup.ps1
│   ├── setup.sh
│   ├── lint-all.ps1
│   ├── test-all.ps1
│   └── dev.ps1
│
├── .github/
│   ├── workflows/
│   │   ├── frontend-ci.yml
│   │   ├── backend-ci.yml
│   │   └── full-ci.yml
│   └── pull_request_template.md
│
├── .gitignore
├── .env.example
├── docker-compose.yml
├── README.md
├── DOMAINS.md
├── PLAN_DOMAIN_WISE.md
├── FOLDER.md
└── ENTIRE_FOLDER_STRUCTURE.md
```

---

# Key Rules

## Frontend

```txt
Shared API client lives in src/services/api-client.ts.
Domain API functions live in domain services folders.
TanStack Query hooks live in domain hooks folders.
Zustand stores are only added when a domain has real UI/session state.
Shared UI goes in src/components.
Domain-specific UI goes in that domain's components folder.
Each frontend domain has docs/README.md.
```

## Backend

```txt
router.py handles HTTP only.
service.py owns business logic.
repository.py owns database queries.
schemas.py owns Pydantic request/response schemas.
models.py owns SQLAlchemy tables.
tasks.py is added only for background jobs.
Shared technical services live in app/services.
Each backend domain has docs/README.md.
```

## Docs

```txt
Root docs/ explains the whole platform.
Frontend domain docs explain frontend behavior for that domain.
Backend domain docs explain API, data, services, and business rules for that domain.
```

