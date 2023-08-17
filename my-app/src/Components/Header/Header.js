import React from "react";
import styles from "./Header.module.scss";
import Basked from "./Basked";
import Favoryte from "./Favoryte";
import { Link } from "react-router-dom";
const Header = props => {
  const { favoriteCount, cartItemCount } = props;
  return (
    <div className={styles.wrapper}>
      <Link to="/products">
        <h1 className={styles.product}>Products</h1>
      </Link>
      <div className={styles.imgWrapper}>
        <Link to="/favoryte">
          <Favoryte favoriteCount={favoriteCount} />
        </Link>
      </div>

      <div className={styles.imgWrapper}>
        <Link to="/basked">
          <Basked cartItemCount={cartItemCount} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
