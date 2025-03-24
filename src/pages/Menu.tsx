import { useEffect } from "react";
import Pizza from "../components/Pizza";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../redux/slices/menuSlice";
import { AppDispatch, RootState } from "../redux/store";

const Menu = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { menuItems, isLoading, error } = useSelector((state: RootState) => state.menu);

    useEffect(() => {
        dispatch(getMenu());
    }, [dispatch]);

    return (
        <main>
            <div className="menu-container">
                {isLoading && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}

                {menuItems.map((pizza) => (
                    <Pizza key={pizza.id} data={pizza} />
                ))}
            </div>
        </main>
    );
};

export default Menu;
