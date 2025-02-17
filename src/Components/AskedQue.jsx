import React from 'react'
import get from '../assets/get.svg'

export default function AskedQue() {
  return (
    <div className='w-full flex flex-col items-center gap-18 mb-22'>
      <div className='flex justify-center mb-5'>
      <h1 className='font-bold text-3xl text-center'>Frequently Asked <span className='text-[#1A73E8]'>Questions</span></h1>
      </div>

      <div className='flex items-center justify-evenly w-full lg:w-[70%] gap-16'>
        <div className='flex flex-col gap-4 lg:w-[30%]'>
<button className=' px-16 py-2 rounded-lg shadow-lg border'>Eligibility</button>
<button className=' px-12 py-2 rounded-lg shadow-lg border'>How To Use?</button>
<button className=' px-16 py-2 rounded-lg shadow-lg border'>Terms & Conditions</button>
        </div>
        <div className='hidden lg:block flex flex-col space-y-5 lg:w-[70%]'>
<p>Do I need to have prior Product Management and Project Management experience to enroll in the program?</p>
<p>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.</p>
<p>What is the minimum system configuration required?</p>
        </div>
      </div>
      <div className='relative h-[100%] w-full lg:w-[70%] mt-16'>
        <img src={get} alt='get in touch' className=''/>
<div className='absolute top-1 left-10 text-white flex items-center justify-between lg:top-13 lg:left-30 lg:gap-50'>
  <div>
  <p className='text-xs lg:text-2xl'>Want to delve deeper into the program?</p>
    <p className='text-xs lg:text-base'>
Share your details to receive expert insights from our program team!</p>
  </div>
  <div className='text-[#1A73E8] text-xs lg:text-base bg-white px-2 py-1 lg:px-8 lg:py-2 rounded-lg shadow-lg ml-auto'>
    <button>Get In Touch <i class="fa-solid fa-chevron-right px-4 text-xs lg:text-base"></i></button>
  </div>

</div>
      </div>
    </div>
  )
}
