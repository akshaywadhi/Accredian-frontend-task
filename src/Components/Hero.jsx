import React from 'react';
import hero from '../assets/hero.webp';
import ReferralModal from './Modal';
import { useState } from 'react';
export default function Hero() {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex flex-col items-center justify-center sm:w-[70%] mx-auto py-4 mb-[50px]">

      <div className='w-full lg:w-[75%] h-auto bg-[#E5EFFC] flex flex-col justify-between rounded-[50px] p-3 mb-4'>
        <ul className='flex items-center justify-evenly'>
          <li>Refer</li>
          <li>Benefits</li>
          <li>FAQs</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="relative w-full h-[30rem] bg-[#EEF5FF] flex flex-col justify-between rounded-xl shadow-lg p-6">
        
        <div className=' flex flex-col lg:flex-row items-center justify-between lg:justify-between px-6'>
          <div className="text-center lg:text-left">
            <h1 className="w-80 text-black font-bold text-4xl lg:text-6xl">Let's Learn & Earn</h1>
            <p className='text-2xl py-[5rem] lg:w-50 lg:text-xl'>Get a chance to win
              up-to <span className='text-[#1A73E8] font-bold text-3xl'>Rs. 15,000</span>
            </p>
            <button className='bg-[#1A73E8] text-white px-5 py-2 rounded-[3px]' onClick={openModal}>Refer Now</button>
          </div>
          <div className="hidden lg:flex justify-end">
            <img src={hero} className="w-[535px] self-end" alt="Hero" />
          </div>
        </div>
       
      </div>
{
       <ReferralModal isOpen={isOpen} onClose={closeModal} />
}
    </div>
  );
}
