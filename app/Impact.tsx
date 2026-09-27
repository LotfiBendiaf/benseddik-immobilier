import styles from "./Impact.module.css";

const figures = [
  { value: "500", suffix: "+", label: "Transactions réalisées", detail: "Des projets menés avec méthode, de la première rencontre jusqu’à la remise des clés." },
  { value: "10", suffix: "", label: "Agents à votre écoute", detail: "Une équipe locale, disponible et engagée autour de chaque projet immobilier." },
  { value: "450", suffix: "+", label: "Biens en portefeuille", detail: "Une sélection active à Oran et dans ses quartiers les plus recherchés." },
];

export default function Impact() {
  return (
    <section className={styles.impact} aria-labelledby="impact-title">
      <header className={styles.intro}>
        <p className={styles.kicker}>NOTRE IMPACT</p>
        <h2 id="impact-title">La confiance,<br /><em>en actes.</em></h2>
        <p className={styles.lead}>Notre portée se mesure dans la durée : par les projets aboutis, les relations construites et les clients qui nous recommandent.</p>
      </header>

      <div className={styles.figures}>
        {figures.map((figure) => (
          <article key={figure.label}>
            <p className={styles.value}>{figure.value}<sup>{figure.suffix}</sup></p>
            <h3>{figure.label}</h3>
            <p className={styles.detail}>{figure.detail}</p>
          </article>
        ))}
      </div>

      <footer className={styles.footer}>
        <p>Vous avez un projet immobilier à Oran ?</p>
        <a href="#contact">Commencer votre projet <span aria-hidden="true">→</span></a>
      </footer>
    </section>
  );
}
