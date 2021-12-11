import React from 'react';
import '../css/Cart.css';
import { Link, useParams } from 'react-router-dom';
const Cart = ({ cart, count }) => {
  const params = useParams();
  return (
    <>
      <div className='cart-container-box'>
        <div className='cart-heading'>
          <h1>My Bag ({count}) </h1>
        </div>
        <div className='cart-items'>
          {cart.map((product, index) => (
            <div key={index}>
              <div className='cart-card'>
                <div className='cart-image'>
                  <Link
                    className='cart-link'
                    to={`/shop/${params.category}/${product.id}/${product.title}`}
                  >
                    <img src={product.image} alt={product.title} />
                  </Link>
                </div>
                <div className='detailsContainer'>
                  <div style={{ fontSize: '13px', fontWeight: '700' }}>
                    {product.title}
                  </div>
                  <div>${product.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
