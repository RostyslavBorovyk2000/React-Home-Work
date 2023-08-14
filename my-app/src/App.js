import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Button from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";
import Header from "./Components/Header/Header";
import IteamContainer from "./Components/Iteams/IteamContainer/IteamContainer";
import { getToLocalStoreygh, saveToLocalStoreygh } from "./utils/localStore";
import { CART_LS_KEY, FAVORITES_LS_KEY } from "./constans";

const App = () => {
  const [firstModalActive, setFirstModalActive] = useState(false);
  const [secondModalActive, setSecondModalActive] = useState(false);
  const [items, setItems] = useState([]); // Исправлено: iteam -> items
  const [cartItems, setCartItems] = useState([]);
  const [favoriteCount, setFavoriteCount] = useState(0);

  const getItems = async () => {
    const { data } = await axios.get("/index.json");
    setItems(data);
  };

  useEffect(() => {
    getItems();

    const cartItemsFromLs = getToLocalStoreygh(CART_LS_KEY);
    if (cartItemsFromLs) {
      setCartItems(cartItemsFromLs);
    }

    const favoriteItems = getToLocalStoreygh(FAVORITES_LS_KEY);
    if (favoriteItems) {
      setItems(favoriteItems);
      setFavoriteCount(favoriteItems.filter(item => item.favorite).length);
    }
  }, []);

  const handleFavoriteToggle = itemId => {
    const updatedItems = items.map(item => {
      if (item.id === itemId) {
        saveToLocalStoreygh(FAVORITES_LS_KEY, {
          ...item,
          favorite: !item.favorite,
        });
        return { ...item, favorite: !item.favorite };
      }
      return item;
    });

    saveToLocalStoreygh(FAVORITES_LS_KEY, updatedItems);
    setItems(updatedItems);
    setFavoriteCount(updatedItems.filter(item => item.favorite).length);
  };

  const handleAddToCart = itemId => {
    const itemToAdd = items.find(item => item.id === itemId);
    if (itemToAdd) {
      const updatedCartItems = [...cartItems, itemToAdd];
      setCartItems(updatedCartItems);
      saveToLocalStoreygh(CART_LS_KEY, updatedCartItems);
    }
  };
  const openFirstModal = () => {
    setFirstModalActive(true);
  };

  const closeFirstModal = () => {
    setFirstModalActive(false);
  };

  const openSecondModal = () => {
    setSecondModalActive(true);
  };

  const closeSecondModal = () => {
    setSecondModalActive(false);
  };

  const handleFirstModalConfirm = () => {
    closeFirstModal();
  };

  const handleSecondModalConfirm = () => {
    closeSecondModal();
  };

  const handleModalCancel = () => {
    closeFirstModal();
    closeSecondModal();
  };

  return (
    <div className="App">
      <Header favoriteCount={favoriteCount} cartItemCount={cartItems.length} />
      <IteamContainer
        iteams={items}
        onFavoriteToggle={handleFavoriteToggle}
        onAddToCart={handleAddToCart}
      />
      <div className="wrapperBtn">
        <Button onClick={openFirstModal} text="Open first modal" />
        <Button
          onClick={openSecondModal}
          backgroundColor="red"
          text="Open second modal"
        />
      </div>
      {firstModalActive && (
        <Modal
          header="Attention!"
          closeButton
          text="Once you delete this file, it won't be possible to undo this action. Are you sure you want to delete it?"
          onCancel={handleModalCancel}
          onConfirm={handleFirstModalConfirm}
        />
      )}
      {secondModalActive && (
        <Modal
          header="Attention!"
          closeButton
          text="You are about to delete this file. This action cannot be undone, and the file will be permanently lost. Are you sure you want to proceed?"
          onCancel={handleModalCancel}
          onConfirm={handleSecondModalConfirm}
        />
      )}
    </div>
  );
};

export default App;
