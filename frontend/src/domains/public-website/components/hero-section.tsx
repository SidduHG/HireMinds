import { ArrowRight, CheckCircle2, FileText, MessageSquareText } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">AI interview preparation for candidates</p>
        <h1>Practice interviews built around your resume and target role.</h1>
        <p className="hero-lede">
          HireMinds helps candidates upload a resume, prepare for a real job description,
          take a structured AI mock interview, and receive a scored readiness report.
        </p>
        <div className="hero-actions">
          <a className="primary-link large" href="/signup">
            Start interview <ArrowRight size={18} />
          </a>
          <a className="secondary-link large" href="#how-it-works">
            See how it works
          </a>
        </div>
        <div className="hero-proof" aria-label="Core product values">
          <span>
            <CheckCircle2 size={16} /> Resume-aware
          </span>
          <span>
            <CheckCircle2 size={16} /> JD-based
          </span>
          <span>
            <CheckCircle2 size={16} /> Instant report
          </span>
        </div>
      </div>

      <div className="hero-preview" aria-label="AI interview preview">
        <div className="preview-topbar">
          <span />
          <strong>InterviewAI Session</strong>
          <em>Live</em>
        </div>
        <div className="resume-card">
          <FileText size={20} />
          <div>
            <strong>Resume parsed</strong>
            <p>Frontend Developer - React, TypeScript, APIs</p>
          </div>
        </div>
        <div className="interview-card">
          <MessageSquareText size={20} />
          <div>
            <strong>Question 4</strong>
            <p>Explain how you would improve a slow dashboard used by recruiters.</p>
          </div>
        </div>
        <div className="score-card">
          <span>Role readiness</span>
          <strong>82%</strong>
          <div className="score-bar" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}
