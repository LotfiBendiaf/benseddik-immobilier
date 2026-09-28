import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "./css/Premium.module.css";

const properties = [
  {
    image: "/immo5.jpg",
    title: "Villa d’architecte",
    location: "Canastel, Oran",
    detail: "6 chambres · Piscine · Vue mer",
    index: "01",
  },
  {
    image: "/immo6.jpg",
    title: "Appartement d’exception",
    location: "Akid Lotfi, Oran",
    detail: "4 chambres · Terrasse panoramique",
    index: "02",
  },
  {
    image: "/immo7.jpg",
    title: "Maison familiale",
    location: "Bir El Djir, Oran",
    detail: "5 chambres · Jardin privé",
    index: "03",
  },
];

function Arrow() {
  return <ArrowUpRight aria-hidden="true" strokeWidth={1.5} />;
}

export default function Premium() {
  const [featured, ...secondary] = properties;

  return (
    <section className={styles.premium} id="premium" aria-labelledby="premium-title">
      <header className={styles.intro}>
        <p className={styles.kicker}><span /> COLLECTION · BIENS D’EXCEPTION</p>
        <p className={styles.count}>03 ADRESSES<br />SÉLECTION PRIVÉE</p>
        <h2 id="premium-title">Le rare,<br /><em>bien choisi.</em></h2>
        <div className={styles.introCopy}>
          <p>Des propriétés remarquables, retenues pour leur architecture, leur adresse et la qualité de leurs espaces.</p>
          <Button render={<a href="#contact" />} variant="ghost">Accéder à la sélection privée <Arrow /></Button>
        </div>
      </header>

      <div className={styles.gallery}>
        <article className={styles.featured}>
          <a href="#contact" aria-label={`Découvrir ${featured.title}`}>
            <Image src={featured.image} alt={`${featured.title} à ${featured.location}`} fill sizes="(max-width: 760px) 100vw, 66vw" className={styles.image} />
            <span className={styles.shade} />
            <span className={styles.badge}>Sélection privée</span>
            <span className={styles.index}>{featured.index} / 03</span>
            <div className={styles.featuredCopy}>
              <p>{featured.location}</p>
              <h3>{featured.title}</h3>
              <footer><span>{featured.detail}</span><strong>Découvrir <Arrow /></strong></footer>
            </div>
          </a>
        </article>

        <div className={styles.secondary}>
          {secondary.map((property) => (
            <article key={property.index}>
              <a href="#contact" aria-label={`Découvrir ${property.title}`}>
                <Image src={property.image} alt={`${property.title} à ${property.location}`} fill sizes="(max-width: 760px) 100vw, 34vw" className={styles.image} />
                <span className={styles.shade} />
                <span className={styles.index}>{property.index}</span>
                <div className={styles.cardCopy}>
                  <p>{property.location}</p>
                  <h3>{property.title}</h3>
                  <footer><span>{property.detail}</span><Arrow /></footer>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>

      <footer className={styles.sectionFooter}>
        <p>Certaines adresses ne sont jamais publiées.</p>
        <Button render={<a href="#contact" />} variant="ghost">Nous confier votre recherche <Arrow /></Button>
      </footer>
    </section>
  );
}
