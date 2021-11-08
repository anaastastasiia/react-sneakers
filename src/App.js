import ProductItem from "./components/ProductItem";
import Header from "./components/Header";
import DrawerCart from "./components/DrawerCart";

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
          <ProductItem />
        </div>
      </div>
    </div>
  );
}

export default App;
