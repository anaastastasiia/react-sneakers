import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="header">
      <Link to="/">
        <div className="logo-block">
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3>Sneakers</h3>
            <p>Sklep najlepszych adidasów</p>
          </div>
        </div>
      </Link>
      <ul className="user-block">
        <li onClick={props.onClickCart} className="user-item">
          <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
          <span>{totalPrice} zł.</span>
        </li>
        <li className="user-item">
          <Link to="/favorites">
            <img width={18} height={18} src="/img/favorite.svg" alt="Like" />
          </Link>
        </li>
        <li className="user-item">
          <Link to="/orders">
            <img width={18} height={18} src="/img/user.svg" alt="User" />
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
