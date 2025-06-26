import { NavLink } from "react-router";
import Input from "../Input";
import Logo from "../Logo/Logo";
import { useContext } from "react";
import { userContext } from "../../contexts/UserContext";
import styles from "./Header.module.scss";

const Header = () => {
    const user = useContext(userContext);

    return (
        <header className={styles.header}>
            <Logo />
            <Input
                type="text"
                placeholder="Search for the order #"
                className={styles["search-bar"]}
            />
            <div className={styles.username}>{user?.name}</div>
            <nav className={styles.nav}>
                <NavLink
                    to="/menu"
                    className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ""}`
                    }
                >
                    <span>Home</span>
                </NavLink>
                <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ""}`
                    }
                >
                    <span>Cart</span>
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
