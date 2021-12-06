import { Outlet, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCart } from './data';
import Shop from './components/Shop';
import Products from './components/Products';
import Product from './components/Product';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import './css/App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSearch: false,
      sidebar: false,
      searchFor: '',
      cart: [],
      totalPrice: 0,
    };
  }

  toggleSideBar = () => this.setState({ sidebar: !this.sidebar });
  addToCart = (item) => {
    this.state.cart.push(item);
  };

  render() {
    return (
      <div className='App'>
        <h1>Hello from App</h1>
        <Navbar
          cart={this.state.cart}
          sidebar={this.state.sidebar}
          toggleSideBar={this.toggleSideBar}
        ></Navbar>
        <Routes>
          <Route path='shop' element={<Shop />}>
            <Route
              path=':category/:id/:product'
              element={
                <Product
                  toggleSideBar={this.toggleSideBar}
                  addToCart={this.addToCart}
                />
              }
            />
            <Route path=':category' element={<Products />}></Route>
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
