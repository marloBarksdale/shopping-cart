import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import NoMatch from './components/NoMatch';
import About from './components/About';
import Shop from './components/Shop';
import Sale from './components/Sale';
import Profile from './components/Profile';
import Checkout from './components/Checkout';
import Product from './components/Product';
import Products from './components/Products';
import Navbar from './components/Navbar';
import './css/Index.css';

console.log('rer');
ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App></App>}>
        <Route path='shop' element={<Shop />}>
          <Route path=':category/:id/:product' element={<Product />} />
          <Route path=':category' element={<Products />}></Route>
        </Route>
        <Route path='about' element={<About />} />
        <Route path='sale' element={<Sale />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='profile' element={<Profile />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root'),
);
