import SectionHeading from "./SectionHeading";

function Interests() {
  return (
    <section
      className="interests section-shell"
      id="interests"
      aria-labelledby="interests-title"
    >
      <SectionHeading eyebrow="05 /">
        A little more
      </SectionHeading>

      <p className="interests-copy" id="interests-title">
        Outside of Coding
      </p>

      <div className="interest-tags" aria-label="Interests">
        <p>
          <span>Football (goalkeeper)</span> weekly team player, training and playing matches as a goalkeeper
        </p>
        <p>
          <span>Reading & Analyzing</span> Postcolonial/Political Literature (e.g., Mahmoud Darwish)
        </p>
        <p>
          <span>Art & Design</span> I love exploring and making art
        </p>
        <p> <span>Fishing</span> A summer hobby to slow down, enjoy the sun and meet new people </p>
  
      </div>

      <div className="orb orb-interests" aria-hidden="true" />
    </section>
  );
}

export default Interests;
