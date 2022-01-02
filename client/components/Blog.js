import React from 'react';
import { BsDot } from 'react-icons/bs';
import '../stylesheets/Blog.css';

const Blog = () => {
  return (
    <section id='blog'>
      <nav>
        <div className='blog-title'>
          <div className='over-title'>Our blog</div>
          <h2 className='title'>Read our latest news</h2>
        </div>
        <div className='blog-button'>
          <button>view all</button>
        </div>
      </nav>
      <section>
        <div className='card'>
          <div className='img-container'>
            <div className='blog-img-title pos-abs upper'>Interior</div>
            <img className='img h100' src='images/grid1.jpeg' alt='' />
          </div>
          <div className='blog-info'>
            <div className='blog-overtitle'>
              <small>March 19, 2020</small>
              <BsDot />
              <BsDot />
              <small className='upper'>tom black</small>
            </div>
            <div className='blog-title'>
              Top 10 tips for your Kitchen Interior Design
            </div>
            <div className='blog-p'>
              <p>A faceting effect livens up and ...</p>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='img-container'>
            <div className='blog-img-title pos-abs upper'>Interior</div>
            <img className='img h100' src='images/grid2.jpeg' alt='' />
          </div>
          <div className='blog-info'>
            <div className='blog-overtitle'>
              <small>March 19, 2020</small>
              <BsDot />
              <BsDot />
              <small className='upper'>tom black</small>
            </div>
            <div className='blog-title'>
              Top 10 tips for your Kitchen Interior Design
            </div>
            <div className='blog-p'>
              <p>A faceting effect livens up and ...</p>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='img-container'>
            <div className='blog-img-title pos-abs upper'>Interior</div>
            <img className='img h100' src='images/grid3.jpeg' alt='' />
          </div>
          <div className='blog-info'>
            <div className='blog-overtitle'>
              <small>March 19, 2020</small>
              <BsDot />
              <BsDot />
              <small className='upper'>tom black</small>
            </div>
            <div className='blog-title'>
              Top 10 tips for your Kitchen Interior Design
            </div>
            <div className='blog-p'>
              <p>A faceting effect livens up and ...</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Blog;
