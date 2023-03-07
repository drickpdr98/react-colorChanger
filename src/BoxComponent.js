import styles from "./BoxComponent.module.css";

export default function BoxComponent({ value }) {
  return (
    <div className={styles.box}>
      <div className={styles.card} style={{ backgroundColor: value }}></div>
    </div>
  );
}
