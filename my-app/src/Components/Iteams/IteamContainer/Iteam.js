import React, { useState } from "react";
import styles from "./Iteam.module.scss";
import Modal from "../../Modal/Modal";
import PropTypes from "prop-types";

const Iteam = props => {
  const {
    id,
    name,
    price,
    url,
    color,
    favorite,
    onFavoriteToggle,
    onAddToCart,
  } = props;

  const itemStyle = {
    margin: "0 auto",
    backgroundColor: color,
    width: "25px",
    height: "25px",
    borderRadius: "100px",
    border: "2px solid #000",
  };

  const [currentSvgColor, setCurrentSvgColor] = useState(
    favorite ? "rgb(243, 208, 8)" : "#000"
  );

  const handleSvgClick = () => {
    const newColor = currentSvgColor === "#000" ? "rgb(243, 208, 8)" : "#000";
    setCurrentSvgColor(newColor);
    onFavoriteToggle(id);
  };

  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const openModal = () => {
    setIsAddingToCart(true);
  };

  const closeModal = () => {
    setIsAddingToCart(false);
  };

  const handleAddToCartClick = () => {
    onAddToCart(id);
    closeModal();
  };
  return (
    <section className={styles.iteam}>
      <svg
        className={styles.star}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        onClick={handleSvgClick}
        style={{ fill: currentSvgColor }}>
        <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
      </svg>
      <img className={styles.img} src={url} alt="img" />
      <div className={styles.colorSpan} style={itemStyle}></div>
      <h2 className={styles.name}>{name}</h2>
      <h3 className={styles.price}>{price} грн/кг</h3>
      <button className={styles.btn} onClick={openModal}>
        Add to Cart
      </button>

      {isAddingToCart && (
        <Modal
          closeButton
          header="Add to Cart"
          text="Do you want to add this item to your cart?"
          onCancel={closeModal}
          onConfirm={handleAddToCartClick}
        />
      )}
    </section>
  );
};

Iteam.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Iteam;
