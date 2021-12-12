import { Route, Routes } from 'react-router-dom';

import Shop from './components/Shop';
import Products from './components/Products';
import Product from './components/Product';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Sale from './components/Sale';
import NoMatch from './components/NoMatch';
import About from './components/About';
import Home from './components/Home';

import './css/App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebar: false,
      categories: false,
      cart: [],
      totalPrice: 0,
      totalCount: 0,
    };
  }
  toggleCategories = () =>
    this.setState({ categories: !this.state.categories });
  toggleSideBar = (state) => this.setState({ sidebar: state });
  addToCart = (item, count) => {
    if (this.state.cart.some((element) => element.id === item.id)) {
      let updatedItem = this.state.cart.find(
        (element) => element.id === item.id,
      );

      // let index = this.state.cart.findIndex((element)=>element.id === item.it);

      console.log(updatedItem);

      updatedItem.count = updatedItem.count + count;

      // let newCart = this.state.cart.filter((element) => element.id !== item.id);

      // newCart = [...newCart, updatedItem];

      // console.log(newCart);

      this.setState({ cart: this.state.cart });
    } else {
      let x = {
        product: item,
        title: item.title,
        price: item.price,
        id: item.id,
        image: item.image,
        count: count,
        total: item.price * count,
      };

      this.state.cart.push(x);
    }

    this.setState({
      totalCount: this.state.cart.reduce(
        (acc, curVal) => acc + curVal.count,
        0,
      ),
    });

    this.setState({
      totalPrice: this.state.cart.reduce(
        (acc, curVal) => acc + curVal.count * curVal.price,
        0,
      ),
    });
    console.log(this.state.cart);

    this.setState({
      cart: this.state.cart.filter((element) => element.count > 0),
    });
  };

  render() {
    return (
      <div className='App'>
        <Navbar
          sidebar={this.state.sidebar}
          toggleSideBar={this.toggleSideBar}
          count={this.state.totalCount}
          cart={this.state.cart}
          total={this.state.totalPrice}
          addToCart={this.addToCart}
        ></Navbar>

        <div className='App-content'>
          <Routes>
            <Route element={<Home />} index />
            <Route path='shop' element={<Shop />}>
              <Route element={<Home />} index />
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

            <Route path='sale' element={<Sale />} />
            <Route path='profile' element={<Profile />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
