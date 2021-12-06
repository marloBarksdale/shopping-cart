import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import getData from '../data';
import { useState } from 'react';

const Shop = ({ addToCart }) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const loadProductData = async () => {
      setProductData(await getData());
    };
    loadProductData();
  }, []);

  const categories = [];
  productData.forEach((product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });
  console.log(categories);
  return (
    <div className='shop'>
      <nav style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {categories.map((category, index) => (
          <Link key={index} to={`/shop/${category}`}>
            {category}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Shop;
