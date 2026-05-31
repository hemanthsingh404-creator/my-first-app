import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import About from './components/About/about';
import Title from './components/Title/title';
import Services from './components/Services/service'


function App() {
  return(
    <div>
      <Navbar />
      <Hero />
      <div id="about" className='container'>
        <Title subTitle="To Create website" title="Dynamic Website Development"/>
        <About />
        </div>
        <div id="services" className='container'>
        <Title subTitle="The premium way" title="Services"/>
        <Services />
        </div>
    </div>
  )
}

export default App
