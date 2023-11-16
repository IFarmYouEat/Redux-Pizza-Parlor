
import { useHistory } from 'react-router-dom';


import './ButtonBar.css';

function ButtonBar() {

    const history = useHistory();

    function goToCustomerInformation() {
        history.push('/customerInfo');
    }

    function goToPizzaPage() {
        history.push('/');
    }

    function goToCheckoutPage() {
        history.push('/checkout')
    }



    return (
        <div id="button-bar">

            {/* <button
                onClick={goToPizzaPage}
            >PizzaPage</button>

            <button 
                onClick={goToCustomerInformation}
            >Customer Information</button>

            <button 
                onClick={goToCheckoutPage}
            >Checkout</button> */}
            
        </div>
    )
}

export default ButtonBar;
