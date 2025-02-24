import Cart from "./components/Cart";
import Header from "./components/Header";
import Login from "./components/Login";
import Menu from "./components/Menu";

function App() {
    return (
        <div className="container">
            <Header />
            <main>
                <Login />
                <Menu />
                <Cart />
            </main>
        </div>
    );
}

export default App;
