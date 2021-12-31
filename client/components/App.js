import React from 'react';
import '../stylesheets/App.css';
import Blog from './Blog';
import Footer from './Footer';
import Founder from './Founder';
import Header from './Header';
import Services from './Services';
import Team from './Team';

const App = () => {
  return (
    <div className='wrapper'>
      <div className='borders' />
      <Header />
      <Founder />
      <Services />
      <Team />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
