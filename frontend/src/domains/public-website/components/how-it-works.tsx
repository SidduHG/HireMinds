import { workflowSteps } from "../constants";

export function HowItWorks() {
  return (
    <section className="page-section split-section" id="how-it-works">
      <div className="section-heading left">
        <p className="eyebrow">How it works</p>
        <h2>One focused flow from resume to readiness report.</h2>
        <p>
          HireMinds keeps the candidate journey direct: upload context, choose the
          role, answer questions, and act on the report.
        </p>
      </div>
      <div className="steps-list">
        {workflowSteps.map((step) => (
          <article className="step-card" key={step.step}>
            <span>{step.step}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
