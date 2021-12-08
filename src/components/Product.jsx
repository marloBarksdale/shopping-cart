import React, { useEffect, useState } from 'react';
import getData from '../data';
import { useParams } from 'react-router-dom';

const Product = ({ toggleSideBar, addToCart }) => {
  const [productsData, setProductData] = useState([]);

  let params = useParams();

  useEffect(() => {
    const loadProductData = async () => {
      setProductData(await getData());
    };
    loadProductData();
  }, []);

  const [filter] = productsData.filter(
    (prod) => prod.id === parseInt(params.id, 10),
  );

  const handleClick = (filter, state) => {
    toggleSideBar(state);
    addToCart(filter);
  };

  return (
    <>
      {filter !== undefined ? (
        <div className='card-grid product'>
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
            <button
              onClick={() => {
                handleClick(filter, true);
              }}
              className='btn addToCart'
            >
              {' '}
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        ''
      )}{' '}
    </>
  );
};

export default Product;
