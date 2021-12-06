import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Cart from './Cart';
import '../css/Navbar.css';

const Navbar = ({ cart, sidebar, toggleSideBar }) => {
  const handleClick = () => {
    toggleSideBar();
  };
  return (
    <div>
      <div className='nav-container'>
        <nav>
          <Link to='/shop'>Shop</Link> | <Link to='/sale'>Sale</Link> |{' '}
          <Link to='/about'>About</Link>
        </nav>
        <nav>
          <Link to='#'>
            <FaIcons.FaShoppingBag
              onClick={() => {
                handleClick();
              }}
            />
          </Link>
          |{' '}
          <Link to='/profile'>
            <FaIcons.FaUserAlt />
          </Link>
          <nav className={sidebar ? 'cart-container active' : 'cart-container'}>
            <div className='closeCart'>
              <AiIcons.AiOutlineRight
                onClick={() => {
                  handleClick();
                }}
              />
            </div>
            <Cart cart={cart} />
          </nav>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
