function Home() {
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
                    .map((item) => (
                        <ProductItem
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            onClickLike={(obj) => onAddToFavorite(obj)}
                            onClickPlus={(obj) => onAddToCart(obj)}
                        />
                    ))}
            </div>
        </div>
    )
}