import React, { useState, useEffect } from 'react';
import { getCart } from '../data';

const Cart = ({ cart }) => {
  const [cartItem, setCart] = useState([]);

  useEffect(() => {
    setCart(cart);
  }, []);

  return (
    <>
      <h1> My Cart</h1>
      <div className='card-grid product'>
        {cartItem.map((filter, index) => (
          <div key={index}>
            <div className='card'>
              <div className='card-image'>
                <img src={filter.image} alt={filter.title} />
              </div>
            </div>
            <div className='detailsContainer'>
              <div style={{ fontSize: '13px', fontWeight: '700' }}>
                {filter.title}
              </div>
              <div>${filter.price}</div>
              <p>{filter.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
