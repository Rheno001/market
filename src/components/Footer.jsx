import React from 'react'
import logo from '../assets/logo.png'
import insta from '../assets/insta.png'
import face from '../assets/face.png'
import tube from '../assets/tube.png'
import linked from '../assets/linked.png'
import vector from '../assets/Vector.png'

function Footer() {
  return (
    <footer className="bg-black text-white py-[50px] px-[20px] lg:px-[100px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Column 1 */}
        <div>
          <img src={logo} alt="" />
          <ul className='flex items-center justify-start md:justify-around w-full mt-[15px]'>
            <li><a href=""><img src={insta} alt="" className='h-[30px] mx-[10px]'/></a></li>
            <li><a href=""><img src={face} alt="" className='h-[30px] mx-[10px]'/></a></li>
            <li><a href=""><img src={tube} alt="" className='h-[30px] mx-[10px]'/></a></li>
            <li><a href=""><img src={linked} alt="" className='h-[30px] mx-[10px]'/></a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className='flex flex-col justify-between'>
          <div>
           <h3 className="text-xl font-bold mb-4 uppercase text-[#E26E23]">Location</h3>
           <p>2096 New Market, New Road<br />North Carolina, USA</p>
          </div>

          <div>
           <h3 className="text-xl font-bold mb-4 mt-[15px] uppercase text-[#E26E23]">Contact Us</h3>
           <p> support@rstheme.com(+880)155-69569</p>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-bold mb-4 uppercase text-[#E26E23]">Services</h3>
          <ul className="space-y-2">
            <li><a href="/blog" className="hover:text-gray-300 transition duration-300">Web Design</a></li>
            <li><a href="/faq" className="hover:text-gray-300 transition duration-300">PR Campaign</a></li>
            <li><a href="/support" className="hover:text-gray-300 transition duration-300">UI/UX Design</a></li>
            <li><a href="/terms" className="hover:text-gray-300 transition duration-300">Event Management</a></li>
            <li><a href="/terms" className="hover:text-gray-300 transition duration-300">Social Media Strategy</a></li>
            <li><a href="/terms" className="hover:text-gray-300 transition duration-300">Mobile App Development</a></li>
            <li><a href="/terms" className="hover:text-gray-300 transition duration-300">Video Crwation and Promotion</a></li>
            <li><a href="/terms" className="hover:text-gray-300 transition duration-300">Online Reputation Management</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-bold mb-4 uppercase text-[#E26E23]">Subscribe</h3>
          <div className='flex'><input type="email" name="email" id="" placeholder='Enter your Email' className='w-full border-0 rounded-l-md h-[40px] relative text-center text-[#E26E23] p-[5px]' /> <button className='bg-[#E26E23] flex items-center rounded-r-md p-[15px] h-[40px] ml-[-10px]'><img src={vector} alt="" className='ml-[5px] h-[20px]' /></button></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer