import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/Utility.css';
import Blog from './Blog';
import Footer from './Footer';
import Founder from './Founder';
import Header from './Header';
import Scroll from './ScrollToTop.js';
import Services from './Services';
import Team from './Team';

const App = () => {
  return (
    <div className='wrapper'>
      <div className='borders w100 h100' />
      <Header />
      <Founder />
      <Services />
      <Team />
      <Blog />
      <Footer />
      <Scroll />
    </div>
  );
};

export default App;
