import React from 'react';
import './Founder.css';

const Founder = () => {
  return (
    <div id='founder'>
      <div className='quote'>
        "Even if you don't have a ready sketch of what you want &mdash; we will
        help you to get the result you dreamed of."
      </div>
      <img
        src='images/founder-of-company.png'
        alt='David Oswald, founder of company'
      />
      <div className='signature'>
        <p className='name'>David Oswald</p>
        <p className='title'>founder of Company</p>
      </div>
    </div>
  );
};

export default Founder;
