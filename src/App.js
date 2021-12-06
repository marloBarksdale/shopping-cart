import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCart } from './data';

import './css/App.css';

import Navbar from './components/Navbar';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    console.log(cart);
    cart.push(item);
  };

  useEffect(() => {
    setCart(getCart());
  }, []);

  return (
    <div className='App'>
      <h1> Hello from App</h1>
      <Navbar cart={cart} />
      <div className='app-Content'>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
