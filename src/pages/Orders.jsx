import React from 'react'
import axios from 'axios'; 
import ProductItem from "../components/ProductItem/ProductItem"

function Orders() {
    const [orders, setOrders] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(()=>{
        (async () => {
            try {
                const { data } = await axios.get('https://618be293ded7fb0017bb92a9.mockapi.io/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
              } catch (error) {
                alert('Błąd w żądaniu zamówień');
                console.error(error);
              }
        })();
    },[]);
    return (
        <div className="content">
            <div className="header-content">
                <h1>Moje zamówienia</h1>
            </div>
            <div className="card-item">
                {(isLoading ? [...Array(10)] : orders).map((item, index) => (
                        <ProductItem
                        key={index}
                        loading = {isLoading}
                        {...item}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Orders