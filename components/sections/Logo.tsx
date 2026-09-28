import Image from "next/image";
import styles from "./css/Logo.module.css";

export default function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  return (
    <span className={`${styles.logo} logo${size === "lg" ? ` ${styles.large} logoLg` : ""}`}>
      <Image
        src="/Benseddik-Logo.svg"
        alt="Benseddik Immobilier"
        width={2261}
        height={1235}
        priority
        className={styles.image}
      />
    </span>
  );
}
