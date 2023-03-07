import styles from "./BoxComponent.module.css";

export default function BoxComponent() {
  return (
    <div className={styles.box}>
      <div
        className={styles.card}
        style={{ backgroundColor: "lightcoral" }}
      ></div>
    </div>
  );
}
