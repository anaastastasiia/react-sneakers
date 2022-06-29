import React from 'react'
import ProductItem from "../components/ProductItem/ProductItem"
import AppContext from '../context';

function Favorites() {
    const {favorites, onAddToFavorite} = React.useContext(AppContext);

    return (
        <div className="content">
            <div className="header-content">
                <h1>Favorites</h1>
            </div>
            <div className="card-item">
                {favorites
                    .map((item, index) => (
                        <ProductItem
                            key={index}
                            favorite={true}
                            onClickLike={onAddToFavorite}
                            {...item}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Favorites