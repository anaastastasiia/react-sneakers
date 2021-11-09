import React from "react";
import styles from "./ProductItem.module.scss";
import { useState } from "react";

function ProductItem(props) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.like} onClick={props.onClickLike}>
        <img src="img/unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.image} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className={styles.costBlock}>
        <div className={styles.cost}>
          <span>Cena:</span>
          <b>{props.price} zł.</b>
        </div>
        <img
          className={styles.button}
          onClick={onClickPlus}
          src={isAdded ? "/img/added-btn.svg" : "/img/add-btn.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}
export default ProductItem;
