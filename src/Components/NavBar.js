import React, { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import navImg from '../assets/b0d5fC.jpg'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='w-full h-[90px] bg-black'>
      <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div>
          <h1 className='text-[var(--primary-blue)]'>DEFI</h1>
          </div>
        <div className='hidden md:flex'>
          <ul className='flex text-white items-center'>
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className='ml-4'>Use Defi</button>
          </ul>
        </div>
        <div onClick={handleNav} className='block md:hidden cursor-pointer'>
          {nav ? <AiOutlineClose size={30} className="text-white"/> : <AiOutlineMenu size={30} className="text-white"/>}
        </div>
        {/* Mobile Menu */}
        <div className={nav ? 'w-full h-full bg-black text-white absolute left-0 top-[90px] flex justify-center text-center z-10' : 'absolute left-[-100%]'}>
            <ul className='mt-[100px]'>
              <li className='text-2xl'>Platform</li>
              <li className='text-2xl'>Developers</li>
              <li className='text-2xl'>Community</li>
              <li className='text-2xl'>About</li>
              <button className='m-8'>Use Defi</button>
            </ul>
            <img src={navImg} alt="" className='w-full h-full z-[-10] absolute object-cover' />
        </div>

      </div>   
    </div>
  )
}

export default NavBar