export default function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
        addToBasket = Function.prototype
    } = props;

    return <div className="card" id={id}>
            <img src={full_background} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"> {description}</p>
                <button className="btn btn-primary" onClick={() => addToBasket({id, name, price})}>Buy</button>
                <span className="right">{price}$</span>
            </div>
        </div>
}