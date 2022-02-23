import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./ProductItem.module.scss";
import { useState } from "react";
import AppContext from "../../context";

function ProductItem({
  id,
  image,
  title,
  price,
  onClickLike,
  onClickPlus,
  favorite = false,
  added = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorite);

  const onPlus = () => {
    onClickPlus({ id, parentId: id, image, title, price });
  };

  const onClickFavorite = () => {
    onClickLike({ id, image, title, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={190}
          height={220}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="100" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="125" rx="5" ry="5" width="125" height="15" />
          <rect x="0" y="160" rx="5" ry="5" width="80" height="24" />
          <rect x="115" y="153" rx="5" ry="5" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onClickLike && (
            <div className={styles.like} onClick={onClickFavorite}>
              <img
                src={isFavorite ? "img/liked.svg" : "img/unliked.svg"}
                alt="Unliked"
              />
            </div>
          )}
          <img width={133} height={112} src={image} alt="Sneakers" />
          <h5>{title}</h5>
          <div className={styles.costBlock}>
            <div className={styles.cost}>
              <span>Cena:</span>
              <b>{price} zł.</b>
            </div>
            {onClickPlus && (
              <img
                className={styles.button}
                onClick={onPlus}
                src={
                  isItemAdded(id) ? "/img/added-btn.svg" : "/img/add-btn.svg"
                }
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
export default ProductItem;
