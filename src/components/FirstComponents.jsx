import React from 'react'

// images
import bg from '../assets/Images/bg.png'
import wd from '../assets/Images/pw7.jpg'
import bgwd from '../assets/Images/bgwd.png'

// icons
import { FaEnvelopeOpenText } from "react-icons/fa";

const FirstComponents = () => {
  return (
    <div className='max-w-xl relative flex items-center justify-center min-h-screen m-auto bg-cover bg-center' style={{backgroundImage:`url(${bg})`}}>
      <div className='z-10 relative flex flex-col gap-6 items-center justify-center text-center'>
        <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" className='font-Body font-semibold tracking-wide text-lg text-emerald-950'>WEDDING INVITATION</p>
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" className='relative'>
          <div className='absolute z-10 -bottom-20'>
            <img src={bgwd} alt="" className='w-full'/>
          </div>
            <img src={wd} alt="wd-raka-risma" className='w-56 h-80 rounded-full shadow-lg object-cover relative z-20'/>
        </div>
        <div className='flex items-center justify-center flex-col mt-4'>
            <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" className='font-Heading text-5xl tracking-wide text-amber-900 mb-2.5'>Iis & Raka</h1>
            <h2 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" className='font-Body text-sm tracking-wider text-emerald-950 mb-6'>Rabu, 25 Maret 2026 </h2>
            <a data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800" data-aos-offset="1" href="#" className='flex items-center font-Body bg-amber-950/80 w-max py-2.5 px-6 rounded-full text-sm tracking-wide text-white gap-2'><FaEnvelopeOpenText />Buka Undangan</a>
        </div>
      </div>
    </div>
  )
}

export default FirstComponents
