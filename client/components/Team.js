import React, { useState } from 'react';
import { BsDot } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import { TeamImages } from '../lib/images';
import './Team.css';

const Team = () => {
  const [index, setIndex] = useState(0);

  const button1 = () => setIndex(0);
  const button2 = () => setIndex(1);
  const button3 = () => setIndex(2);
  const button4 = () => setIndex(3);

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
                <div className='team-name'>
                  {TeamImages[index].first_name} {TeamImages[index].last_name}
                </div>
                <FiPlus className='team-plus' size='2rem' />
              </div>
              <div className='team-title-container'>
                <div className='team-title'>{TeamImages[index].job_title}</div>
              </div>
            </div>
            <div className='team-img-container'>
              <img
                src={TeamImages[index].imgSource}
                alt={TeamImages[index].altText}
              />
            </div>
          </div>
          <div className='team-image'>
            <div className='team-overlay'>
              <div className='team-name-container'>
                <div className='team-name'>
                  {TeamImages[index + 1].first_name}{' '}
                  {TeamImages[index + 1].last_name}
                </div>
                <FiPlus className='team-plus' size='2rem' />
              </div>
              <div className='team-title-container'>
                <div className='team-title'>
                  {TeamImages[index + 1].job_title}
                </div>
              </div>
            </div>
            <div className='team-img-container'>
              <img
                src={TeamImages[index + 1].imgSource}
                alt={TeamImages[index + 1].altText}
              />
            </div>
          </div>
          <div className='team-image'>
            <div className='team-overlay'>
              <div className='team-name-container'>
                <div className='team-name'>
                  {TeamImages[index + 2].first_name}{' '}
                  {TeamImages[index + 2].last_name}
                </div>
                <FiPlus className='team-plus' size='2rem' />
              </div>
              <div className='team-title-container'>
                <div className='team-title'>
                  {TeamImages[index + 2].job_title}
                </div>
              </div>
            </div>
            <div className='team-img-container'>
              <img
                src={TeamImages[index + 2].imgSource}
                alt={TeamImages[index + 2].altText}
              />
            </div>
          </div>
          <div className='team-image'>
            <div className='team-overlay'>
              <div className='team-name-container'>
                <div className='team-name'>
                  {TeamImages[index + 3].first_name}{' '}
                  {TeamImages[index + 3].last_name}
                </div>
                <FiPlus className='team-plus' size='2rem' />
              </div>
              <div className='team-title-container'>
                <div className='team-title'>
                  {TeamImages[index + 3].job_title}
                </div>
              </div>
            </div>
            <div className='team-img-container'>
              <img
                src={TeamImages[index + 3].imgSource}
                alt={TeamImages[index + 3].altText}
              />
            </div>
          </div>
          <div className='team-image'>
            <div className='team-overlay'>
              <div className='team-name-container'>
                <div className='team-name'>
                  {TeamImages[index + 4].first_name}{' '}
                  {TeamImages[index + 4].last_name}
                </div>
                <FiPlus className='team-plus' size='2rem' />
              </div>
              <div className='team-title-container'>
                <div className='team-title'>
                  {TeamImages[index + 4].job_title}
                </div>
              </div>
            </div>
            <div className='team-img-container'>
              <img
                src={TeamImages[index + 4].imgSource}
                alt={TeamImages[index + 4].altText}
              />
            </div>
          </div>
        </div>
        <div className='team-carousel-control'>
          <div className='tcc'>
            <BsDot size='1.5rem' onClick={() => button1()} />
          </div>
          <div className='tcc'>
            <BsDot size='1.5rem' onClick={() => button2()} />
          </div>
          <div className='tcc'>
            <BsDot size='1.5rem' onClick={() => button3()} />
          </div>
          <div className='tcc'>
            <BsDot size='1.5rem' onClick={() => button4()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
