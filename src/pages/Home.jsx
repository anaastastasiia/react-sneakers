import ProductItem from "../components/ProductItem/ProductItem"

function Home({ sneakersArray, seacrhValue, onAddToFavorite, onAddToCart, onChangeSearchInput }) {
    return (
        <div className="content">
            <div className="header-content">
                <h1>Wszystkie adidasy</h1>
                <div className="search-block">
                    <img src="/img/search.svg" alt="Search" />
                    <input
                        onChange={onChangeSearchInput}
                        type="text"
                        placeholder="Szukaj..."
                    />
                </div>
            </div>
            <div className="card-item">
                {sneakersArray
                    .filter((item) =>
                        item.title.toLowerCase().includes(seacrhValue.toLowerCase())
                    )
                    .map((item, index) => (
                        <ProductItem
                            key={index}
                            onClickLike={(obj) => onAddToFavorite(obj)}
                            onClickPlus={(obj) => onAddToCart(obj)}
                            {...item}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Home