import Link from "next/link";
import devName from "@/data/name";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner content-width">
        <div className="footer-topline">
          <div>
            <p className="eyebrow">Have something in mind?</p>
            <a className="footer-email" href="mailto:your.email@example.com">Let&apos;s talk <span aria-hidden="true">↗</span></a>
          </div>
          <nav className="social-links" aria-label="Social links">
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/your-name" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="mailto:your.email@example.com">Email <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
        <div className="footer-bottomline">
          <Link className="wordmark footer-wordmark" href="/">
            <span className="wordmark-mark" aria-hidden="true">YN</span>
            <span>{devName}</span>
          </Link>
          <p>© {new Date().getFullYear()} {devName}. All rights reserved.</p>
          <a className="back-to-top" href="#top">Back to top ↑</a>
        </div>
        <p className="footer-placeholder">Placeholder links and contact details: update before publishing.</p>
      </div>
    </footer>
  );
}