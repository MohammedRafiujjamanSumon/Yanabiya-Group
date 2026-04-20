import { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import {
  About,
  Businesses,
  Solutions,
  Partnerships,
  GlobalPresence,
  Impact,
  NetworkSection,
  Leadership,
  Strategy,
  Insights,
  Careers,
  Contact,
} from "./components/Sections";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`sticky top-0 z-50 ${
          scrolled ? "shadow-[0_2px_12px_rgba(4,36,15,0.12)]" : ""
        }`}
      >
        <TopBar />
        <Navbar />
      </div>
      <main>
        <Hero />
        <About />
        <Businesses />
        <Solutions />
        <Partnerships />
        <GlobalPresence />
        <Impact />
        <NetworkSection />
        <Leadership />
        <Strategy />
        <Insights />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
