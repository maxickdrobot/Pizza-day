interface CardsProps {
    name: string,
    unitPrice: number,
    imageUrl: string,
    ingredients: string[],
    soldOut: boolean
}

const Pizza = (props: CardsProps) => {
    const { name, unitPrice, imageUrl, ingredients, soldOut } = props;
    
    return (
        <div className="pizza-item">
            <img src={imageUrl} alt={name + " Pizza"} className="pizza-image" />
            <div className="pizza-info">
                <h2>{name}</h2>
                <p className="ingredients">{ingredients.join(", ")}</p>
                <p className="price">€{unitPrice.toFixed(2)}</p>
            </div>
            {soldOut ? <p className="sold-out">SOLD OUT</p> : <button className="add-to-cart">ADD TO CART</button>}
        </div>
    );
}

export default Pizza;