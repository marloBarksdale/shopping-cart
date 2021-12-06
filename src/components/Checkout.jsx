import { getCart } from '../data';
import Card from './Cards';
import { useState, useEffect } from 'react';
const Checkout = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  return (
    <div className='card-grid'>
      <Card products={cart} />
    </div>
  );
};

export default Checkout;
