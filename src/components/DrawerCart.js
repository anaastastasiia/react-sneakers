import React from "react";
import axios from "axios";
import Info from "../components/ProductItem/Info";
import { useCart } from "../hooks/useCart";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function DrawerCart({ onCloseCart, onRemove, sneakersArray = [] }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const { orderId, setOrderId } = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://618be293ded7fb0017bb92a9.mockapi.io/orders",
        {
          sneakersArray: cartItems,
        }
      );

      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://618be293ded7fb0017bb92a9.mockapi.io/cart/" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Nie udało się utworzyć zamówienia :(");
    }
    setIsLoading(false);
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
                  <b>{totalPrice} zł.</b>
                </li>
                <li>
                  <span>Podatek 5%:</span>
                  <div></div>
                  <b>{(totalPrice / 100) * 5} zł.</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="green-button"
              >
                Złożyć zamówienie <img src="img/arrow.svg" alt="Arrow" />
              </button>
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
                ? `Twoje zamówienie #${orderId} zostanie wkrótce dostarczone kurierem`
                : `Dodaj cokolwiek do zamówienia ;)`
            }
          />
        )}
      </div>
    </div>
  );
}
export default DrawerCart;
