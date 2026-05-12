const scores = [
  { label: "Communication", value: 86 },
  { label: "Technical fit", value: 78 },
  { label: "Resume alignment", value: 91 },
  { label: "Role readiness", value: 82 },
];

export function ReportPreview() {
  return (
    <section className="page-section report-section" id="report-preview">
      <div className="section-heading">
        <p className="eyebrow">Demo report</p>
        <h2>A score report candidates can actually use.</h2>
        <p>
          Static preview data shows the intended MVP output: clear metrics, feedback,
          and next actions after every interview.
        </p>
      </div>
      <div className="report-panel">
        <div className="report-summary">
          <span>Mock interview report</span>
          <strong>82%</strong>
          <p>Ready for junior frontend interviews with focused practice on systems thinking.</p>
        </div>
        <div className="score-grid">
          {scores.map((score) => (
            <div className="metric-card" key={score.label}>
              <span>{score.label}</span>
              <strong>{score.value}%</strong>
              <div className="metric-bar" aria-hidden="true">
                <i style={{ width: `${score.value}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="feedback-grid">
          <article>
            <h3>Strength</h3>
            <p>Connected React project experience to the role and explained tradeoffs clearly.</p>
          </article>
          <article>
            <h3>Improve</h3>
            <p>Add sharper examples around performance measurement, profiling, and API latency.</p>
          </article>
          <article>
            <h3>Next action</h3>
            <p>Repeat a dashboard optimization interview using the pasted job description.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
