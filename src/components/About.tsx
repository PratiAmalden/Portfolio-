import portrait from "../assets/images/portrait.jpg";
import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section className="about section-shell" id="about">
      <div className="about-copy">
        <SectionHeading eyebrow="01 / A little introduction">
          Hello!
        </SectionHeading>
        <p className="about-name">
          My name is
          <br />
          Prati Amalden.
        </p>
        <div className="about-description">
          <h3>About me</h3>
          <p>
            I am a Software Engineer with the ability to work across the stack 
            from creating visually engaging UI to designing APIs and working with databases.
            <br />
            <br />
            I'm naturally curious, a fast learner, and I like figuring things out, whether that means learning a new technology or finding a better way to solve a problem.
            <br />
            I'm always exploring, building, and looking for opportunities to grow as an engineer.
          </p>
        </div>
        <span className="orb orb-about" aria-hidden="true" />
      </div>
      <div className="portrait-card">
        <img className="portrait-image" src={portrait} alt="Prati Amalden" />
      </div>
    </section>
  );
}

export default About;
