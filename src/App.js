function App() {
  return (
    <div className="wrapper ">
      <div className="drawer-overlay">
        <div className="drawer">
          <h2>Koszyk</h2>

          <div className="drawer-items clear">
            <div className="cart-item">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cart-item-img"
              ></div>
              <div className="cart-description">
                <p>Mięskie adidasy Nike Blazer Mid Suede</p>
                <b>119 zł.</b>
              </div>
              <img
                className="remove-btn"
                src="img/remove-active.svg"
                alt="Remove"
              />
            </div>
            <ul className="cart-total-block">
              <li>
                <span>Razem:</span>
                <div></div>
                <b>119 zł.</b>
              </li>
              <li>
                <span>Podatek 5%:</span>
                <div></div>
                <b>6 zł.</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="logo-block">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3>Sneakers</h3>
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
      <div className="content">
        <div className="header-content">
          <h1>Wszystkie adidasy</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input tye="text" placeholder="Szukaj..." />
          </div>
        </div>

        <div className="card">
          <div className="like">
            <img src="img/unliked.svg" alt="Unliked" />
          </div>
          <img
            width={133}
            height={112}
            src="/img/sneakers/1.jpg"
            alt="Sneakers"
          />
          <h5>Mięskie adidasy Nike Blazer Mid Suede</h5>
          <div className="cost-block">
            <div className="cost">
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
