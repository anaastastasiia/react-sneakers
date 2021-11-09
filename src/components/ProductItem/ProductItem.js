import React from "react";
import styles from "./ProductItem.module.scss";

function ProductItem(props) {
  const onClickButton = () => {
    alert(props.title);
  };
  return (
    <div className={styles.card}>
      <div className={styles.like}>
        <img src="img/unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.image} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className={styles.costBlock}>
        <div className={styles.cost}>
          <span>Cena:</span>
          <b>{props.price} zł.</b>
        </div>
        <button className={styles.button} onClick={props.onClick}>
          <img width={11} height={11} src="/img/btn-add.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}
export default ProductItem;
