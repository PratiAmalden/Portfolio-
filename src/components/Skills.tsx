import { skills } from "../data/skills";
import SectionHeading from "./SectionHeading";

function Skills() {
  return (
    <section className="skills section-shell" id="skills">
      <SectionHeading eyebrow="02 /">Skills</SectionHeading>
      <p className="skills-intro">
        A practical mix of engineering, curiosity, and a little creative problem
        solving.
      </p>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={skill}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {skill}
          </li>
        ))}
      </ul>
      <div className="orb orb-skills" aria-hidden="true" />
    </section>
  );
}

export default Skills;
