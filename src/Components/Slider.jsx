import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight  } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
    const slides = [
        {
            url:'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=600',
            title:'',
        },
        {
            url:'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=600',
            title:'',
        },
        {
            url:'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'',
        }
    ]

    const [currentIndex, setCurrenctIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrenctIndex(newIndex);
    };
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrenctIndex(newIndex);
    }
    const gotoSlide = (slideIndex) => {
        setCurrenctIndex(slideIndex)
    }
  return (
    <div className='max-w-[1400px] h-[500px] w-full m-auto py-16 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center duration-500' style={{backgroundImage:`url(${slides[currentIndex].url})`}}></div>
        <div className='absolute top-[50%] -transform-x-0 transform-y-[50%] left-5 text-2xl rounded-full p-2  text-white cursor-pointer  group-hover:bg-black/20'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className='absolute top-[50%] -transform-x-0 transform-y-[50%] right-5 text-2xl rounded-full p-2   text-white cursor-pointer group-hover:bg-black/20'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
            {
                slides.map((slide, slideIndex) => {
                    <div className='text-2xl cursor-pointer' key={slideIndex} onClick={() => gotoSlide(slideIndex)}>
                    <RxDotFilled/>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Slider