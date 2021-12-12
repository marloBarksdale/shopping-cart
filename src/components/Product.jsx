import React, { useEffect, useState } from 'react';
import getData from '../data';
import { useParams } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const Product = ({ toggleSideBar, addToCart }) => {
  const [productsData, setProductData] = useState([]);
  const [quantity, setQuantity] = useState(1);

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
    addToCart(filter, quantity);
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

            <div>
              <h3>Quantity</h3>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaIcons.FaRegMinusSquare
                  style={{
                    fontSize: '1.5rem',
                  }}
                  onClick={() => {
                    if (quantity === 1) {
                      return;
                    }
                    setQuantity((prev) => prev - 1);
                  }}
                />
                <span
                  style={{
                    width: '2.5rem',
                    textAlign: 'center',
                    padding: '0.75rem',
                  }}
                >
                  {quantity}
                </span>
                <FaIcons.FaRegPlusSquare
                  style={{
                    fontSize: '1.5rem',
                  }}
                  onClick={() => {
                    setQuantity((prev) => prev + 1);
                  }}
                />
              </div>
            </div>
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
