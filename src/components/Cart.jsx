import React from 'react';
import '../css/Cart.css';
import { Link, useParams } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

var formatter = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
});

const Cart = ({ cart, count, total, addToCart }) => {
  const handleClick = (filter, count) => {
    addToCart(filter, count);
  };

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
                  <div>
                    <div style={{ display: 'flex' }}>
                      <FaIcons.FaRegMinusSquare
                        onClick={() => {
                          handleClick(product, -1);
                        }}
                      />
                      <span className='quantity'>{product.count}</span>
                      <FaIcons.FaRegPlusSquare
                        onClick={() => {
                          handleClick(product, 1);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='total-container'>
          {' '}
          <h2>Total: {formatter.format(total)}</h2>
        </div>
      </div>
    </>
  );
};

export default Cart;
