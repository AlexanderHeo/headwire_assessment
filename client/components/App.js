import React from 'react';
import './App.css';
import Blog from './Blog';
import Founder from './Founder';
import Header from './Header';
import Services from './Services';
import Team from './Team';

const App = () => {
  return (
    <>
      <Header />
      <Founder />
      <Services />
      <Team />
      <Blog />
    </>
  );
};

export default App;
