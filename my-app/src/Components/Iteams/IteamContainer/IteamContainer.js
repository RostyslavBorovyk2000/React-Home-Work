import React from "react";
import styles from "./Iteam.module.scss";
import Iteam from "./Iteam";

const IteamContainer = props => {
  const { iteams, onFavoriteToggle, onAddToCart, favoriteCount, cartItems } =
    props;

  return (
    <div className={styles.container}>
      {iteams.map(iteam => (
        <Iteam
          key={iteam.id}
          id={iteam.id}
          name={iteam.name}
          price={iteam.price}
          url={iteam.url}
          color={iteam.color}
          favorite={iteam.favorite}
          onFavoriteToggle={onFavoriteToggle}
          onAddToCart={onAddToCart}
          favoriteCount={favoriteCount}
          cartItems={cartItems}
        />
      ))}
    </div>
  );
};

export default IteamContainer;
