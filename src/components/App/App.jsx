import React from 'react';
import axios from 'axios';
import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

// Ben's Imports
import PizzaPage from '../PizzaPage/PizzaPage.jsx';
import Header from '../Header/Header.jsx';
import ButtonBar from '../ButtonBar/ButtonBar.jsx';
import { useState, useEffect } from 'react';
// END Ben's Imports


function App() {
 
 
  // BEN - Display Pizzas
  const [pizzaList, setPizzaList] = useState([]);

  function getPizzaList() {
    console.log(`GET /api/pizza request`);

    axios.get('/api/pizza').then((response) => {
      console.log('GET /api/pizza response data:', response.data);

        setPizzaList(response.data);

    }).catch((error) => {
      console.log(`/api/pizza GET error`, error);
      alert(`/api/pizza GET error`);
    });
  }
  // Call your object
  useEffect(() => {
    getPizzaList();
  }, []);

  // Customer Information Page


  // Checkout Page


  // End Checkout Page

  return (
    <div className='App'>
      
      <Header />
      <ButtonBar />

      <Router>
        <Route exact path="/">
          <PizzaPage 
            pizzaList={pizzaList}
          />
          <button id="next-btn">NEXT</button>
        </Route>

      {/* Customer Information Page */}

      {/* Checkout Page */}
      </Router>
    </div>
  );
}

export default App;
