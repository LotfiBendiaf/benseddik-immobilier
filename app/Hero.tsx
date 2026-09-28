"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Navigation from "./Navigation";
import styles from "./Hero.module.css";

const slides = [
  { image: "/pyramide-img4.jpg", alt: "Villa contemporaine aux lignes épurées avec piscine", title: "L’art de vivre,", accent: "à la bonne adresse.", caption: "Lignes contemporaines", category: "Architecture & caractère" },
  { image: "/pyramide-img6.jpg", alt: "Façade architecturale et larges baies vitrées", title: "Des lieux singuliers,", accent: "des vies à imaginer.", caption: "Une autre perspective", category: "Espaces & lumière" },
  { image: "/pyramide-img5.jpg", alt: "Maison contemporaine éclairée à la tombée du jour", title: "Votre prochain chapitre", accent: "commence ici.", caption: "L’élégance au quotidien", category: "Adresses & art de vivre" },
];
export default function Hero() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const touchStart = useRef<number | null>(null);
  const select = (index: number) => { setActive((index + slides.length) % slides.length); setPlaying(false); };

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!playing || hovered || preference.matches) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [playing, hovered]);

  return (
    <section className={styles.hero} id="home" aria-label="Benseddik Immobilier">
      <Navigation />
      <div className={styles.stage} role="region" aria-roledescription="carrousel" aria-label="Notre vision de l’immobilier" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setPlaying(false)} onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); select(active + (event.key === "ArrowRight" ? 1 : -1)); } }} onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => { if (touchStart.current !== null) { const delta = touchStart.current - event.changedTouches[0].clientX; if (Math.abs(delta) > 50) select(active + (delta > 0 ? 1 : -1)); touchStart.current = null; } }}>
        {slides.map((slide, index) => <div key={index} className={`${styles.slide} ${index === active ? styles.active : ""}`} aria-hidden={index !== active}><Image src={slide.image} alt={slide.alt} fill sizes="100vw" preload={index === 0} className={styles.image} style={{ objectPosition: index === 2 ? "center 70%" : "center" }} /></div>)}
        <div className={styles.overlay} />
        <div className={styles.content}>
          <p className={styles.eyebrow}><span /> BENSEDDIK IMMOBILIER · ORAN</p>
          <div aria-live={playing ? "off" : "polite"} aria-atomic="true"><h1 key={active} className={styles.title}>{slides[active].title}<br /><em>{slides[active].accent}</em></h1></div>
          <p className={styles.description}>Des lieux de caractère. Une expertise locale.<br />Un accompagnement à la hauteur de vos exigences.</p>
          <a href="#listings" className={styles.discover}>Explorer nos biens <span aria-hidden="true">↗</span></a>
        </div>
        <div className={styles.approvalBadge}>
          <span className={styles.approvalIcon} aria-hidden="true">✓</span>
          <span>Agence immobilière</span>
          <strong>Agréée par l’État</strong>
        </div>
        <div className={styles.bottom}>
          <div className={styles.caption}><span>{slides[active].category}</span><p>{slides[active].caption}</p></div>
          <div className={styles.controls}>
            <button className={styles.pause} onClick={() => setPlaying(!playing)} aria-label={playing ? "Suspendre le défilement" : "Activer le défilement"}>{playing ? "Ⅱ" : "▷"}</button>
            <div className={styles.pagination}>{slides.map((slide, index) => <button key={slide.title} aria-label={`Afficher la diapositive ${index + 1}`} aria-current={active === index ? "true" : undefined} onClick={() => select(index)}><span>0{index + 1}</span><i /></button>)}</div>
            <div className={styles.arrows}><button aria-label="Diapositive précédente" onClick={() => select(active - 1)}>←</button><button aria-label="Diapositive suivante" onClick={() => select(active + 1)}>→</button></div>
          </div>
        </div>
      </div>
      <div className={styles.signature}><span>UNE ADRESSE. UNE HISTOIRE. LA VÔTRE.</span><p>L’immobilier pensé <em>autrement.</em></p><a href="#about">Découvrir l’agence <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
