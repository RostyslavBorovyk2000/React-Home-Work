import React from "react";
import styles from "./Header.module.scss";
import Basked from "./Basked";
import Favoryte from "./Favoryte";

const Header = props => {
  const { favoriteCount, cartItemCount } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <Favoryte favoriteCount={favoriteCount} />
      </div>
      <div className={styles.imgWrapper}>
        <Basked cartItemCount={cartItemCount} />
      </div>
    </div>
  );
};

export default Header;
