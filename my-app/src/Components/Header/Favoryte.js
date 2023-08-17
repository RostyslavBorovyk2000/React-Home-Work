import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
const Favoryte = props => {
  const { favoriteCount } = props;
  return (
    <>
      <Link to="/favoryte">
        <img
          className={styles.img}
          src="https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png"
          alt="star"
        />
        <span className={styles.numberProduct}>{favoriteCount}</span>
      </Link>
    </>
  );
};

export default Favoryte;
