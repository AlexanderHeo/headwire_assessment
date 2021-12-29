import React from 'react';
import { BsDot } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import './Team.css';

const Team = () => {
  return (
    <div id='team'>
      <div className='title-container'>
        <div className='over-title'>Our professionals</div>
        <div className='title'>Meet our skilled Team</div>
      </div>
      <div className='team-carousel'>
        <div className='team-images'>
          <div className='team-image'>
            <div className='team-overlay'>
              <div className='team-name-container'>
                <div className='team-name'>Anakin Skywalker</div>
                <FiPlus className='team-plus' size='2rem' />
              </div>
              <div className='team-title-container'>
                <div className='team-title'>Sith Lord</div>
              </div>
            </div>
            <img src='images/april.jpeg' alt='' />
          </div>
          <div className='team-image'>
            <div className='team-overlay'>
              <div className='team-name-container'>
                <div className='team-name'>Anakin Skywalker</div>
                <FiPlus className='team-plus' size='2rem' />
              </div>
              <div className='team-title-container'>
                <div className='team-title'>Sith Lord</div>
              </div>
            </div>
            <img src='images/april.jpeg' alt='' />
          </div>
          <div className='team-image'>
            <div className='team-overlay'>
              <div className='team-name-container'>
                <div className='team-name'>Anakin Skywalker</div>
                <FiPlus className='team-plus' size='2rem' />
              </div>
              <div className='team-title-container'>
                <div className='team-title'>Sith Lord</div>
              </div>
            </div>
            <img src='images/april.jpeg' alt='' />
          </div>
          <div className='team-image'>
            <div className='team-overlay'>
              <div className='team-name-container'>
                <div className='team-name'>Anakin Skywalker</div>
                <FiPlus className='team-plus' size='2rem' />
              </div>
              <div className='team-title-container'>
                <div className='team-title'>Sith Lord</div>
              </div>
            </div>
            <img src='images/april.jpeg' alt='' />
          </div>
          <div className='team-image'>
            <div className='team-overlay'>
              <div className='team-name-container'>
                <div className='team-name'>Anakin Skywalker</div>
                <FiPlus className='team-plus' size='2rem' />
              </div>
              <div className='team-title-container'>
                <div className='team-title'>Sith Lord</div>
              </div>
            </div>
            <img src='images/april.jpeg' alt='' />
          </div>
        </div>
        <div className='team-carousel-control'>
          <div className='tcc'>
            <BsDot size='1.5rem' />
          </div>
          <div className='tcc'>
            <BsDot size='1.5rem' />
          </div>
          <div className='tcc'>
            <BsDot size='1.5rem' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
