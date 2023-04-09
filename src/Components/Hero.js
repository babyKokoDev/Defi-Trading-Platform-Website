import React from 'react'
import heroVid from '../assets/video.mp4'

const Hero = () => {
    return (
        <div className='w-full h-[90vh] top-[90px]'>
            <video className='object-cover h-full w-full absolute z-[-10]' src={heroVid} autoPlay loop muted />
            <div className='w-full h-[90%] flex flex-col justify-center items-center text-white'>
                <h1>Decentralized</h1>
                <h1>Trading Protocol</h1>
                <p>Guaranteed liquidity trading for millions of users and top Ethereum applications</p>
                <div>
                    <button>Use Defi</button>
                    <button>FAQ</button>
                </div>
            </div>

        </div>
    )
}

export default Hero