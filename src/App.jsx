import { useState } from 'react'
import './App.css'
import  Navbar from './components/Navbar'
import Footer from './components/Footer'
import gridlines from './assets/gridlines.png'

function App() {
  return(<div className='px-[20px] bg-black'>
    <Navbar/>
    <section className='p-[50px] px-[150px]'>
     <div className='hero bg-cover bg-center py-[60px] lg:py-[100px] lg:mt-[50px]' style={{ backgroundImage: `url(${gridlines})` }}>
      <div className='flex flex-col items-center justify-center mt-[-50px] lg:mt-[-100px]'>
        <h1 className='uppercase text-[60px] lg:text-[150px] gap-[25px] font-extrabold text-[#E26E23]'>Marketing</h1>
        <div className='flex items-center justify-end lg:ml-[200px] mt-[-20px] lg:mt-[-80px]'>
          <span className='text-white text-[20px] lg:text-[60px] font-bold leading-none'>for<br/>by</span>
          <h1 className='uppercase text-[60px] lg:text-[150px] font-extrabold text-[#FFBB55]'>Artists</h1>
        </div>
        <span></span>
      </div>
     </div>


    </section>
    <section className='services'></section>
    <section className='features'></section>

    <Footer/>

  </div>
      


    
  )
  

  
}

export default App
