import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoTriangleRight, GoTriangleUp } from 'react-icons/go';
import { HiOutlineSearch } from 'react-icons/hi';
import { RiShoppingBag2Line } from 'react-icons/ri';
import './Header.css';
import Logo from './logo.svg';

const Header = () => {
  return (
    <header>
      <nav className='main-nav'>
        <div className='logo'>
          <img src={Logo} alt="theratio's logo" />
          <div className='logo-background' />
        </div>
        <div className='nav-section'>
          <ul>
            <li>
              home
              <BiChevronDown />
              <GoTriangleUp className='nav-triangle hide' />
            </li>
            <li>
              pages
              <BiChevronDown />
              <GoTriangleUp className='nav-triangle hide' />
            </li>
            <li>
              services
              <BiChevronDown />
              <GoTriangleUp className='nav-triangle hide' />
            </li>
            <li>
              portfolio
              <BiChevronDown />
              <GoTriangleUp className='nav-triangle hide' />
            </li>
            <li>
              blog
              <BiChevronDown />
              <GoTriangleUp className='nav-triangle hide' />
            </li>
            <li>
              contacts
              <BiChevronDown />
              <GoTriangleUp className='nav-triangle hide' />
            </li>
          </ul>
        </div>
        <div className='nav-section'>
          <ul>
            <li>
              <div className='button-cart'>
                <RiShoppingBag2Line size='1.2rem' />
              </div>
            </li>
            <li>
              <div className='button-search'>
                <HiOutlineSearch size='1.2rem' />
              </div>
            </li>
            <li>
              <div className='button-hamburger'>
                <GiHamburgerMenu size='1.2rem' />
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <nav className='social-media'>
        <ul>
          <li>
            instagram
            <GoTriangleRight className='sm-triangle hide' />
          </li>
          <li>
            facebook
            <GoTriangleRight className='sm-triangle hide' />
          </li>
          <li>
            twitter
            <GoTriangleRight className='sm-triangle hide' />
          </li>
          <li>
            pinterest
            <GoTriangleRight className='sm-triangle hide' />
          </li>
        </ul>
      </nav>
      <div className='hero'>
        <div className='bg'>
          <img
            src='images/slider3-home1.jpeg'
            alt='modern bedroom, with black closet, bed, white curtains'
          />
        </div>
        <div className='h1'>
          <span className='knockout'>studio</span>
          <h1>Best Furniture and Decor</h1>
        </div>
        <div className='p'>
          <p>
            We pride ourselves on being builders &mdash; creating architectural
            and creative solutions to help
          </p>
          <p>
            people realize their vision and make them a reality. Wanna work with
            us?
          </p>
        </div>
        <button>view projects</button>
      </div>
      <div className='bg-nav'>
        <div className='bg-nav-arrow'>
          <FiArrowLeft strokeWidth='1' size='1.5rem' />
        </div>
        <div className='bg-nav-arrow'>
          <FiArrowRight strokeWidth='1' size='1.5rem' />
        </div>
      </div>
    </header>
  );
};

export default Header;
