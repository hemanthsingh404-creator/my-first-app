import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import About from './components/About/about';
import Title from './components/Title/title';



function App() {
  return(
    <div>
      <Navbar />
      <Hero />
      <div id="about" className='container'>
        <Title subTitle="To Create website" title="Dynamic Website Development"/>
        <About />
      </div>
    </div>
  )
}

export default App
