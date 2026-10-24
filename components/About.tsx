export default function About() {
  return (
    <section className="section about-section content-width" id="about" aria-labelledby="about-heading">
      <div className="section-label">
        <p className="eyebrow">A little about me</p>
        <span className="section-number">01 / 03</span>
      </div>
      <div className="about-copy">
        <h2 id="about-heading">Curious by nature.<br />Careful by craft.</h2>
        <div className="about-description">
          <p>
            I care about making technology feel a little more human. I work across
            the stack, bringing product thinking and thoughtful engineering together
            to build things people enjoy using.
          </p>
          <p className="placeholder-note">
            Placeholder bio: add a few lines about your background, what you value,
            and the kind of work you want to do.
          </p>
        </div>
      </div>
    </section>
  );
}