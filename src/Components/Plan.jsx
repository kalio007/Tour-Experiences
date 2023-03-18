import React from 'react';

function Plan() {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 '>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='object-cover w-full h-full p-2 row-span-3' src='https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'alt='/' />
            <img className='object-cover w-full h-full p-2 row-span-2' src='https://images.pexels.com/photos/1486577/pexels-photo-1486577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'alt='/' />
            <img className='object-cover w-full h-full p-2 row-span-2' src='https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'alt='/' />
            <img className='object-cover w-full h-full p-2 row-span-3' src='https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'alt='/' />
            <img className='object-cover w-full h-full p-2 row-span-2' src='https://images.pexels.com/photos/705771/pexels-photo-705771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'alt='/' />
        </div>
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
            <p className='text-2xl py-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, quaerat!</p>
            <p className='pb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur commodi, rem iure nesciunt in fuga inventore ab sequi aliquid provident ex praesentium consectetur accusantium quaerat. Voluptatem doloribus ex dignissimos numquam.</p>
            <div>
                <button className='border py-2 px-3 rounded-full bg-white text-black border-black mr-4 hover:shadow-xl'>Learn More</button>
                <button className='text-white border py-2 px-3 rounded-full bg-black border-black mr-4 hover:shadow-xl'>Book Your Trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan