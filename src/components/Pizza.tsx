import { useState } from "react";
import Button from "./Button";
import { IPizza } from "../interfaces";

interface CardsProps {
    data: IPizza;
}

const Pizza = (props: CardsProps) => {
    const { data } = props;

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
            <img src={data.imageUrl} alt={data.name + " Pizza"} className="pizza-image" />
            <div className="pizza-info">
                <h2>{data.name}</h2>
                <p className="ingredients">{data.ingredients.join(", ")}</p>
                <p className="price">€{data.unitPrice.toFixed(2)}</p>
            </div>
            {data.soldOut ? (
                <p className="sold-out">SOLD OUT</p>
            ) : (
                <div className="cart-controls">
                    {count === 0 ? (
                        <Button
                            text="ADD TO CART"
                            className="add-to-cart"
                            onClick={handleIncrement}
                        />
                    ) : (
                        <div className="counter">
                            <Button
                                text="-"
                                className="decrement"
                                aria-label="Decrease quantity"
                                onClick={handleDecrement}
                            />
                            <span>{count}</span>
                            <Button
                                text="+"
                                className="increment"
                                aria-label="Increase quantity"
                                onClick={handleIncrement}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Pizza;
