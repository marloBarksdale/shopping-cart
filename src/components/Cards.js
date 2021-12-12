import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../css/Cards.css';

var formatter = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
});

const Cards = ({ products }) => {
  let params = useParams();
  return (
    <>
      {products.map((product) => (
        <Link
          to={`shopping-cart/shop/${params.category}/${product.id}/${product.title}`}
          key={product.id}
        >
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <img src={product.image} alt={product.title} />
              </div>
            </div>
            <div className='card-footer'>
              <div className='productName'>{product.title}</div>{' '}
              <div className='productPrice'>
                {formatter.format(product.price)}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Cards;
