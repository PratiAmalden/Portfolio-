import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="footer-bottom section-shell">
      <a className="wordmark" href="#top">
        PRATI AMALDEM
      </a>
      <p>Made with intention · 2025</p>
      <div className="social-links" aria-label="Social links">
        <a href="mailto:pratiamalden@gmail.com" aria-label="Email Prati">
          <Mail size={17} />
        </a>
        <a href="https://github.com/PratiAmalden" aria-label="GitHub">
          <Github size={17} />
        </a>
        <a href="https://linkedin.com/in/pratiamalden" aria-label="LinkedIn">
          <Linkedin size={17} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
