import React, { useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoTriangleRight, GoTriangleUp } from 'react-icons/go';
import { HiOutlineSearch } from 'react-icons/hi';
import { RiShoppingBag2Line } from 'react-icons/ri';
import { HeroImages } from '../lib/images';
import '../stylesheets/Header.css';
import Logo from './logo.svg';

const Header = ({ cart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => changeSlide(), 10000);
    return () => clearInterval(interval);
  }, [HeroImages]);

  const changeSlide = () => {
    const lastIndex = HeroImages.length - 1;
    setCurrentIndex((currentIndex) => {
      return currentIndex === lastIndex ? 0 : currentIndex + 1;
    });
  };

  const previousIndex = () => {
    const prevIndex =
      currentIndex === 0 ? HeroImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const nextIndex = () => {
    const nextIndex =
      currentIndex === HeroImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };
  return (
    <header>
      <nav className='main-nav'>
        <div className='logo'>
          <img src={Logo} alt="theratio's logo" />
          <div className='logo-background pos-abs h100' />
        </div>
        <div className='nav-section main'>
          <ul className='flx-cnt w100 h100 upper'>
            <li>
              home
              <BiChevronDown />
              <GoTriangleUp className='nav-triangle' />
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
          <ul className='flx-cnt w100 h100 upper'>
            <li>
              <div className='button-cart'>
                <div className='cart-total flx-cnt txt-cnt'>{cart}</div>
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
      <nav className='social-media flx-cnt'>
        <ul className='flx-cnt w100 h100 upper'>
          <li>
            instagram
            <GoTriangleRight className='nav-triangle hide' />
          </li>
          <li>
            facebook
            <GoTriangleRight className='nav-triangle hide' />
          </li>
          <li>
            twitter
            <GoTriangleRight className='nav-triangle hide' />
          </li>
          <li>
            pinterest
            <GoTriangleRight className='nav-triangle hide' />
          </li>
        </ul>
      </nav>
      <div className='hero flx-cnt-col w100 h100'>
        <div className='hero-bg pos-abs w100 h100' />
        <div className='bg pos-abs h100'>
          <img
            src={HeroImages[currentIndex].imgSource}
            alt={HeroImages[currentIndex].altText}
          />
        </div>
        <div className='h1 txt-cnt'>
          <span className='knockout flx-cnt upper'>studio</span>
          <h1 className='pos-abs w100 h100 flx-cnt'>
            Best Furniture and Decor
          </h1>
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
      <div className='bg-nav' onClick={() => previousIndex()}>
        <div className='bg-nav-arrow'>
          <FiArrowLeft strokeWidth='1' size='1.5rem' />
        </div>
        <div className='bg-nav-arrow' onClick={() => nextIndex()}>
          <FiArrowRight strokeWidth='1' size='1.5rem' />
        </div>
      </div>
    </header>
  );
};

export default Header;
