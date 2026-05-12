const benefits = [
  "Practice realistic interviews before applying",
  "Understand weak areas from scored feedback",
  "Improve resume positioning for each role",
  "Track readiness over multiple attempts",
];

export function CandidateBenefits() {
  return (
    <section className="benefits-band">
      <div>
        <p className="eyebrow">Candidate benefits</p>
        <h2>Prepare with context, not generic question lists.</h2>
      </div>
      <ul>
        {benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>
    </section>
  );
}
