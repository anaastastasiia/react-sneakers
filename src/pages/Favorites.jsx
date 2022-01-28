import ProductItem from "../components/ProductItem/ProductItem"

function Favorites({ sneakersArray }) {
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
                            title={item.title}
                            price={item.price}
                            image={item.image} favorite={true}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Favorites