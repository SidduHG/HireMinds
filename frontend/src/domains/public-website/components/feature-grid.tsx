import { featureItems } from "../constants";

export function FeatureGrid() {
  return (
    <section className="page-section" id="features">
      <div className="section-heading">
        <p className="eyebrow">Product capabilities</p>
        <h2>Everything needed for the first interview-prep workflow.</h2>
        <p>
          The public website introduces the MVP clearly: resume parsing, role setup,
          AI interview, scoring, history, and AI reliability foundations.
        </p>
      </div>
      <div className="feature-grid">
        {featureItems.map((feature) => {
          const Icon = feature.icon;
          return (
            <article className="feature-card" key={feature.title}>
              <Icon size={22} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
