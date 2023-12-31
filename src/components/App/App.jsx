import React from 'react';
import axios from 'axios';
import './App.css';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Admin from '../Admin/Admin.jsx'
import Checkout from '../Checkout/Checkout.jsx'


// Ben's Imports
import PizzaPage from '../PizzaPage/PizzaPage.jsx';
import Header from '../Header/Header.jsx';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// END Ben's Imports


function App() {

  const dispatch = useDispatch();
  const history = useHistory();

  // BEN - Display Pizzas

  function fetchPizzaList() {
    console.log(`GET /api/pizza request`);

    axios.get('/api/pizza').then((response) => {
      console.log('GET /api/pizza response data:', response.data);

      dispatch({ type: 'SET_PIZZA_LIST', payload: response.data });


    }).catch((error) => {
      console.log(`/api/pizza GET error`, error);
      alert(`/api/pizza GET error`);
    });
  }
  // Call your object
  useEffect(() => {
    fetchPizzaList();
  }, []);

  const nextToCustomerInformation = () => {
    console.log(`directing to customer information`);
    history.push('/customerInfo');
  }

  // Customer Information Page
  const customerInfo = useSelector(store => store.customerInfo);

  // Checkout Page


  // End Checkout Page

  return (
    <div className='App'>

      <Header />
      

      <Router>

        <Route exact path="/">
          <PizzaPage />
          <button id="next-btn">
            <Link to="/customerInfo">NEXT</Link>
          </button>
        </Route>



        {/* Customer Information Page */}
        <Route exact path="/customerInfo"><CustomerInfo /></Route>
        {/* Checkout Page */}

        {/* Checkout Page */}
        <Route exact path="/checkout"><Checkout /></Route>
        <Route exact path="/admin"><Admin /></Route>

      </Router>
    </div>
  );
}

export default App;
