import Logo from "./Logo";
import styles from "./Footer.module.css";

const navigation = [
  ["À propos", "#about"],
  ["Nos biens", "#listings"],
  ["Expertise", "#expertise"],
  ["Collection privée", "#premium"],
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Logo size="lg" />
          <p>Votre projet immobilier,<br />accompagné avec exigence.</p>
        </div>
        <nav aria-label="Navigation de pied de page">
          <span>EXPLORER</span>
          {navigation.map(([label, href]) => <a href={href} key={href}>{label}<i aria-hidden="true">↗</i></a>)}
        </nav>
        <div className={styles.contact}>
          <span>NOUS CONTACTER</span>
          <p>Oran, Algérie</p>
          <a href="#contact">Prendre rendez-vous <i aria-hidden="true">↗</i></a>
        </div>
      </div>

      <div className={styles.wordmark} aria-hidden="true">BENSEDDIK</div>

      <div className={styles.bottom}>
        <p>© 2026 Benseddik Immobilier</p>
        <p>Agence immobilière · Oran</p>
        <a href="#">Retour en haut <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
