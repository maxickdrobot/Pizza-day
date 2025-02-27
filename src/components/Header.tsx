import { NavLink } from "react-router";
import Input from "./Input";
import Logo from "./Logo";

const Header = () => {
    return (
        <header>
            <Logo />
            <Input type="text" placeholder="Search for the order #" className="search-bar" />
            <div className="username">MAXIM</div>
            <nav>
                <NavLink to="/menu">Menu</NavLink>
                <NavLink to="/cart">Cart</NavLink>
            </nav>
        </header>
    );
};

export default Header;
