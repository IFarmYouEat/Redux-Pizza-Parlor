import React from 'react';
import axios from 'axios';
import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import Admin from '../Admin/Admin.jsx'
import Checkout from '../Checkout/Checkout.jsx'


function App() {
  // Display Pizzas


  // Customer Information Page


  // Checkout Page


  // End Checkout Page

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <Router>
      {/* Display Pizzas */}

      {/* Customer Information Page */}

      {/* Checkout Page */}
        <Route exact path ="/checkout"><Checkout /></Route>
        <Route exact path ="/admin"><Admin /></Route>
      </Router>
    </div>
  );
}

export default App;
