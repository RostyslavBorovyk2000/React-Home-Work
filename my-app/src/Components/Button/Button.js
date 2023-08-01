import styles from "./Button.module.scss";

const Button = ({ text, backgroundColor, onClick }) => {
  return (
    <button
      className={styles.button}
      style={{ backgroundColor }}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
