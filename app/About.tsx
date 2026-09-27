import Image from "next/image";
import styles from "./About.module.css";

const principles = [
  ["01", "Écoute", "Comprendre avant de conseiller."],
  ["02", "Exigence", "Sélectionner avec justesse."],
  ["03", "Confiance", "Accompagner en toute transparence."],
];

export default function About() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <header className={styles.intro}>
        <p className={styles.kicker}><span /> À PROPOS · NOTRE MAISON</p>
        <p className={styles.issue}>ÉDITION 01<br />ORAN, ALGÉRIE</p>
        <h2 id="about-title">L’immobilier,<br /><em>autrement.</em></h2>
        <p className={styles.lead}>Une expertise locale et une approche profondément humaine, pensées pour les lieux qui comptent — et les histoires qui s’y écrivent.</p>
      </header>

      <div className={styles.story}>
        <figure className={styles.visual}>
          <div className={styles.imageWrap}>
            <Image
              src="/pyramide-img.jpg"
              alt="Maison de caractère avec piscine accompagnée par Benseddik Immobilier"
              fill
              sizes="(max-width: 760px) 100vw, 56vw"
              className={styles.image}
            />
          </div>
          <figcaption><span>01</span> Des adresses choisies avec discernement.</figcaption>
        </figure>

        <article className={styles.copy}>
          <span className={styles.monogram} aria-hidden="true">B.</span>
          <p className={styles.overline}>L’IMMOBILIER, EN TOUTE CONFIANCE</p>
          <h3>Bien plus qu’une agence, votre partenaire immobilier.</h3>
          <p className={styles.body}>Benseddik Immobilier vous accompagne dans chacun de vos projets. Achat, vente ou location : notre équipe transforme un parcours souvent complexe en une expérience claire, attentive et sereine.</p>
          <blockquote>« Votre projet mérite un accompagnement à sa mesure. »</blockquote>
          <a href="#contact">Rencontrer notre équipe <span aria-hidden="true">↗</span></a>
        </article>
      </div>

      <div className={styles.principles} aria-label="Nos engagements">
        {principles.map(([number, title, text]) => (
          <article key={number}>
            <span>{number}</span>
            <div><h3>{title}</h3><p>{text}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
