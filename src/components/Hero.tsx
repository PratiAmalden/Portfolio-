function Hero() {
  return (
    <section
      className="hero section-shell flex flex-col"
      id="top"
      aria-labelledby="hero-title"
    >
      <div className="orb orb-top" aria-hidden="true" />
      <div className="orb orb-right" aria-hidden="true" />
      <div className="orb orb-left" aria-hidden="true" />
      <div className="hero-copy grid">
        <h1 id="hero-title">
          Prati
          <br />
          <span>Amalden</span>
        </h1>
        <div className="hero-bottom">
          <p>Software engineer</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
