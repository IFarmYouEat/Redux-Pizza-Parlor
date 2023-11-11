
import './PizzaItem.css';
import { useDispatch } from 'react-redux';

function PizzaItem(props) {

    const dispatch = useDispatch();

    const pizzaToCart = (e) => {
        console.log('pizza price:', props.pizza.price);

    // dispatch
        const action = { type: 'ADD_PIZZA', payload: props.pizza}
        dispatch(action);
    }

    const pizzaFromCart = (e) => {
        console.log('pizza price:', props.pizza.price);

    // dispatch
        const action = { type: 'SUBTRACT_PIZZA', payload: props.pizza}
        dispatch(action);
    }

    return (
        <div id="pizza-item">
            <div id="pizza-title">
                <h3>{props.pizza.name}</h3>
                <p>{props.pizza.price}</p>
                <img id="pizza-img" alt={props.pizza.name} src={props.pizza.image_path} />
                <p>{props.pizza.description}</p>
            </div>
            <div id="pizza-add">

                <button 
                    onClick={pizzaToCart}
                    id="addToCart-btn"
                >Add</button>

                <button 
                    onClick={pizzaFromCart}
                    id="removeCart-btn"
                >Remove</button>
            </div>
        </div>
    )
}

export default PizzaItem;