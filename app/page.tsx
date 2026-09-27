import Image from "next/image";
import Logo from "./Logo";
import Hero from "./Hero";
import About from "./About";
import Listings from "./Listings";
import Services from "./Services";
function Heading({mark,title,text}:{mark:string;title:string;text:string}){return <header className="heading"><b>{mark}</b><h2>{title}</h2><p>{text}</p></header>}

export default function Home(){return <main>
  <Hero/>
  <About/>
  <Listings/>
  <Services/>
  <section className="impact"><Heading mark="IMPACT" title="Notre portée" text="Des résultats concrets portés par notre réseau, notre connaissance du marché et la confiance de nos clients."/><div className="stats"><div><strong>500+</strong><span>Transactions</span></div><div><strong>10</strong><span>Agents actifs</span></div><div><strong>450+</strong><span>Biens actifs</span></div></div></section>
  <section className="section" id="premium"><Heading mark="PREMIUM" title="Biens d'exception" text="Une sélection confidentielle de propriétés choisies pour leur emplacement, leur qualité et leur caractère."/><div className="premium">{[5,6,7].map((n,i)=><article key={n}><Image src={`/immo${n}.jpg`} alt="Propriété d'exception" fill className="cover"/><div><small>SÉLECTION PRIVÉE 0{i+1}</small><h3>{["Villa d'architecte","Appartement d'exception","Maison familiale"][i]}</h3><span>Découvrir le bien →</span></div></article>)}</div></section>
  <section className="section reviews"><Heading mark="AVIS" title="Ils nous font confiance" text="Des expériences partagées par celles et ceux que nous avons accompagnés dans leur projet immobilier."/><div className="reviewsGrid">{[["Mokrane Dalila","L'agence m'a accompagnée et guidée tout au long de mes recherches. Professionnalisme et efficacité remarquables."],["Rania Iness Taa","Un accompagnement complet du début à la fin, par une équipe jeune, motivée et déterminée."],["Razan Rahou","Excellente agence ! Une équipe sérieuse, rapide et véritablement professionnelle."]].map(r=><article key={r[0]}><strong>★★★★★</strong><b>“</b><p>{r[1]}</p><footer><span>{r[0]}</span><small>Il y a quelques mois</small></footer></article>)}</div></section>
  <section className="section"><Heading mark="ADRESSE" title="Retrouvez-nous" text="Passez nous voir à Oran pour échanger directement avec notre équipe autour de votre projet."/><div className="map"><div><span>●<i>Benseddik<br/>Immobilier</i></span></div><footer><strong>⌖ Benseddik Immobilier <small>Oran, Algérie</small></strong><a href="#contact">Obtenir l&apos;itinéraire →</a></footer></div></section>
  <section className="section warm" id="contact"><Heading mark="CONTACT" title="Parlons de votre projet" text="Une question, un bien à vendre ou un nouveau projet ? Notre équipe vous répond avec attention."/><div className="contact"><aside><small>RESTONS EN CONTACT</small><h3>Un échange simple pour commencer votre projet sereinement.</h3><p>Un conseiller prendra le temps de comprendre votre besoin et de vous orienter.</p><ul><li>◫ <span>Téléphone<strong>À compléter</strong></span></li><li>✉ <span>Email<strong>À compléter</strong></span></li><li>⌖ <span>Agence<strong>Oran, Algérie</strong></span></li></ul></aside><form><h3>Envoyez-nous un message</h3><p>Remplissez le formulaire et nous reviendrons vers vous.</p><div><label>Nom<input placeholder="Votre nom complet"/></label><label>Email<input type="email" placeholder="email@exemple.com"/></label></div><label>Téléphone<input placeholder="+213..."/></label><label>Message<textarea placeholder="Décrivez votre besoin..."/></label><button className="btn dark">Envoyer le message ↗</button></form></div></section>
  <footer className="footer"><Logo size="lg"/><p>Votre projet immobilier, accompagné avec exigence.</p><small>© 2026 Benseddik Immobilier</small></footer>
  </main>}
