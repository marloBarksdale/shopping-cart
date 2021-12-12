import React from 'react';

const Home = () => {
  return (
    <div className='hero-1'>
      <div className='banner'>
        <div className='hero-image'>
          <img src='https://source.unsplash.com/C43tCJffOh4' alt='' />
        </div>
        <div
          className='hero-content'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1>Your clothes</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
