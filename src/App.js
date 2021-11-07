function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="logo-block">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3>React Sneakers</h3>
            <p>Sklep najlepszych adidasów</p>
          </div>
        </div>
        <ul className="user-block">
          <li className="user-item">
            <img width={18} height={18} src="/img/cart.svg" />
            <span>1305 zł.</span>
          </li>
          <li className="user-item">
            <img width={18} height={18} src="/img/favorite.svg" />
          </li>
          <li className="user-item">
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Wszystkie adidasy</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Szukaj..." />
          </div>
        </div>

        <div className="card">
          <img
            width={133}
            height={112}
            src="/img/sneakers/1.jpg"
            alt="Sneakers"
          />
          <h5>Mięskie adidasy Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Cena:</span>
              <b>119 zł.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/btn-add.svg" alt="Plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
