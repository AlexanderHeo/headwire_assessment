import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div id='services'>
      <div className='title-container'>
        <div className='over-title'>our services</div>
        <div className='title'>what can we offer</div>
      </div>
      <div className='cards-container'>
        <div className='card'>
          <img src='/images/iconbox1.2.png' alt='' />
          <div className='card-title'>design & planning</div>
          <p className='card-p'>
            We will help you to get the result you dreamed of.
          </p>
          <div className='read-more'>Read more</div>
        </div>
        <div className='card'>
          <img src='/images/iconbox1.1.png' alt='' />
          <div className='card-title'>Custom Solutions</div>
          <p className='card-p'>
            Individual, aesthetically stunning solutions for customers.
          </p>
          <div className='read-more'>read more</div>
        </div>
        <div className='card'>
          <img src='/images/iconbox1.3.png' alt='' />
          <div className='card-title'>Furniture & decor</div>
          <p className='card-p'>
            We create and product our product design lines.
          </p>
          <div className='read-more'>read more</div>
        </div>
      </div>
      <div className='stats-container'>
        <div className='stats'>
          <div className='stat'>180+</div>
          <div className='stat-title'>current clients</div>
        </div>
        <div className='stats'>
          <div className='stat'>10+</div>
          <div className='stat-title'>years of experience</div>
        </div>
        <div className='stats'>
          <div className='stat'>35+</div>
          <div className='stat-title'>awards winning</div>
        </div>
        <div className='stats'>
          <div className='stat'>5+</div>
          <div className='stat-title'>offices worldwide</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
