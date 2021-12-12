import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import getData from '../data';
// import { useState } from 'react';
import { getCategories } from '../data';
import Home from './Home';
const Shop = ({ addToCart }) => {
  // const [productData, setProductData] = useState([]);

  // useEffect(() => {
  //   const loadProductData = async () => {
  //     setProductData(await getData());
  //   };
  //   loadProductData();
  // }, []);

  // const categories = [];
  // productData.forEach((product) => {
  //   if (!categories.includes(product.category)) {
  //     categories.push(product.category);
  //   }
  // });
  // console.log(categories);
  const categories = getCategories();
  return (
    <>
      <div className='shop'>
        <Outlet />
      </div>
    </>
  );
};

export default Shop;
