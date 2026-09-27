import styles from "./Location.module.css";

export default function Location() {
  return (
    <section className={styles.location} aria-labelledby="location-title">
      <header className={styles.intro}>
        <p className={styles.kicker}><span /> L’AGENCE · NOUS RETROUVER</p>
        <p className={styles.issue}>ORAN, ALGÉRIE<br />SUR RENDEZ-VOUS</p>
        <h2 id="location-title">Au cœur<br /><em>d’Oran.</em></h2>
        <p className={styles.lead}>Venez nous rencontrer pour parler de votre projet, découvrir notre sélection ou simplement faire connaissance.</p>
      </header>

      <div className={styles.map}>
        <div className={`${styles.street} ${styles.streetOne}`} /><div className={`${styles.street} ${styles.streetTwo}`} />
        <div className={`${styles.street} ${styles.streetThree}`} /><div className={`${styles.street} ${styles.streetFour}`} />
        <span className={`${styles.district} ${styles.districtOne}`}>CANASTEL</span>
        <span className={`${styles.district} ${styles.districtTwo}`}>AKID LOTFI</span>
        <span className={`${styles.district} ${styles.districtThree}`}>BIR EL DJIR</span>
        <span className={styles.coast}>MÉDITERRANÉE</span>
        <div className={styles.pin} aria-label="Benseddik Immobilier à Oran"><i /><span><strong>Benseddik</strong>Immobilier</span></div>
        <span className={styles.coordinates}>35.6971° N<br />0.6308° W</span>
      </div>

      <div className={styles.details}>
        <div><span>01 · ADRESSE</span><strong>Oran, Algérie</strong><p>L’adresse précise vous sera communiquée lors de la prise de rendez-vous.</p></div>
        <div><span>02 · HORAIRES</span><strong>Sam — Jeu</strong><p>09:00 — 18:00<br />Vendredi sur rendez-vous</p></div>
        <a href="#contact"><span>Planifier une visite</span><i aria-hidden="true">↗</i></a>
      </div>
    </section>
  );
}
