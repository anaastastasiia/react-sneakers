import ProductItem from "./components/ProductItem/ProductItem";
import Header from "./components/Header";
import DrawerCart from "./components/DrawerCart";
import { useEffect, useState } from "react";

function App() {
  const [sneakersArray, setSneakersArray] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch("https://618be293ded7fb0017bb92a9.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setSneakersArray(json);
      });
  }, []);

  return (
    <div className="wrapper ">
      {cartOpened && <DrawerCart onCloseCart={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="header-content">
          <h1>Wszystkie adidasy</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input tye="text" placeholder="Szukaj..." />
          </div>
        </div>
        <div className="card-item">
          {sneakersArray.map((obj) => (
            <ProductItem
              title={obj.title}
              price={obj.price}
              image={obj.image}
              onClickLike={() => console.log("Like")}
              onClickPlus={() => console.log("Plus")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
