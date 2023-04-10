import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';

function App() {
  return (
       <div>
           <NavBar />
           <Hero />
           <About />
       </div>
  );
}

export default App;
