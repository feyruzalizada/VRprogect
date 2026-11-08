import styles from "./AdaptiveCalc.module.css";

export default function AdaptiveCalc({ label = "VR adaptiv hesablama" }: { label?: string }) {
  return (
    <section
      id="kalkulyator"
      className={styles.section}
      aria-label={label}
    />
  );
}
