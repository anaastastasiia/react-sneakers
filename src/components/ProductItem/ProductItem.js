import React from "react";
import styles from "./ProductItem.module.scss";
import { useState } from "react";

function ProductItem({id, image, title, price, onClickLike, onClickPlus, favorite = false }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorite);

  const onPlus = () => {
    onClickPlus({ image, title, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = ()=> {
    onClickLike({id, image, title, price });
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.card}>
      <div className={styles.like} onClick={onClickFavorite}>
        <img src={isFavorite ? 'img/liked.svg' : 'img/unliked.svg'} alt="Unliked" />
      </div>
      <img width={133} height={112} src={image} alt="Sneakers" />
      <h5>{title}</h5>
      <div className={styles.costBlock}>
        <div className={styles.cost}>
          <span>Cena:</span>
          <b>{price} zł.</b>
        </div>
        <img
          className={styles.button}
          onClick={onPlus}
          src={isAdded ? "/img/added-btn.svg" : "/img/add-btn.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}
export default ProductItem;
