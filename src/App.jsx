import React, { useState } from 'react';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Offers from './Components/Offers';
import Plan from './Components/Plan';
import Rooms from './Components/Rooms';
import Slider from './Components/Slider';
import Footer from './Components/Footer';

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Offers/>
      <Plan/> 
      <Rooms/>
      <Slider/>
      <Footer/>
    </div>
  )
}

export default App
