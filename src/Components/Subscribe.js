import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full px-4 py-16 bg-black text-white text-center'>
        <h1 className='mb-4'>Join Our Defi Community</h1>
        <div>
            <input type="email" placeholder='Enter your email' className='p-3 rounded-3xl mr-4' />
            <button>Sign Out</button>
        </div>
        <div className='flex items-center justify-center py-2 mt-2'>
            <input className='mr-2' type="checkbox" />
            <p>Yes, I agree to receive email communications from Defi</p>
        </div>
    </div>
  )
}

export default Subscribe