import React, { useEffect, useState } from "react";
import styles from "./Pages.module.scss";
import { CART_LS_KEY } from "../../constans";
import {
  getToLocalStoreygh,
  saveToLocalStoreygh,
} from "../../utils/localStore";
import Iteam from "../Iteams/IteamContainer/Iteam";
import Modal from "../Modal/Modal";

const BaskedPages = ({ onAddToCart, setCartItems }) => {
  const [baskedItems, setBaskedItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDeleteItemClick = itemId => {
    setSelectedItemId(itemId);
    setShowModal(true);
  };

  const btnStyle = {
    backgroundColor: " red",
    color: " #ffffff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: " pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  };

  useEffect(() => {
    const cartItemsFromLs = getToLocalStoreygh(CART_LS_KEY);
    if (cartItemsFromLs) {
      setBaskedItems(cartItemsFromLs);
    }
  }, []);

  const handleModalConfirm = () => {
    const updatedItems = baskedItems.filter(item => item.id !== selectedItemId);
    setBaskedItems(updatedItems);
    setShowModal(false);
    saveToLocalStoreygh(CART_LS_KEY, updatedItems);
    setCartItems(updatedItems);
  };
  const handleModalCancel = () => {
    setSelectedItemId(null);
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.wrapperBasked}>
        {baskedItems.map(item => (
          <Iteam
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            url={item.url}
            color={item.color}
            onAddToCart={onAddToCart}
            btn={
              <button
                style={btnStyle}
                onClick={() => {
                  handleDeleteItemClick(item.id);
                }}>
                Delete
              </button>
            }
          />
        ))}
      </div>
      {showModal && (
        <Modal
          closeButton
          header="Delete Cart"
          text="Do you want to delete this card?"
          onCancel={handleModalCancel}
          onConfirm={handleModalConfirm}
        />
      )}
    </>
  );
};

export default BaskedPages;
