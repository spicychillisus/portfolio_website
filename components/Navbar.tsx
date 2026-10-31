import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-wrap content-width" aria-label="Main navigation">
        <Link className="wordmark" href="/" aria-label="Your Name, home">
          <span className="wordmark-mark" aria-hidden="true">YN</span>
          <span>Your Name</span>
        </Link>
        <div className="nav-actions">
          <Link className="nav-link" href="/projects">Projects</Link>
          <Link className="nav-link" href="/contactPage">Contact</Link>          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}