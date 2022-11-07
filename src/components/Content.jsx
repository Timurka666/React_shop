import { useEffect, useContext } from "react";
import { ShopContext } from "../context";
import { API_KEY, API_URL } from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Basket from "./Basket";
import BasketList from "./BasketList";

export default function Content() {
    const {loading, order, isBasketShow, setGoods} = useContext(ShopContext);

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        }).
        then((response) => response.json()).
        then((data) => {
            setGoods(data.featured);
        });

    }, []);

    return <main className="container content">
        <Basket quantity={order.length} />
        {isBasketShow && <BasketList />}
        {
            loading ? <Preloader /> : <GoodsList />
        }
    </main>
}