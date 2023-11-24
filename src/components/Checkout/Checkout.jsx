import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Checkout() {
    const pizzaOrder = useSelector(store => store.pizzaOrder)
    const customerInfo = useSelector(store => store.customerInfo)
    const dispatch = useDispatch();
    console.log(customerInfo);
    

    // calculations here
    
    
    const reformedArray = []
    
    let duplicate = false;
    let location
    
    for(let pizza of pizzaOrder){
        
        for(let i = 0; i < reformedArray.length; i++){
            console.log('reformed pizza is', reformedArray[i].id)
            if(pizza.id === reformedArray[i].id){
                location = i;
                duplicate = true;
            };
        }
        if(duplicate === false){
            reformedArray.push({id: pizza.id, quantity: 1})
        }else if (duplicate === true){
            reformedArray[location].quantity ++;
        }
        duplicate = false;
    }
    
    const submitOrder = () => {
        console.log('Moving items in cart to Server');
        console.log('Reformed Array:', reformedArray)
        // orderTotalfunction

        axios.post('/api/order',{
            customer_name: customerInfo.name,
            street_address: customerInfo.address,
            city: customerInfo.city,
            zip: customerInfo.zip,
            type: customerInfo.type,
            total: 34,
            pizzas: reformedArray,
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
            <table>
            <tbody>
                {pizzaOrder.map((pizza, index) => 
                <tr key={index}>
                    <td key={index}>{pizza.name}</td>
                    <td>{pizza.price}</td>
                </tr>
                )}
            </tbody>
            </table>
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