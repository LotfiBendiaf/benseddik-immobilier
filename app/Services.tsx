import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "Vendre",
    eyebrow: "MISE EN VALEUR · STRATÉGIE",
    text: "Une estimation juste, une présentation soignée et une stratégie de commercialisation pensée pour votre bien.",
  },
  {
    number: "02",
    title: "Acheter",
    eyebrow: "RECHERCHE · SÉLECTION",
    text: "Une recherche attentive et des biens sélectionnés selon vos critères, votre rythme et votre projet de vie.",
  },
  {
    number: "03",
    title: "Louer",
    eyebrow: "MISE EN RELATION · SUIVI",
    text: "Un accompagnement clair pour trouver le bon locataire ou le lieu qui vous correspond vraiment.",
  },
  {
    number: "04",
    title: "Conseiller",
    eyebrow: "EXPERTISE · SÉCURITÉ",
    text: "Des repères fiables, du premier échange jusqu’à la signature, pour avancer avec sérénité.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Services() {
  return (
    <section className={styles.services} id="expertise" aria-labelledby="services-title">
      <header className={styles.intro}>
        <p className={styles.kicker}><span /> EXPERTISE · NOS SERVICES</p>
        <p className={styles.count}>04 SAVOIR-FAIRE<br />UN SEUL INTERLOCUTEUR</p>
        <h2 id="services-title">Chaque projet,<br /><em>bien accompagné.</em></h2>
        <div className={styles.introCopy}>
          <p>Nous réunissons conseil, connaissance du marché et exigence de service pour rendre chaque étape plus simple.</p>
          <a href="#contact">Parler de votre projet <Arrow /></a>
        </div>
      </header>

      <div className={styles.list}>
        {services.map((service) => (
          <article className={styles.item} key={service.number}>
            <header className={styles.itemHeader}>
              <span className={styles.number}>{service.number}</span>
              <a href="#contact" aria-label={`Découvrir notre service ${service.title}`}><Arrow /></a>
            </header>
            <div className={styles.title}>
              <p>{service.eyebrow}</p>
              <h3>{service.title}</h3>
            </div>
            <p className={styles.description}>{service.text}</p>
          </article>
        ))}
      </div>

      <footer className={styles.footer}>
        <p><span>Un projet singulier ?</span> Nous imaginons aussi un accompagnement entièrement sur mesure.</p>
        <a href="#contact">Échanger avec un conseiller <Arrow /></a>
      </footer>
    </section>
  );
}
