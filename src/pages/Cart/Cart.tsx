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
                <Button className={styles.orderBtn}>Order pizzas</Button>
                <Button className={styles.clearBtn} onClick={handleClearCart}>
                    Clear cart
                </Button>
            </div>
        </div>
    );
};

export default Cart;
