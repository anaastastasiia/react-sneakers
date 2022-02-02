import React from "react";
import Info from "../components/ProductItem/Info";
import AppContext from "../context";

function DrawerCart({ onCloseCart, onRemove, sneakersArray = [] }) {
  const { setCartItems } = React.useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);

  const onClickOrder = () => {
    setIsOrderComplete(true);
    setCartItems([]);
  };

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

        {sneakersArray.length > 0 ? (
          <div className="drawer-content">
            <div className="drawer-items clear">
              {sneakersArray.map((obj) => (
                <div key={obj.id} className="cart-item">
                  <div>
                    <img
                      className="cart-item-img"
                      src={obj.image}
                      alt="Sneaker"
                    />
                  </div>
                  <div className="cart-description">
                    <p>{obj.title}</p>
                    <b>{obj.price} zł.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="remove-btn"
                    src="img/remove-active.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cart-total-block">
              <ul>
                <li>
                  <span>Razem:</span>
                  <div></div>
                  <b>0 zł.</b>
                </li>
                <li>
                  <span>Podatek 5%:</span>
                  <div></div>
                  <b>0 zł.</b>
                </li>
                <li>
                  <button onCLick={onClickOrder} className="green-button">
                    Złożyć zamówienie <img src="/img/arrow.svg" alt="Arrow" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Info
            image={
              isOrderComplete ? "/img/completeCart.png" : "/img/empty-cart.png"
            }
            title={
              isOrderComplete
                ? "Zamowinie zostało złożone"
                : "Koszyk jest pusty"
            }
            description={
              isOrderComplete
                ? "Twoje zamówienie #56 zostanie wkrótce dostarczone kurierem"
                : "Dodaj cokolwiek do zamówienia ;)"
            }
          />
        )}
      </div>
    </div>
  );
}
export default DrawerCart;
