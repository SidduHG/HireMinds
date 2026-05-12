import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="final-cta" id="contact">
      <p className="eyebrow">Start with the MVP workflow</p>
      <h2>Upload a resume, practice for a role, and see your readiness score.</h2>
      <div className="hero-actions">
        <a className="primary-link large" href="/signup">
          Start interview <ArrowRight size={18} />
        </a>
        <a className="secondary-link large" href="mailto:hello@hireminds.ai">
          Contact team
        </a>
      </div>
    </section>
  );
}
