import Button from "../Button/Button";
import { IPizza } from "../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrement, increment } from "../../redux/slices/cartSlice";
import { RootState } from "../../redux/store";
import styles from "./Pizza.module.scss";

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
        <div className={styles["pizza-item"]}>
            <img src={data.imageUrl} alt={`${data.name} Pizza`} className={styles["pizza-image"]} />
            <div className={styles["pizza-info"]}>
                <h2>{data.name}</h2>
                <p className={styles.ingredients}>{data.ingredients.join(", ")}</p>
                <p className={styles.price}>€{data.unitPrice.toFixed(2)}</p>
            </div>

            {data.soldOut ? (
                <p className={styles["sold-out"]}>SOLD OUT</p>
            ) : (
                <div className={styles["cart-controls"]}>
                    {!pizzaInCart ? (
                        <Button onClick={handleAddToCart}>ADD TO CART</Button>
                    ) : (
                        <div className={styles.counter}>
                            <Button
                                className="quantityBtn"
                                aria-label="Decrease quantity"
                                onClick={handleDecrementPizza}
                            >
                                -
                            </Button>
                            <span>{pizzaInCart.quantity}</span>
                            <Button
                                className="quantityBtn"
                                aria-label="Increase quantity"
                                onClick={handleIncrementPizza}
                            >
                                +
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Pizza;
