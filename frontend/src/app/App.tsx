export function App() {
  return (
    <main className="app-shell">
      <section className="status-panel" aria-labelledby="foundation-heading">
        <p className="eyebrow">Domain 1</p>
        <h1 id="foundation-heading">HireMinds</h1>
        <p className="lede">Foundation domain is running.</p>
        <dl className="health-list" aria-label="Foundation checks">
          <div>
            <dt>Frontend</dt>
            <dd>Vite + React</dd>
          </div>
          <div>
            <dt>Backend</dt>
            <dd>API: /api/health</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
