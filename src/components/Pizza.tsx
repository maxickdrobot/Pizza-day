import { useState } from "react";
import Button from "./Button";

interface CardsProps {
    name: string,
    unitPrice: number,
    imageUrl: string,
    ingredients: string[],
    soldOut: boolean
}

const Pizza = (props: CardsProps) => {
    const { name, unitPrice, imageUrl, ingredients, soldOut } = props;

    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="pizza-item">
            <img src={imageUrl} alt={name + " Pizza"} className="pizza-image" />
            <div className="pizza-info">
                <h2>{name}</h2>
                <p className="ingredients">{ingredients.join(", ")}</p>
                <p className="price">€{unitPrice.toFixed(2)}</p>
            </div>
            {soldOut ? <p className="sold-out">SOLD OUT</p> : (
                    <div className="cart-controls">
                        {count === 0 ? <Button text="ADD TO CART" className="add-to-cart" onClick={handleIncrement} /> : (
                            <div className="counter">
                                <Button text="-" className="decrement" aria-label="Decrease quantity" onClick={handleDecrement} />
                                <span>{count}</span>
                                <Button text="+" className="increment" aria-label="Increase quantity" onClick={handleIncrement} />
                            </div>
                        )}
                    </div>
                )}
        </div>
    );
}

export default Pizza;