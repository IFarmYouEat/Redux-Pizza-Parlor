import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Checkout() {
    const pizzaOrder = useSelector(store => store.pizzaOrder)
    const customerInfo = useSelector(store => store.customerInfo)
    const dispatch = useDispatch();
    console.log(customerInfo);


    // calculations here

    let pepperoniTotal = () => {
        let total = 0;
        let count = 0;

        for(let i = 0; i < pizzaOrder.length; i++) {
            if(pizzaOrder[i].name === 'Pepperoni') {
                console.log(pizzaOrder[i].name)
                total += Number(pizzaOrder[i].price);
                count += 1;
            }
        }
        console.log('Counting Pepperoni Pizzas', total, count)
        return { total, count };
    }
    let pepperoniPizza = pepperoniTotal();
    




    const submitOrder = () => {
        console.log('Moving items in cart to Server');

        // orderTotalfunction

        axios.post('/api/order',{
            customer_name: customerInfo.name,
            street_address: customerInfo.address,
            city: customerInfo.city,
            zip: customerInfo.zip,
            type: customerInfo.type,
            total: 34,
            pizzas: pizzaOrder
        }).then((response) => {
            // TODO Take customer to main page
            let action = {type: 'CLEAR_CART'}
            dispatch(action);
            alert('Order Successful!')
        }).catch((error) => {
            console.log('Error submitting order', error);
            alert('Could not order pizza');
        })

    }

    return(
        <div>
            <tbody>
                {pizzaOrder.map((pizza, index) => 
                <tr key={index}>
                    <td key={index}>{pizza.name}</td>
                    <td>{pizza.price}</td>
                </tr>
                )}
            </tbody>
            <div>
                <p>{customerInfo.name}</p>
                <p>{customerInfo.address}</p>
                <p>{customerInfo.city}</p>
                <p>{customerInfo.state}</p>  
                <p>{customerInfo.zip}</p>
                <p>{customerInfo.type}</p>             
            </div>

            <button onClick={submitOrder}>Checkout</button>
        </div>
    )
}

export default Checkout;