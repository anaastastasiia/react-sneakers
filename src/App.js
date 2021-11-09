import ProductItem from "./components/ProductItem/ProductItem";
import Header from "./components/Header";
import DrawerCart from "./components/DrawerCart";

const sneakersArray = [
  {
    title: "Mięskie Nike Blazer Mid Suede",
    price: 119,
    image: "/img/sneakers/1.jpg",
  },
  {
    title: "Mięskie Nike Air Max 270",
    price: 219,
    image: "/img/sneakers/2.jpg",
  },
  {
    title: "Puma X Aka Boku Future Rider",
    price: 259,
    image: "/img/sneakers/3.jpg",
  },
  { title: "Under Armour Curry 8", price: 369, image: "/img/sneakers/4.jpg" },
];

function App() {
  return (
    <div className="wrapper ">
      <DrawerCart />
      <Header />
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
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
