
import './PizzaItem.css';

function PizzaItem(props) {

    return (
        <div id="pizza-item">
            <div id="pizza-title">
                <h3>{props.pizza.name}</h3>
                <p>{props.pizza.price}</p>
                <img id="pizza-img" alt={props.pizza.name} src={props.pizza.image_path} />
                <p>{props.pizza.description}</p>
            </div>
            <div id="pizza-add">
                <button id="addToCart-btn">Add</button>
                <button id="removeCart-btn">Remove</button>
            </div>
        </div>
    )
}

export default PizzaItem;