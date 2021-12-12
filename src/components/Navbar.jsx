import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Cart from './Cart';
import '../css/Navbar.css';
import { getCategories } from '../data';

const Navbar = ({
  cart,
  sidebar,
  toggleSideBar,
  count,
  total,
  addToCart,
  categories,
}) => {
  const handleClick = (state) => {
    toggleSideBar(state);
  };

  const handleHover = (catClassName) => {
    const cat = document.querySelector('.categories');
    cat.className = catClassName;
  };
  return (
    <div
      className='header-sticky'
      style={{ position: 'sticky', top: '0', zIndex: '100000000' }}
    >
      <div className='section-header'>
        <div className='nav-container'>
          <nav>
            <Link
              id='shopLink'
              to='#'
              onMouseEnter={() => {
                handleHover('categories active');
              }}
              // onMouseLeave={() => {
              //   handleHover('categories');
              // }}
            >
              Shop
            </Link>{' '}
            | <Link to='/sale'>Sale</Link> | <Link to='/about'>About</Link>
          </nav>
          <Link to='/shopping-cart'>
            {' '}
            <h1>
              ILove <FaIcons.FaHeartBroken style={{ color: 'red' }} /> Fake
            </h1>
          </Link>
          <nav>
            <Link to='#' style={{ position: 'relative', fontSize: '1.5rem' }}>
              <FaIcons.FaShoppingBag
                onClick={() => {
                  handleClick(true);
                }}
              />

              {count > 0 ? (
                <span
                  onClick={() => {
                    handleClick(true);
                  }}
                  style={{
                    position: 'absolute',
                    backgroundColor: '#00bcd4',
                    borderRadius: '9999px',
                    width: '1.5rem',
                    height: '1.5rem',
                    textAlign: 'center',
                    fontSize: '1rem',
                    right: '71%',
                    bottom: '-9%',
                  }}
                >
                  {count}
                </span>
              ) : (
                ''
              )}
            </Link>
            |{' '}
            <Link to='/profile'>
              <FaIcons.FaUserAlt style={{ fontSize: '1.5rem' }} />
            </Link>
            <nav
              className={sidebar ? 'cart-container active' : 'cart-container'}
            >
              <div
                className='closeCart'
                style={{ cursor: 'pointer', fontSize: '2rem' }}
                onClick={() => {
                  handleClick(false);
                }}
              >
                <AiIcons.AiOutlineRight />
              </div>
              <Cart
                cart={cart}
                count={count}
                total={total}
                addToCart={addToCart}
              />
            </nav>
          </nav>
          <nav
            onMouseLeave={() => {
              handleHover('categories');
            }}
            className='categories'
            style={{ display: 'flex', justifyContent: 'space-evenly' }}
          >
            {getCategories().map((category, index) => (
              <Link
                onClick={() => {
                  handleHover('categories');
                }}
                key={index}
                to={`shop/${category}`}
              >
                {category}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
