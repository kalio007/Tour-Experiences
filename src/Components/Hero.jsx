import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover'
            src='https://images.pexels.com/photos/1666020/pexels-photo-1666020.jpeg' 
            alt='tour Image'
        />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'></div>
        <div className='absolute top-0  w-full h-full flex flex-col justify-center text-white'>
          <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
            <p>All inclusive</p>
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches and Getaways</h1>
            <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe iste exercitationem modi rerum quos nesciunt temporibus quas odio alias.</p>
            <button className='border py-2 px-3 rounded-full bg-white text-black'>Reserve Now</button>
          </div>
        </div>
    </div>
  )
}

export default Hero