import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import DrawerCart from "./components/DrawerCart";
import AppContext from "./context";

import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import AllProducts from "./pages/AllProducts";

import LoginForm from "./components/LoginForm";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [seacrhValue, setSeacrhValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const admin = {
    email: "admin@gmail.com",
    password: "admin1234",
  };

  const [user, setUser] = useState({ name: "", email: "" });

  const Login = (details) => {
    console.log(details);

    if (details.email == admin.email && details.password == admin.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      alert("Złe dane");
      console.log("Złe dane");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] =
          await Promise.all([
            axios.get("https://618be293ded7fb0017bb92a9.mockapi.io/cart"),
            axios.get("https://618be293ded7fb0017bb92a9.mockapi.io/favorites"),
            axios.get("https://618be293ded7fb0017bb92a9.mockapi.io/items"),
          ]);

        setIsLoading(false);

        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Błąd żądania danych :(");
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://618be293ded7fb0017bb92a9.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://618be293ded7fb0017bb92a9.mockapi.io/cart",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Błąd podczas dodawania towaru do koszyka");
      console.error(error);
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://618be293ded7fb0017bb92a9.mockapi.io/cart/${id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
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
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems,
      }}
    >
      {user.email != "" ? (
        <div className="wrapper ">
          {cartOpened && (
            <DrawerCart
              items={cartItems}
              onClose={() => setCartOpened(false)}
              onRemove={onRemoveItem}
            />
          )}
          <Header
            onClickCart={() => setCartOpened(true)}
            onChangeSearchInput={() => onChangeSearchInput()}
          />

          <Routes path="/" exact>
            <Route
              path="/"
              exact
              element={
                <AllProducts
                  items={items}
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
              path="allProducts"
              exact
              element={
                <AllProducts
                  items={items}
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
            <Route path="/logout" export element={<LoginForm />} />
          </Routes>
        </div>
      ) : (
        <LoginForm Login={Login} />
      )}
    </AppContext.Provider>
  );
}

export default App;
