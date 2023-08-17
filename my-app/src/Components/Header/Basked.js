import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
const Basked = props => {
  const { cartItemCount } = props;
  return (
    <>
      <Link to="/basked">
        <img
          className={styles.img}
          src="https://cdn-icons-png.flaticon.com/512/4279/4279648.png"
          alt="cart"
        />
        <span className={styles.numberProduct}>{cartItemCount}</span>
      </Link>
    </>
  );
};

export default Basked;
