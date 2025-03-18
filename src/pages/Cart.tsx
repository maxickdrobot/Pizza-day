import { Link } from "react-router";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import { useContext } from "react";
import { userContext } from "../contexts/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { clearCart } from "../redux/slices/cartSlice";

const Cart = () => {
    const user = useContext(userContext);
    const cartData = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="container">
            <Link to="/menu" className="back-link">
                ← Back to menu
            </Link>
            <h1 className="cart-title">Your cart, {user?.name}</h1>

            <div className="cart-items">
                {cartData.items.map((cartItem) => (
                    <CartItem key={cartItem.id} data={cartItem} />
                ))}
            </div>

            <div className="cart-actions">
                <Button text="Order pizzas" className="order-btn" />
                <Button text="Clear cart" className="clear-btn" onClick={handleClearCart} />
            </div>
        </div>
    );
};

export default Cart;
