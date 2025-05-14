import styles from "./Button.module.css";
import { useState } from "react";

function Button(props) {

  const [count, setCount] = useState(0);
  // const { type, disabled, children } = props;
  const { type, disabled } = props;

  //   const handleClick = () => {
  //     alert("ボタンがクリックされました");
  //   };

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    // <button type={type} onClick={handleClick}>
    //   <i>icon</i>
    //   <span>クリック</span>
    // </button>
    // <button className={styles.button} type={type} disabled={disabled} onClick={handleClick}>
    //   {children}
    // </button>
    <button className={styles.button} type={type} disabled={disabled} onClick={handleClick}>
      カウント：{count}
    </button>
  );
}

export default Button;
