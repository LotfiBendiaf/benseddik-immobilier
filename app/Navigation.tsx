"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import styles from "./Navigation.module.css";

const categories = [
  { name: "Acheter", image: "/immo1.jpg", href: "#listings", description: "Des adresses choisies pour commencer votre prochain chapitre.", heading: "Un lieu, une nouvelle vie.", label: "Votre acquisition", action: "Découvrir nos biens", links: [["Nos biens à vendre", "#listings"], ["Biens d’exception", "#premium"], ["Être accompagné", "#contact"]] },
  { name: "Louer", image: "/immo2.jpg", href: "#listings", description: "Trouvez une adresse à la hauteur de vos envies, à Oran.", heading: "Votre prochaine adresse.", label: "Votre location", action: "Explorer nos biens", links: [["Découvrir les annonces", "#listings"], ["Notre accompagnement", "#expertise"], ["Confier votre recherche", "#contact"]] },
  { name: "Notre expertise", image: "/pyramide-img6.jpg", href: "#expertise", description: "Une expertise locale et un conseil attentif, à chaque étape.", heading: "Votre projet, notre expertise.", label: "Nos services", action: "Tous nos services", links: [["Vente & location", "#expertise"], ["Estimer votre bien", "#contact"], ["Conseil & accompagnement", "#expertise"]] },
  { name: "L’agence", image: "/pyramide-img.jpg", href: "#about", description: "Une équipe engagée, des relations fondées sur la confiance.", heading: "L’immobilier, autrement.", label: "Benseddik Immobilier", action: "Découvrir l’agence", links: [["Qui sommes-nous ?", "#about"], ["Notre savoir-faire", "#expertise"], ["Rencontrons-nous", "#contact"]] },
];

export default function Navigation() {
  const [active, setActive] = useState<number | null>(null);
  const [mobile, setMobile] = useState(false);
  const root = useRef<HTMLElement>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  const mobileTrigger = useRef<HTMLButtonElement>(null);
  const close = () => { setActive(null); setMobile(false); };
  const canHover = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  useEffect(() => {
    const outside = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) { setActive(null); setMobile(false); } };
    const resize = () => { setActive(null); setMobile(false); };
    document.addEventListener("pointerdown", outside);
    window.addEventListener("resize", resize);
    return () => { document.removeEventListener("pointerdown", outside); window.removeEventListener("resize", resize); };
  }, []);

  return <header ref={root} className={styles.header} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) close(); }} onKeyDown={(event) => {
    if (event.key === "Escape") {
      if (mobile) mobileTrigger.current?.focus();
      else if (active !== null) triggers.current[active]?.focus();
      close();
    }
  }}>
    <a href="#home" aria-label="Benseddik Immobilier — accueil" className={styles.brand} onClick={close}><Logo /></a>
    <button ref={mobileTrigger} type="button" className={styles.mobileToggle} aria-expanded={mobile} aria-controls="primary-navigation" onClick={() => { setMobile(!mobile); setActive(null); }}>{mobile ? "Fermer −" : "Menu +"}</button>
    <nav id="primary-navigation" className={`${styles.navigation} ${mobile ? styles.mobileOpen : ""}`} aria-label="Navigation principale">
      {categories.map((category, index) => <div
        key={category.name}
        className={styles.item}
        onMouseEnter={() => { if (canHover()) setActive(index); }}
        onMouseLeave={() => { if (canHover()) setActive((current) => current === index ? null : current); }}
      >
        <button ref={(node) => { triggers.current[index] = node; }} type="button" className={styles.trigger} aria-expanded={active === index} aria-controls={`navigation-panel-${index}`} onClick={() => setActive(canHover() ? index : active === index ? null : index)} onKeyDown={(event) => { if (event.key === "ArrowDown") { event.preventDefault(); setActive(index); requestAnimationFrame(() => root.current?.querySelector<HTMLAnchorElement>(`#navigation-panel-${index} a`)?.focus()); } }}>{category.name}<svg viewBox="0 0 12 12" aria-hidden="true"><path d="m3 4.5 3 3 3-3" /></svg></button>
        {active === index && <div id={`navigation-panel-${index}`} className={styles.panel}>
          <a href={category.href} className={styles.feature} onClick={close}>
            <Image src={category.image} alt="" fill sizes="(max-width: 800px) 90vw, 310px" className={styles.photo} />
            <span className={styles.shade} />
            <span className={styles.featureContent}><span className={styles.featureTop}>{category.label}<i>0{index + 1}</i></span><span><span className={styles.featureTitle}>{category.name}</span><span className={styles.description}>{category.description}</span><span className={styles.featureAction}>{category.action}<span aria-hidden="true">↗</span></span></span></span>
          </a>
          <div className={styles.details}><p className={styles.eyebrow}>Explorer {category.label.toLowerCase()}</p><h2>{category.heading}</h2><ol>{category.links.map(([label, href], linkIndex) => <li key={label}><a href={href} onClick={close}><i>0{linkIndex + 1}</i><span>{label}</span><span className={styles.arrow} aria-hidden="true">↗</span></a></li>)}</ol><p className={styles.note}>Des lieux de caractère, une équipe à votre écoute.</p></div>
        </div>}
      </div>)}
      <a href="#contact" className={styles.mobileContact} onClick={close}>Parlons de votre projet ↗</a>
    </nav>
    <a className={styles.contact} href="#contact" onClick={close}>Parlons de votre projet <span aria-hidden="true">↗</span></a>
  </header>;
}
