import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";

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
