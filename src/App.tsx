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
  return (
    <>
      <Navbar />
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
