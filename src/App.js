import {Routes, Route} from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

import ProductItem from "./components/ProductItem/ProductItem";
import Header from "./components/Header";
import DrawerCart from "./components/DrawerCart"

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [sneakersArray , setSneakersArray] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [seacrhValue, setSeacrhValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios
      .get("https://618be293ded7fb0017bb92a9.mockapi.io/items")
      .then((res) => {
        setSneakersArray(res.data);
      });
    axios
      .get("https://618be293ded7fb0017bb92a9.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
      axios
      .get("https://618be293ded7fb0017bb92a9.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://618be293ded7fb0017bb92a9.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://618be293ded7fb0017bb92a9.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    axios.post("https://618be293ded7fb0017bb92a9.mockapi.io/favorites", obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSeacrhValue(event.target.value);
  };
  return (
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
       <Route path="/" exact element={
       <Home sneakersArray={sneakersArray} seacrhValue={seacrhValue} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart} onChangeSearchInput={onChangeSearchInput}/>}/>  
       <Route path="/favorites" exact element={
         <Favorites sneakersArray={favorites}/>
       }/>
      </Routes>

      
    </div>
  );
}

export default App;
