import Logo from "./Logo";
import Hero from "./Hero";
import About from "./About";
import Listings from "./Listings";
import Services from "./Services";
import Impact from "./Impact";
import Premium from "./Premium";
import Testimonials from "./Testimonials";
function Heading({mark,title,text}:{mark:string;title:string;text:string}){return <header className="heading"><b>{mark}</b><h2>{title}</h2><p>{text}</p></header>}

export default function Home(){return <main>
  <Hero/>
  <About/>
  <Listings/>
  <Services/>
  <Impact/>
  <Premium/>
  <Testimonials/>
  <section className="section"><Heading mark="ADRESSE" title="Retrouvez-nous" text="Passez nous voir à Oran pour échanger directement avec notre équipe autour de votre projet."/><div className="map"><div><span>●<i>Benseddik<br/>Immobilier</i></span></div><footer><strong>⌖ Benseddik Immobilier <small>Oran, Algérie</small></strong><a href="#contact">Obtenir l&apos;itinéraire →</a></footer></div></section>
  <section className="section warm" id="contact"><Heading mark="CONTACT" title="Parlons de votre projet" text="Une question, un bien à vendre ou un nouveau projet ? Notre équipe vous répond avec attention."/><div className="contact"><aside><small>RESTONS EN CONTACT</small><h3>Un échange simple pour commencer votre projet sereinement.</h3><p>Un conseiller prendra le temps de comprendre votre besoin et de vous orienter.</p><ul><li>◫ <span>Téléphone<strong>À compléter</strong></span></li><li>✉ <span>Email<strong>À compléter</strong></span></li><li>⌖ <span>Agence<strong>Oran, Algérie</strong></span></li></ul></aside><form><h3>Envoyez-nous un message</h3><p>Remplissez le formulaire et nous reviendrons vers vous.</p><div><label>Nom<input placeholder="Votre nom complet"/></label><label>Email<input type="email" placeholder="email@exemple.com"/></label></div><label>Téléphone<input placeholder="+213..."/></label><label>Message<textarea placeholder="Décrivez votre besoin..."/></label><button className="btn dark">Envoyer le message ↗</button></form></div></section>
  <footer className="footer"><Logo size="lg"/><p>Votre projet immobilier, accompagné avec exigence.</p><small>© 2026 Benseddik Immobilier</small></footer>
  </main>}
