import React from "react";
import styles from "./Header.module.scss";

const Favoryte = props => {
  const { favoriteCount } = props;
  return (
    <>
      <img
        className={styles.img}
        src="https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png"
        alt="star"
      />
      <span className={styles.numberProduct}>{favoriteCount}</span>
    </>
  );
};

export default Favoryte;
