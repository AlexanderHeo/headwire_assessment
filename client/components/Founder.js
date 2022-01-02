import React from 'react';
import '../stylesheets/Founder.css';

const Founder = () => {
  return (
    <section id='founder' className='flx-cnt w100'>
      <blockquote className='quote'>
        "Even if you don't have a ready sketch of what you want &mdash; we will
        help you to get the result you dreamed of."
      </blockquote>
      <img
        src='images/founder-of-company.png'
        alt='David Oswald, founder of company'
      />
      <div className='signature'>
        <p className='cap'>David Oswald</p>
        <p className='founder-title upper'>founder of Company</p>
        <i className='sig'>Oswald</i>
      </div>
    </section>
  );
};

export default Founder;
