import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import DrawerCart from "./components/DrawerCart";
import AppContext from "./context";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

function App() {
  const [sneakersArray, setSneakersArray] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [seacrhValue, setSeacrhValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] =
          await Promise.all([
            axios.get("https://618be293ded7fb0017bb92a9.mockapi.io/cart"),
            axios.get("https://618be293ded7fb0017bb92a9.mockapi.io/favorites"),
            axios.get("https://618be293ded7fb0017bb92a9.mockapi.io/items"),
          ]);
        // const cartResponse = await axios.get(
        //   "https://618be293ded7fb0017bb92a9.mockapi.io/cart"
        // );
        // const favoritesResponse = await axios.get(
        //   "https://618be293ded7fb0017bb92a9.mockapi.io/favorites"
        // );
        // const itemsResponse = await axios.get(
        //   "https://618be293ded7fb0017bb92a9.mockapi.io/items"
        // );

        setIsLoading(false);

        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setSneakersArray(itemsResponse.data);
      } catch (error) {
        alert("Błąd żądania danych :(");
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        await axios.delete(
          "https://618be293ded7fb0017bb92a9.mockapi.io/cart/${obj.id}"
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        ); //tu już jest inny item
      } else {
        await axios.post(
          "https://618be293ded7fb0017bb92a9.mockapi.io/cart",
          obj
        );
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert("Błąd podczas dodawania towaru do koszyka");
      console.error(error);
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://618be293ded7fb0017bb92a9.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert("Błąd podczas usuwania towaru z koszyka");
      console.error(error);
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://618be293ded7fb0017bb92a9.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          `https://618be293ded7fb0017bb92a9.mockapi.io/favorites`,
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Nie udało się dodać do ulubionych");
      console.error(error);
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
      value={{
        sneakersArray,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems,
      }}
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
          <Route path="/favorites" exact element={<Favorites />} />
          <Route path="/orders" exact element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
