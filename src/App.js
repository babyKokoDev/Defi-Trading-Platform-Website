import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Developers from './Components/Developers';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';
import Subscribe from './Components/Subscribe';

function App() {
  return (
       <div>
           <NavBar />
           <Hero />
           <About />
           <Developers />
           <Subscribe />
           <Footer />
       </div>
  );
}

export default App;
