import Logo from "./Logo";
import Hero from "./Hero";
import About from "./About";
import Listings from "./Listings";
import Services from "./Services";
import Impact from "./Impact";
import Premium from "./Premium";
import Testimonials from "./Testimonials";
import Location from "./Location";
import Contact from "./Contact";
function Heading({mark,title,text}:{mark:string;title:string;text:string}){return <header className="heading"><b>{mark}</b><h2>{title}</h2><p>{text}</p></header>}

export default function Home(){return <main>
  <Hero/>
  <About/>
  <Listings/>
  <Services/>
  <Impact/>
  <Premium/>
  <Testimonials/>
  <Location/>
  <Contact/>
  <footer className="footer"><Logo size="lg"/><p>Votre projet immobilier, accompagné avec exigence.</p><small>© 2026 Benseddik Immobilier</small></footer>
  </main>}
