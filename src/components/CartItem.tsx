import { useDispatch } from "react-redux";
import { ICartItem } from "../interfaces";
import Button from "./Button";
import { decrement, deleteInCart, increment } from "../redux/slices/cartSlice";

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
        <div className="cart-item">
            <span className="quantity-text">{data.quantity}×</span>
            <span>{data.name}</span>
            <span className="price">€{data.price}</span>
            <div className="quantity-controls">
                <Button text="-" className="quantity-btn" onClick={handleDecrement} />
                <span>{data.quantity}</span>
                <Button text="+" className="quantity-btn" onClick={handleIncrement} />
                <Button text="DELETE" className="delete-btn" onClick={handleDelete} />
            </div>
        </div>
    );
};

export default CartItem;
