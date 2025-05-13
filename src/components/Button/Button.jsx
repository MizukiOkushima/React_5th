import styles from "./Button.module.css";

function Button(props) {
  const { type, disabled, children, onClick } = props;
  //   const handleClick = () => {
  //     alert("ボタンがクリックされました");
  //   };

  return (
    // <button type={type} onClick={handleClick}>
    //   <i>icon</i>
    //   <span>クリック</span>
    // </button>
    <button className={styles.button} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
