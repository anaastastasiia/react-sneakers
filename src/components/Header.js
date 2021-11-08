import React from "react";

function Header() {
  return (
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
  );
}
export default Header;
