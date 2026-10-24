import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { LayoutProps } from "@/utils/types";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="site-shell" id="top">
      <Navbar />
      <main className="site-main">{children}</main>
      <Footer />
    </div>
  );
}