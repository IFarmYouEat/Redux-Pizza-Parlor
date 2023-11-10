
// component to display pizzas
import PizzaItem from '../PizzaItem/PizzaItem.jsx';

function PizzaPage(props) {

    return (
        <div id="pizza-list">
            {
                props.pizzaList.map((pizza) => 
                (<PizzaItem 
                    key={pizza.id}
                    pizza={pizza}
                />))
            }
        </div>
    )
}

export default PizzaPage;