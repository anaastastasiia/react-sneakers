import React from 'react'
import ProductItem from "../components/ProductItem/ProductItem"

function Home({ items, seacrhValue, onAddToFavorite, onAddToCart, onChangeSearchInput,isLoading }) {
    const renderItems = () => {
        const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(seacrhValue.toLowerCase())
    )
        return (isLoading ? [...Array(10)] : filteredItems).map((item, index) => (
            <ProductItem
                key={index}
                onClickLike={(obj) => onAddToFavorite(obj)}
                onClickPlus={(obj) => onAddToCart(obj)}
                loading = {isLoading}
                {...item}
            />
        ))
    }

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
                {renderItems()}
            </div>
        </div>
    )
}

export default Home