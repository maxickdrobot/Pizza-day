import { useEffect, useState } from "react";
import Pizza from "./Pizza";
import { IPizza } from "../interfaces";

const Menu = () => {
    const [pizzas, setPizzas] = useState<IPizza[]>([]);
    const [fetching, setFetching] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setFetching(true);
                setError(false);
                const response = await fetch("https://react-fast-pizza-api.onrender.com/api/menu");

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await response.json();
                setPizzas(data.data);
            } catch (err) {
                setError(true);
                console.error("Error fetching data:", err);
            } finally {
                setFetching(false);
            }
        };

        getData();
    }, []);

    return (
        <main>
            <div className="menu-container">
                {fetching && <h2>Loading...</h2>}
                {error && <h2>Error fetching data((( Please try again later.</h2>}

                {pizzas.map((pizza) => (
                    <Pizza key={pizza.id} data={pizza} />
                ))}
            </div>
        </main>
    );
};

export default Menu;
