import ProductItem from "../components/ProductItem/ProductItem"

function Favorites({ sneakersArray, onAddToFavorite }) {
    return (
        <div className="content">
            <div className="header-content">
                <h1>Favorites</h1>
            </div>
            <div className="card-item">
                {sneakersArray
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