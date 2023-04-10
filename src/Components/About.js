import React from 'react'
import {SiHiveBlockchain, SiStrapi, SiFsecure} from 'react-icons/si'
import {VscServerProcess} from 'react-icons/vsc'

const About = () => {
  return (
      <div className='w-full bg-black'>
    <div className='max-w-[1240px] mx-auto px-4 py-16 text-white text-center'>
       <div>
           <h1 className='py-4'>A Growing Ecosystem</h1>
           <p className='py-4 text-xl'>
               The Defi protocol system empowers developers, liquidity providers, and traders to participate in a financial marketplace that is open and accessible to all.
           </p>
           <div className='grid grid-cols-4 gap-4'>

               <p>Card</p>
               <p>Card</p>
               <p>Card</p>
               <p>Card</p>
           </div>
       </div>
    </div>
    </div>
  )
}

export default About