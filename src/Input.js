import styles from "./Input.module.css";
import { useState } from "react";
import BoxComponent from "./BoxComponent";

export default function Input() {
  const [value, setValue] = useState("");

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const colorChangeHandler = (val) => {
    setValue("");
  };

  return (
    <>
      <BoxComponent value={value} />
      <div className={styles.form}>
        <input
          value={value}
          type="text"
          placeholder="Write here..."
          name="text"
          className={styles.input}
          onChange={changeHandler}
        ></input>
        <button onClick={colorChangeHandler}> Clear</button>
      </div>
    </>
  );
}
