import styles from "./css/Services.module.css";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return <ArrowUpRight aria-hidden="true" strokeWidth={1.5} />;
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
          <Button render={<a href="#contact" />} variant="ghost">Parler de votre projet <Arrow /></Button>
        </div>
      </header>

      <div className={styles.list}>
        {services.map((service) => (
          <article className={styles.item} key={service.number}>
            <header className={styles.itemHeader}>
              <span className={styles.number}>{service.number}</span>
              <Button render={<a href="#contact" aria-label={`Découvrir notre service ${service.title}`} />} variant="outline" size="icon-lg"><Arrow /></Button>
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
        <Button render={<a href="#contact" />} variant="ghost">Échanger avec un conseiller <Arrow /></Button>
      </footer>
    </section>
  );
}
