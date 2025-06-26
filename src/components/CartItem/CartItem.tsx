import { useDispatch } from "react-redux";
import { ICartItem } from "../../interfaces";
import Button from "../Button/Button";
import { decrement, deleteInCart, increment } from "../../redux/slices/cartSlice";
import styles from "./CartItem.module.scss";

interface CartItemProps {
    data: ICartItem;
}

const CartItem = (props: CartItemProps) => {
    const { data } = props;
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment(data.id));
    };

    const handleDecrement = () => {
        dispatch(decrement(data.id));
    };

    const handleDelete = () => {
        dispatch(deleteInCart(data.id));
    };

    return (
        <div className={styles.cartItem}>
            <span className={styles.quantityText}>{data.quantity}×</span>
            <span className={styles.name}>{data.name}</span>
            <span className={styles.price}>€{data.price}</span>
            <div className={styles.quantityControls}>
                <Button className="quantityBtn" onClick={handleDecrement}>
                    -
                </Button>
                <span className={styles.quantity}>{data.quantity}</span>
                <Button className="quantityBtn" onClick={handleIncrement}>
                    +
                </Button>
                <Button className="deleteBtn" onClick={handleDelete}>
                    DELETE
                </Button>
            </div>
        </div>
    );
};

export default CartItem;
