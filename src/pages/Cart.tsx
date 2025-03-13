import { Link } from "react-router";
import { cartItems } from "../cartData";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import { useContext } from "react";
import { userContext } from "../contexts/UserContext";

const Cart = () => {
    const user = useContext(userContext);
    return (
        <div className="container">
            <Link to="/menu" className="back-link">
                ← Back to menu
            </Link>
            <h1 className="cart-title">Your cart, {user?.name}</h1>

            <div className="cart-items">
                {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} data={cartItem} />
                ))}
            </div>

            <div className="cart-actions">
                <Button text="Order pizzas" className="order-btn" />
                <Button text="Clear cart" className="clear-btn" />
            </div>
        </div>
    );
};

export default Cart;
