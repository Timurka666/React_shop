import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Basket from "./Basket";
import BasketList from "./BasketList";

export default function Content() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }
    };

    const removeFromBasket = (itemId) => {
        const newOrder = order.filter(el => el.id !== itemId);
        setOrder(newOrder);
    };

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };

    const incQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity + 1;
                return {...el, quantity: newQuantity};
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };
    const decQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity - 1;
                return {...el, quantity: newQuantity >= 0 ? newQuantity : 0};
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };


    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        }).
        then((response) => response.json()).
        then((data) => {
            data.featured && setGoods(data.featured);
            setLoading(false);
        });

    }, []);

    return <main className="container content">
        <Basket quantity={order.length} handleBasketShow={handleBasketShow} />
        {isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity} />}
        {
            loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />
        }
    </main>
}