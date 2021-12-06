import React, { useEffect, useState } from 'react';
import getData from '../data';
import { useParams, Outlet } from 'react-router-dom';
import Card from './Cards';
const Products = () => {
  const [productsData, setProductData] = useState([]);
  let params = useParams();

  useEffect(() => {
    const loadProductData = async () => {
      setProductData(await getData());
    };
    loadProductData();
  }, []);

  const filter = productsData.filter((cat) => cat.category === params.category);

  console.log(filter);
  return (
    <div className='card-grid'>
      <Card products={filter} />

      <Outlet />
    </div>
  );
};

export default Products;
