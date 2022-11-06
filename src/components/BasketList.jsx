import BasketItem from "./BasketItem";

export default function BasketList(props) {
    const {order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype
    } = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return <ul className="list-group basket-list">
        <li className="list-group-item active d-flex justify-content-between align-items-center" aria-current="true">
            Корзина
            <button className="badge bg-danger rounded-pill" onClick={handleBasketShow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </button>
            </li>
        {
            order.length ? order.map(item => (<BasketItem key={item.id} {...item} removeFromBasket={removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity} />
            )) : <li className="list-group-item">Корзина пуста</li>
        }
        <li className="list-group-item disabled" aria-disabled="true">Общая стоимость: {totalPrice}$</li>
    </ul>
}