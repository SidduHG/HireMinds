import { Menu, Sparkles } from "lucide-react";

import { publicNavItems } from "../constants";

export function PublicHeader() {
  return (
    <header className="public-header">
      <a className="brand-link" href="#top" aria-label="HireMinds home">
        <span className="brand-mark" aria-hidden="true">
          <Sparkles size={18} />
        </span>
        <span>HireMinds</span>
      </a>

      <nav className="desktop-nav" aria-label="Public navigation">
        {publicNavItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="ghost-link" href="#report-preview">
          View demo
        </a>
        <a className="primary-link" href="/signup">
          Start interview
        </a>
        <button className="mobile-menu-button" type="button" aria-label="Open navigation">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
