import Button from "./Button";
import { IPizza } from "../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrement, increment } from "../redux/slices/cartSlice";
import { RootState } from "../redux/store";

interface CardsProps {
    data: IPizza;
}

const Pizza = (props: CardsProps) => {
    const { data } = props;
    const dispatch = useDispatch();
    const cartData = useSelector((state: RootState) => state.cart);

    const pizzaInCart = cartData.items.find((item) => item.id === data.id);

    const handleAddToCart = () => {
        dispatch(addToCart(data));
    };

    const handleIncrementPizza = () => {
        dispatch(increment(data.id));
    };

    const handleDecrementPizza = () => {
        dispatch(decrement(data.id));
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
                    {pizzaInCart?.quantity === undefined ? (
                        <Button
                            text="ADD TO CART"
                            className="add-to-cart"
                            onClick={handleAddToCart}
                        />
                    ) : (
                        <div className="counter">
                            <Button
                                text="-"
                                className="decrement"
                                aria-label="Decrease quantity"
                                onClick={handleDecrementPizza}
                            />
                            <span>{pizzaInCart.quantity}</span>
                            <Button
                                text="+"
                                className="increment"
                                aria-label="Increase quantity"
                                onClick={handleIncrementPizza}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Pizza;
