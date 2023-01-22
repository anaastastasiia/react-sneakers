import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useState } from "react";
// import Dropdown from "react-dropdown";
// import { CiLogout } from "react-icons/ci";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import DropdownMenu from "react-bootstrap-dropdown/lib/DropdownMenu";
// import DropdownItem from "react-bootstrap/esm/DropdownItem";

function Header(props) {
  const { totalPrice } = useCart();
  // const options = ["one", "two"];
  const [user, setUser] = useState({ name: "", email: "admin@gmail.com" });
  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <header className="header">
      <Link to="/allProducts">
        <div className="logo-block">
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3>Sneakers</h3>
            <p>Sklep najlepszych adidasów</p>
          </div>
        </div>
      </Link>
      <ul className="user-block">
        <li className="user-item">
          <Link to="/allProducts">
            <span>Our products</span>
          </Link>
        </li>
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
        <li className="user-item">
          <Link className="log-button" to="/logout">
            {/* <img width={18} height={18} src="/img/user.svg" alt="User" /> */}
            <span> Logout </span>
          </Link>
        </li>
        {/* <ul className="menu-block">
        <li className="menu-item">
          <Link to="/allProducts">
            <span>Our products</span>
          </Link>
        </li>
        <li className="header-search-container menu-item">
          <div className="header-search-block">
            <img src="/img/search.svg" alt="Search" />
            <input
              onChange={props.onChangeSearchInput}
              type="text"
              placeholder="Szukaj..."
            />
          </div>
        </li>
        <li className="menu-item">
          <li className="user-item">
            <Link to="/orders">
              <Dropdown
                options={options}
                placeholder={
                  <img width={18} height={18} src="/img/user.svg" alt="User" />
                }
              ></Dropdown>

              <li onClick={props.onClickCart} className="user-item">
                <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
                <span>{totalPrice} zł.</span>
              </li>

              <li className="user-item">
                <Link to="/favorites">
                  <img
                    width={18}
                    height={18}
                    src="/img/favorite.svg"
                    alt="Like"
                  />
                </Link>
              </li>
            </Link> */}
      </ul>
    </header>
  );
}
export default Header;
