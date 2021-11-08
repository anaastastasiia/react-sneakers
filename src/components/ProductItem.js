import React from "react";

function ProductItem() {
  return (
    <div className="card">
      <div className="like">
        <img src="img/unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
      <h5>Mięskie adidasy Nike Blazer Mid Suede</h5>
      <div className="cost-block">
        <div className="cost">
          <span>Cena:</span>
          <b>119 zł.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/btn-add.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}
export default ProductItem;
