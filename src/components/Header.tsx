import { NavLink } from "react-router";
import Input from "./Input";
import Logo from "./Logo";
import { useContext } from "react";
import { userContext } from "../contexts/UserContext";

const Header = () => {
    const user = useContext(userContext);
    return (
        <header>
            <Logo />
            <Input type="text" placeholder="Search for the order #" className="search-bar" />
            <div className="username">{user?.name}</div>
            <nav>
                <NavLink to="/menu">Menu</NavLink>
                <NavLink to="/cart">Cart</NavLink>
            </nav>
        </header>
    );
};

export default Header;
