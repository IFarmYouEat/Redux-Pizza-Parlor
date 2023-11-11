
import './Header.css';
import { useSelector } from 'react-redux';

function Header() {

    const pizzaPrice = useSelector(store => store.pizzaPrice)

    return (
        <div id="App-header">
            <h1 className='App-title'>American Pies</h1>
            <h5>Total: {pizzaPrice} </h5>
        </div>
    )
}

export default Header;