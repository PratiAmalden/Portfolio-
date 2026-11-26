import { ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section className="contact section-shell" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">Have something in mind?</p>
        <h2>
          Let’s build
          <br />
          something cool.
        </h2>
        <a className="email-link" href="mailto:hello@pratiamaldem.com">
          Say hello <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
