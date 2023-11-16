
import { useSelector } from 'react-redux';

// component to display pizzas
import PizzaItem from '../PizzaItem/PizzaItem.jsx';

function PizzaPage() {

    const pizzaList = useSelector(store => store.pizzaList);

    return (
        <div id="pizza-list">
            {
                pizzaList.map((pizza) => 
                (<PizzaItem 
                    key={pizza.id}
                    pizza={pizza}
                />))
            }
        </div>
    )
}

export default PizzaPage;