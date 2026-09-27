import styles from "./Contact.module.css";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title">
      <header className={styles.intro}>
        <p className={styles.kicker}><span /> CONTACT · VOTRE PROJET</p>
        <p className={styles.issue}>PREMIER ÉCHANGE<br />SANS ENGAGEMENT</p>
        <h2 id="contact-title">Commençons<br /><em>simplement.</em></h2>
        <p className={styles.lead}>Parlez-nous de votre projet. Un conseiller vous répondra personnellement pour comprendre votre besoin et vous orienter.</p>
      </header>

      <div className={styles.panel}>
        <aside>
          <p className={styles.overline}>CONTACTEZ-NOUS</p>
          <h3>Chaque beau projet commence par une conversation.</h3>
          <p className={styles.copy}>Achat, vente, location ou estimation : laissez-nous quelques informations et nous reviendrons vers vous avec attention.</p>
          <dl>
            <div><dt>01 · TÉLÉPHONE</dt><dd>À compléter</dd></div>
            <div><dt>02 · EMAIL</dt><dd>À compléter</dd></div>
            <div><dt>03 · AGENCE</dt><dd>Oran, Algérie</dd></div>
          </dl>
          <p className={styles.note}>Réponse habituelle sous 24 heures ouvrées.</p>
        </aside>

        <form>
          <div className={styles.formIntro}><div><span>ENVOYEZ-NOUS UN MESSAGE</span><h3>Parlez-nous de votre projet</h3></div><p>Les champs marqués d’un astérisque sont requis.</p></div>
          <div className={styles.row}>
            <label>Nom complet *<input name="name" autoComplete="name" placeholder="Votre nom" required /></label>
            <label>Téléphone *<input name="phone" type="tel" autoComplete="tel" placeholder="+213 ..." required /></label>
          </div>
          <label>Adresse email *<input name="email" type="email" autoComplete="email" placeholder="email@exemple.com" required /></label>
          <label>Nature du projet
            <Select name="project">
              <SelectTrigger className={styles.selectTrigger}><SelectValue placeholder="Sélectionnez votre projet" /></SelectTrigger>
              <SelectContent className={styles.selectContent} align="start">
                <SelectItem className={styles.selectItem} value="achat">Achat</SelectItem>
                <SelectItem className={styles.selectItem} value="vente">Vente</SelectItem>
                <SelectItem className={styles.selectItem} value="location">Location</SelectItem>
                <SelectItem className={styles.selectItem} value="estimation">Estimation</SelectItem>
                <SelectItem className={styles.selectItem} value="autre">Autre demande</SelectItem>
              </SelectContent>
            </Select>
          </label>
          <label>Parlez-nous de votre projet *<textarea name="message" placeholder="Type de bien, quartier, budget, délai…" required /></label>
          <div className={styles.submit}><p>En envoyant ce formulaire, vous acceptez d’être recontacté par notre équipe.</p><button type="submit">Envoyer ma demande <span aria-hidden="true">→</span></button></div>
        </form>
      </div>
    </section>
  );
}
