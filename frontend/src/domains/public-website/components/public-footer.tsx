import { publicNavItems } from "../constants";

export function PublicFooter() {
  return (
    <footer className="public-footer">
      <div>
        <a className="footer-brand" href="#top">
          HireMinds
        </a>
        <p>AI mock interviews, resume-aware preparation, and score reports for candidates.</p>
      </div>
      <nav aria-label="Footer navigation">
        {publicNavItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
      </nav>
    </footer>
  );
}
