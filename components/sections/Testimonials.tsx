import styles from "./css/Testimonials.module.css";
import { ArrowUpRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  { quote: "L’agence m’a accompagnée et guidée tout au long de mes recherches. Une présence rassurante et une efficacité remarquable.", name: "Mokrane Dalila", project: "Recherche immobilière", initials: "MD" },
  { quote: "Un accompagnement complet du début à la fin, par une équipe jeune, motivée et réellement attentive à notre projet.", name: "Rania Iness Taa", project: "Acquisition", initials: "RT" },
  { quote: "Une équipe sérieuse, rapide et professionnelle. Chaque étape a été expliquée clairement et menée avec beaucoup de soin.", name: "Razan Rahou", project: "Vente immobilière", initials: "RR" },
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
          <article key={testimonial.name}>
            <header><span aria-label="5 étoiles">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={13} fill="currentColor" strokeWidth={1.5} />)}</span><small>5.0</small></header>
            <blockquote>“{testimonial.quote}”</blockquote>
            <footer>
              <span className={styles.avatar} aria-hidden="true">{testimonial.initials}</span>
              <div><strong>{testimonial.name}</strong><span>{testimonial.project}</span></div>
            </footer>
          </article>
        ))}
      </div>

      <footer className={styles.footer}>
        <p>Votre histoire pourrait être la prochaine.</p>
        <Button render={<a href="#contact" />} variant="ghost">Parlons de votre projet <ArrowUpRight data-icon="inline-end" /></Button>
      </footer>
    </section>
  );
}
