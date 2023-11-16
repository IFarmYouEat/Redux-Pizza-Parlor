
import './Header.css';
import { useSelector } from 'react-redux';

function Header() {

    const pizzaOrder = useSelector(store => store.pizzaOrder);
    
    

    let orderTotal = () => {
        let total = 0;

        for(let i = 0; i < pizzaOrder.length; i++) {
            total += Number(pizzaOrder[i].price);
        }
        return total;
    }


    return (
        <div id="App-header">
            <h1 className='App-title'>American Pies</h1>
            <h5>Total: {orderTotal()} </h5>
        </div>
    )
}

export default Header;