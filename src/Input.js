import styles from "./Input.module.css";
import { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("");

  const changeHandler = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div className={styles.form}>
      <input
        type="text"
        placeholder="Write here..."
        name="text"
        className={styles.input}
        onChange={changeHandler}
      ></input>
      <button> Button</button>
    </div>
  );
}
