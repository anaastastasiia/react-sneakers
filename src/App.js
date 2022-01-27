import ProductItem from "./components/ProductItem/ProductItem";
import {Routes} from "react-router-dom"
import Header from "./components/Header";
import DrawerCart from "./components/DrawerCart";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [sneakersArray, setSneakersArray] = useState([]);
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

      {/* <Routes path="/" exact> Test</Routes> */}

      <div className="content">
        <div className="header-content">
          <h1>Wszystkie adidasy</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input
              onChange={onChangeSearchInput}
              type="text"
              placeholder="Szukaj..."
            />
          </div>
        </div>
        <div className="card-item">
          {sneakersArray
            .filter((item) =>
              item.title.toLowerCase().includes(seacrhValue.toLowerCase())
            )
            .map((item) => (
              <ProductItem
                title={item.title}
                price={item.price}
                image={item.image}
                onClickLike={(obj) => onAddToFavorite(obj)}
                onClickPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
