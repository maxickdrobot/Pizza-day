import { useEffect } from "react";
import Pizza from "../../components/Pizza/Pizza";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../../redux/slices/menuSlice";
import { AppDispatch, RootState } from "../../redux/store";
import styles from "./Menu.module.scss";

const Menu = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { menuItems, isLoading, error } = useSelector((state: RootState) => state.menu);

    useEffect(() => {
        dispatch(getMenu());
    }, [dispatch]);

    return (
        <main>
            <div className={styles.menuContainer}>
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
