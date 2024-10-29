import React from 'react'

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center p-5">
      <div className="w-full flex flex-col md:flex-row justify-start md:justify-center items-start gap-5 md:gap-40">
        <div className="flex flex-col justify-start items-start gap-2">
          <p className='text-lg md:text-2xl font-bold font-inter'>About</p>
          <p className='text-base md:text-lg font-normal font-inter text-gray-500 cursor-pointer'>About Us</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <p className='text-lg md:text-2xl font-bold font-inter'>Company</p>
          <p className='text-base md:text-lg font-normal font-inter text-gray-500 cursor-pointer'>Brand</p>
          <p className='text-base md:text-lg font-normal font-inter text-gray-500 cursor-pointer'>Partners</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <p className='text-lg md:text-2xl font-bold font-inter'>Legal</p>
          <p className='text-base md:text-lg font-normal font-inter text-gray-500 cursor-pointer'>Privacy</p>
          <p className='text-base md:text-lg font-normal font-inter text-gray-500 cursor-pointer'>Terms</p>
          <p className='text-base md:text-lg font-normal font-inter text-gray-500 cursor-pointer'>Copyright</p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-2 mt-5">
        <p className='text-base md:text-lg font-normal font-inter text-gray-500'>© 2024 Assemble. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer