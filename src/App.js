import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// import ProductItem from "./components/ProductItem/ProductItem";
import Header from "./components/Header";
import DrawerCart from "./components/DrawerCart";
import AppContext from "./context";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [sneakersArray, setSneakersArray] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [seacrhValue, setSeacrhValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://618be293ded7fb0017bb92a9.mockapi.io/cart"
      );
      const favoritesResponse = await axios.get(
        "https://618be293ded7fb0017bb92a9.mockapi.io/favorites"
      );
      const itemsResponse = await axios.get(
        "https://618be293ded7fb0017bb92a9.mockapi.io/items"
      );

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setSneakersArray(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        "https://618be293ded7fb0017bb92a9.mockapi.io/cart/${obj.id}"
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      ); //tu już jest inny item
    } else {
      axios.post("https://618be293ded7fb0017bb92a9.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://618be293ded7fb0017bb92a9.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://618be293ded7fb0017bb92a9.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          `https://618be293ded7fb0017bb92a9.mockapi.io/favorites`,
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Nie udało się dodać do ulubionych");
    }
  };

  const onChangeSearchInput = (event) => {
    setSeacrhValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{ sneakersArray, cartItems, favorites, isItemAdded }}
    >
      <div className="wrapper ">
        {cartOpened && (
          <DrawerCart
            sneakersArray={cartItems}
            onCloseCart={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />

        <Routes path="/" exact>
          <Route
            path="/"
            exact
            element={
              <Home
                sneakersArray={sneakersArray}
                cartItems={cartItems}
                seacrhValue={seacrhValue}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                onChangeSearchInput={onChangeSearchInput}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/favorites"
            exact
            element={
              <Favorites
                sneakersArray={favorites}
                onAddToFavorite={onAddToFavorite}
              />
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
