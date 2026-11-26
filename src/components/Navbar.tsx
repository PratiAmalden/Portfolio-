import { List, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contents } from "../data/contents";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="navbar-inner">
        <a className="wordmark" href="#top">
          PORTFOLIO
        </a>
        <button
          className="contents-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="contents-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? (
            <X size={16} aria-hidden="true" />
          ) : (
            <List size={16} aria-hidden="true" />
          )}
          <span>{isOpen ? "Close" : "Contents"}</span>
        </button>
      </div>

      <nav
        className="contents-menu"
        id="contents-menu"
        aria-label="Table of contents"
        hidden={!isOpen}
      >
        <h2>Table of contents</h2>
        <ol>
          {contents.map(({ number, title, href }) => (
            <li key={number}>
              <span>{number}</span>
              <a href={href} onClick={() => setIsOpen(false)}>
                {title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
}

export default Navbar;
