import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero content-width" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          <span className="availability-dot" aria-hidden="true" />
          Available for select projects
        </p>
        <h1 id="hero-title">
          Thoughtful software,<br />
          <span>made for people.</span>
        </h1>
        <p className="hero-intro">
          I&apos;m <strong>Your Name</strong>, a software developer who turns complex
          problems into clear, useful digital experiences.
          <span className="placeholder-note"> Replace this with your own introduction.</span>
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/projects">
            Explore my work <span aria-hidden="true">↗</span>
          </Link>
          <a className="text-link hero-secondary-link" href="mailto:your.email@example.com">
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <aside className="hero-aside" aria-label="Current focus">
        <div className="hero-monogram" aria-hidden="true">YN<span>.</span></div>
        <div className="hero-aside-rule" />
        <p className="hero-aside-label">Currently focused on</p>
        <p className="hero-aside-copy">Useful tools, accessible interfaces, and the details in between.</p>
      </aside>
      <div className="hero-bottomline">
        <span>Independent developer</span>
        <span>Based in Your City <span className="placeholder-note">(replace)</span></span>
        <a href="#about">Scroll to explore <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}