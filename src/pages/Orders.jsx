import React from 'react'
import axios from 'axios'; 
import ProductItem from "../components/ProductItem/ProductItem"
import AppContext from '../context';

function Orders() {

    const {onAddToFavorite,onAddToCart} = React.useContext(AppContext)
    const [orders, setOrders] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(()=>{
        (async () => {
            const { data } = await axios.get('https://618be293ded7fb0017bb92a9.mockapi.io/orders');
           setOrders(data.reduce((prev,obj)=>[...prev,...obj.ProductItem],[]))
        })();
    },[]);
    return (
        <div className="content">
            <div className="header-content">
                <h1>Moje zamówienia</h1>
            </div>
            <div className="card-item">
                {orders.map((item, index) => (
                        <ProductItem
                        key={index}
                        onClickLike={(obj) => onAddToFavorite(obj)}
                        onClickPlus={(obj) => onAddToCart(obj)}
                        loading = {isLoading}
                        {...item}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Orders