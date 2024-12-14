import { useState } from 'react'
import './App.css'
import  Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return(<div className='px-[20px] bg-black'>
    <Navbar/>
    <section className='hero'></section>
    <section className='services'></section>
    <section className='features'></section>

    <Footer/>

  </div>
      


    
  )
  

  
}

export default App
