import Input from "./Input";
import Logo from "./Logo";

const Header = () => {
    return (
        <header>
            <Logo />
            <Input type="text" placeholder="Search for the order #" className="search-bar" />
            <div className="username">MAXIM</div>
        </header>
    );
}

export default Header;