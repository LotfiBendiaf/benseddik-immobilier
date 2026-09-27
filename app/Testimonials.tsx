import styles from "./Testimonials.module.css";

const testimonials = [
  { quote: "L’agence m’a accompagnée et guidée tout au long de mes recherches. Une présence rassurante et une efficacité remarquable.", name: "Mokrane Dalila", project: "Recherche immobilière", index: "01" },
  { quote: "Un accompagnement complet du début à la fin, par une équipe jeune, motivée et réellement attentive à notre projet.", name: "Rania Iness Taa", project: "Acquisition", index: "02" },
  { quote: "Une équipe sérieuse, rapide et professionnelle. Chaque étape a été expliquée clairement et menée avec beaucoup de soin.", name: "Razan Rahou", project: "Vente immobilière", index: "03" },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials} aria-labelledby="testimonials-title">
      <header className={styles.intro}>
        <p className={styles.kicker}><span /> TÉMOIGNAGES · LEUR EXPÉRIENCE</p>
        <p className={styles.count}>03 HISTOIRES<br />UNE MÊME CONFIANCE</p>
        <h2 id="testimonials-title">Leurs mots,<br /><em>notre mesure.</em></h2>
        <p className={styles.lead}>Ce sont celles et ceux que nous accompagnons qui racontent le mieux notre manière de faire de l’immobilier.</p>
      </header>

      <div className={styles.grid}>
        {testimonials.map((testimonial) => (
          <article key={testimonial.index}>
            <header><span>{testimonial.index}</span><span aria-label="5 étoiles">★★★★★</span></header>
            <span className={styles.quote} aria-hidden="true">“</span>
            <blockquote>{testimonial.quote}</blockquote>
            <footer>
              <div><strong>{testimonial.name}</strong><span>{testimonial.project}</span></div>
              <small>CLIENT · BENSEDDIK</small>
            </footer>
          </article>
        ))}
      </div>

      <footer className={styles.footer}>
        <p>Votre histoire pourrait être la prochaine.</p>
        <a href="#contact">Parlons de votre projet <span aria-hidden="true">↗</span></a>
      </footer>
    </section>
  );
}
