
import SectionHeading from "./SectionHeading";

function Experience() {
  return (
    <section className="experience section-shell" id="experience">
      <SectionHeading eyebrow="04 /">
        Education &amp; experience
      </SectionHeading>

      <div className="timeline">
        <article className="timeline-item">
          <p className="timeline-date">2024 — 2025</p>

          <div className="timeline-content">
            <h3>Software Developer Trainee</h3>
            <p className="timeline-company">CodeYourFuture</p>
            <p>
              Completed an intensive software development programme,
              building full-stack applications through hands-on projects
              and collaborative learning. Worked with Python, JavaScript,
              React, Node.js and databases, while developing skills in
              Git, testing and agile teamwork.
            </p>
          </div>

          <span className="timeline-mark" aria-hidden="true">
            ✳
          </span>
        </article>

        <article className="timeline-item">
          <p className="timeline-date">2.5 years</p>

          <div className="timeline-content">
            <h3>Computer Information Systems</h3>
            <p className="timeline-company">King Saud University</p>
            <p>
              Studied the foundations of computer information systems,
              developing an understanding of technology, information
              management and problem-solving. This experience made
              me interested in software development.
            </p>
          </div>

          <span className="timeline-mark" aria-hidden="true">
            ✳
          </span>
        </article>
      </div>

      <div className="orb orb-experience" aria-hidden="true" />
    </section>
  );
}

export default Experience;
