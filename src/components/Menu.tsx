import pizzas from "../data";
import Pizza from "./Pizza";


const Menu = () => {
    return (
        <main>
            <div className="menu-container">
                {pizzas.map((pizza) => <Pizza 
                        key={pizza.id} 
                        name={pizza.name}
                        unitPrice={pizza.unitPrice}
                        imageUrl={pizza.imageUrl}
                        ingredients={pizza.ingredients}
                        soldOut={pizza.soldOut}
                    />
                )}
            </div>
        </main>
    );
}

export default Menu;