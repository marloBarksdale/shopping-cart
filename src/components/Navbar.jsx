import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Cart from './Cart';
import '../css/Navbar.css';

const Navbar = ({ cart, sidebar, toggleSideBar }) => {
  const handleClick = (state) => {
    toggleSideBar(state);
  };
  return (
    <div className='section-header'>
      <div className='nav-container'>
        <nav>
          <Link to='/shop'>Shop</Link> | <Link to='/sale'>Sale</Link> |{' '}
          <Link to='/about'>About</Link>
        </nav>
        <Link to='/'>
          {' '}
          <h1>Hello from App</h1>
        </Link>
        <nav>
          <Link to='#'>
            <FaIcons.FaShoppingBag
              onClick={() => {
                handleClick(true);
              }}
            />
          </Link>
          |{' '}
          <Link to='/profile'>
            <FaIcons.FaUserAlt />
          </Link>
          <nav className={sidebar ? 'cart-container active' : 'cart-container'}>
            <div
              className='closeCart'
              style={{ cursor: 'pointer', fontSize: '2rem' }}
              onClick={() => {
                handleClick(false);
              }}
            >
              <AiIcons.AiOutlineRight />
            </div>
            <Cart cart={cart} />
          </nav>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
