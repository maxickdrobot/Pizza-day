import { Link } from "react-router";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CartItem/CartItem";
import { useContext } from "react";
import { userContext } from "../../contexts/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { clearCart } from "../../redux/slices/cartSlice";
import styles from "./Cart.module.scss";

const Cart = () => {
    const user = useContext(userContext);
    const cartData = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleOrder = async () => {
        if (!user?.id) {
            alert("You must be logged in to place an order.");
            return;
        }

        if (cartData.items.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        const orderData = {
            user_id: user.id,
            items: cartData.items.map((item) => item.id),
            total: cartData.totalPrice,
        };

        try {
            const response = await fetch("http://localhost:3000/web/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to create order");
            }

            const data = await response.json();

            if (data.discountApplied) {
                alert(`Order placed with 10% loyalty discount! Total: $${data.total}`);
            } else {
                alert("Order placed successfully!");
            }

            dispatch(clearCart());
        } catch (err) {
            console.error("Order error:", err);
            alert("Failed to place order.");
        }
    };

    return (
        <div className={styles.container}>
            <Link to="/menu" className={styles.backLink}>
                ← Back to menu
            </Link>
            <h1 className={styles.cartTitle}>Your cart, {user?.name}</h1>

            <div className={styles.cartItems}>
                {cartData.items.map((cartItem) => (
                    <CartItem key={cartItem.id} data={cartItem} />
                ))}
            </div>

            <div className={styles.cartActions}>
                <Button className={styles.orderBtn} onClick={handleOrder}>
                    Order pizzas
                </Button>
                <Button className={styles.clearBtn} onClick={handleClearCart}>
                    Clear cart
                </Button>
            </div>
        </div>
    );
};

export default Cart;
