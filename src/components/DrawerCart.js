import React from "react";

function DrawerCart({ onCloseCart, sneakersArray = [] }) {
  return (
    <div className="drawer-overlay">
      <div className="drawer">
        <h2>
          Koszyk{" "}
          <img
            onClick={onCloseCart}
            className="remove-btn"
            src="img/remove-active.svg"
            alt="Close"
          />
        </h2>

        <div className="drawer-items clear">
          {sneakersArray.map((obj) => (
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
          ))}

          <div className="cart-total-block">
            <ul>
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
              <li>
                <button className="green-button">
                  Złożyć zamówienie <img src="/img/arrow.svg" alt="Arrow" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DrawerCart;
