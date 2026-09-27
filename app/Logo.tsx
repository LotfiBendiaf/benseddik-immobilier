export default function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  return (
    <span className={`logo${size === "lg" ? " logoLg" : ""}`}>
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M4 37V17C4 8.7 11.2 2 20 2s16 6.7 16 15v20H4Z" fill="currentColor" />
      </svg>
      <span className="logoText">
        <strong>BENSEDDIK</strong>
        <small>IMMOBILIER</small>
      </span>
    </span>
  );
}
