import { ICartItem } from "../interfaces";
import Button from "./Button";

interface CartItemProps {
    data: ICartItem;
}

const CartItem = (props: CartItemProps) => {
    const { data } = props;
    return (
        <div className="cart-item">
            <span className="quantity-text">{data.quantity}×</span>
            <span>{data.name}</span>
            <span className="price">€{data.price}</span>
            <div className="quantity-controls">
                <Button text="-" className="quantity-btn" />
                <span>{data.quantity}</span>
                <Button text="+" className="quantity-btn" />
                <Button text="DELETE" className="delete-btn" />
            </div>
        </div>
    );
};

export default CartItem;
