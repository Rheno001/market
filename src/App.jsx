import { useState } from 'react'
import './App.css'
import  Navbar from './components/Navbar'
import Footer from './components/Footer'
import gridlines from './assets/gridlines.png'
import vector from './assets/vector2.png'

function App() {
  return(<div className='px-[20px] bg-black'>
    <Navbar/>
    <section className='p-[50px] px-[150px]'>
     <div className='hero flex flex-col items-center bg-cover bg-no-repeat bg-center py-[60px] lg:py-[100px] mt-[50px]' style={{ backgroundImage: `url(${gridlines})` }}>
      <div className='flex flex-col items-center lg:items-end justify-center mt-[-50px] lg:mt-[-100px]'>
        <h1 className='uppercase text-[60px] lg:text-[150px] gap-[25px] font-extrabold text-[#E26E23]'>Marketing</h1>
        <div className='flex items-center justify-end lg:ml-[200px] mt-[-20px] lg:mt-[-80px]'>
          <span className='text-white text-[20px] lg:text-[60px] font-bold leading-none'>for<br/>by</span>
          <h1 className='uppercase text-[60px] lg:text-[150px] font-extrabold text-[#FFBB55]'>Artists</h1>
        </div>
        <p className='text-white text-[12px] text-center lg:text-[20px] lg:mt-[-20px]'>Creative Mind, Creative Works</p>
        <span></span>
      </div>
      <div className='flex items-center justify-center mt-[30px] lg:mt-[80px]'>
        <p className='lg:text-[12px] text-center  text-[white]'>Modern <span className='text-[#E26E23]'>Problem </span>Requires Modern <span className='text-[#E26E23]'>Solution</span></p>
        <button className='mx-[10px] text-[5px] lg:text-[12px] bg-[#E26E23] flex items-center justify-center text-white rounded-xl h-[15px] lg:h-[30px] p-[12px] lg:p-[18px]'>Lets Connect <img src={vector} alt="" className='hidden lg:block h-[8px] lg:h-[20px] mx-[5px] lg:mx-[10px]' /></button>
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
