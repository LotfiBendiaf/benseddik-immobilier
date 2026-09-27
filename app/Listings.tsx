import Image from "next/image";
import styles from "./Listings.module.css";

const properties = [
  {
    image: "/immo2.jpg",
    type: "Villa",
    title: "Villa avec piscine",
    location: "Canastel, Oran",
    price: "82 000 000 DA",
    details: "5 chambres · 420 m²",
    status: "À vendre",
  },
  {
    image: "/immo1.jpg",
    type: "Appartement",
    title: "Appartement en résidence",
    location: "Akid Lotfi, Oran",
    price: "28 000 000 DA",
    details: "3 chambres · 126 m²",
    status: "À vendre",
  },
  {
    image: "/immo3.jpg",
    type: "Local commercial",
    title: "Espace prêt à aménager",
    location: "Bir El Djir, Oran",
    price: "Nous consulter",
    details: "Plateau · 180 m²",
    status: "À louer",
  },
  {
    image: "/immo4.jpg",
    type: "Appartement",
    title: "Appartement contemporain",
    location: "Centre-ville, Oran",
    price: "120 000 DA / mois",
    details: "3 chambres · 110 m²",
    status: "À louer",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Listings() {
  const [featured, ...others] = properties;

  return (
    <section className={styles.listings} id="listings" aria-labelledby="listings-title">
      <header className={styles.intro}>
        <p className={styles.kicker}><span /> BIENS · SÉLECTION DU MOMENT</p>
        <p className={styles.count}>04 BIENS<br />ORAN &amp; ENVIRONS</p>
        <h2 id="listings-title">Des lieux choisis,<br /><em>pour vous.</em></h2>
        <div className={styles.introCopy}>
          <p>Une sélection resserrée de biens retenus pour leur emplacement, leur potentiel et leur singularité.</p>
          <a href="#premium">Voir toute la collection <Arrow /></a>
        </div>
      </header>

      <article className={styles.featured}>
        <a className={styles.featuredImage} href="#contact" aria-label={`Découvrir ${featured.title}`}>
          <Image src={featured.image} alt={`${featured.title} à ${featured.location}`} fill sizes="(max-width: 760px) 100vw, 66vw" className={styles.image} />
          <span className={styles.shade} />
          <span className={styles.status}>{featured.status}</span>
          <span className={styles.index}>01 / 04</span>
          <div className={styles.featuredCopy}>
            <p className={styles.overline}>{featured.type} · Propriété vedette</p>
            <h3>{featured.title}</h3>
            <p className={styles.location}>{featured.location}</p>
            <div className={styles.meta}><span>{featured.details}</span><strong>{featured.price}</strong></div>
            <span className={styles.discover}>Découvrir ce bien <Arrow /></span>
          </div>
        </a>
      </article>

      <div className={styles.grid}>
        {others.map((property, index) => (
          <article className={styles.card} key={property.title}>
            <a className={styles.cardImage} href="#contact" aria-label={`Découvrir ${property.title}`}>
              <Image src={property.image} alt={`${property.title} à ${property.location}`} fill sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw" className={styles.image} />
              <span className={styles.shade} />
              <span className={styles.status}>{property.status}</span>
              <span className={styles.index}>0{index + 2}</span>
              <div className={styles.cardCopy}>
                <div className={styles.cardHead}><p>{property.type}</p><span>{property.details}</span></div>
                <h3>{property.title}</h3>
                <p className={styles.location}>{property.location}</p>
                <footer><strong>{property.price}</strong><Arrow /></footer>
              </div>
            </a>
          </article>
        ))}
      </div>

      <footer className={styles.sectionFooter}>
        <p><span>+</span> De nouvelles adresses rejoignent régulièrement notre sélection.</p>
        <a href="#contact">Confiez-nous votre recherche <Arrow /></a>
      </footer>
    </section>
  );
}
