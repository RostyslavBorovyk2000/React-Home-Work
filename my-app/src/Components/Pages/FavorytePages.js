import { FAVORITES_LS_KEY } from "../../constans";
import { getToLocalStoreygh } from "../../utils/localStore";
import { useEffect, useState } from "react";
import IteamContainer from "../Iteams/IteamContainer/IteamContainer";
import styles from "./Pages.module.scss";

const FavorytePages = ({ onFavoriteToggle }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const storedFavorites = getToLocalStoreygh(FAVORITES_LS_KEY);
    if (storedFavorites) {
      setFavoriteItems(storedFavorites);
    }
  }, []);

  const filteredItems = favoriteItems.filter(item => item.favorite);

  return (
    <div className={styles.wrapperFavoryte}>
      {filteredItems.map(item => (
        <IteamContainer
          key={item.id}
          iteams={[item]}
          onFavoriteToggle={onFavoriteToggle}
        />
      ))}
    </div>
  );
};

export default FavorytePages;
