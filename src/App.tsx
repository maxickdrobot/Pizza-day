import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import PageNotFound from "./pages/PageNotFound";
import "./App.scss";

function App() {
    return (
        <div className="container">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/*" element={<PageNotFound />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
