import React, { useState } from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black text-white px-4 py-3 md:py-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="" className='w-[50px]' />
        <div className="text-xl font-bold">
          <a href="/">Logo</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-gray-300 transition duration-300">Home</a>
          <a href="/about" className="hover:text-gray-300 transition duration-300">About</a>
          <a href="/services" className="hover:text-gray-300 transition duration-300">Services</a>
          <a href="/contact" className="hover:text-gray-300 transition duration-300">Contact</a>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black md:hidden">
            <div className="flex flex-col items-center space-y-4 py-4">
              <a href="/" className="hover:text-gray-300 transition duration-300">Home</a>
              <a href="/about" className="hover:text-gray-300 transition duration-300">About</a>
              <a href="/services" className="hover:text-gray-300 transition duration-300">Services</a>
              <a href="/contact" className="hover:text-gray-300 transition duration-300">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar