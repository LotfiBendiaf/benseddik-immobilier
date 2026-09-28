import Logo from "./Logo";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "./css/Footer.module.css";

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
          {navigation.map(([label, href]) => <a href={href} key={href}>{label}<ArrowUpRight aria-hidden="true" /></a>)}
        </nav>
        <div className={styles.contact}>
          <span>NOUS CONTACTER</span>
          <p>Oran, Algérie</p>
          <Button render={<a href="#contact" />} variant="ghost">Prendre rendez-vous <ArrowUpRight data-icon="inline-end" /></Button>
        </div>
      </div>

      <div className={styles.wordmark} aria-hidden="true">BENSEDDIK</div>

      <div className={styles.bottom}>
        <p>© 2026 Benseddik Immobilier</p>
        <p>Agence immobilière · Oran</p>
        <Button render={<a href="#home" />} variant="ghost">Retour en haut <ArrowUp data-icon="inline-end" /></Button>
      </div>
    </footer>
  );
}
