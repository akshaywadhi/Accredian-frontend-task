import React from 'react'
import refer from '../assets/refer.webp'
import refer2 from '../assets/refer2.svg'

export default function ReferProcess() {
  return (
    <div className='mb-[50px]'>
      <div className='w-full h-full py-[30px] bg-[#EEF5FF] flex flex-col items-center justify-between gap-16'>
<h1 className='font-bold text-3xl'>How Do I <span className='text-[#1A73E8]'>Refer?</span></h1>
<img src={refer} className='hidden h-[40%] w-[70%]  object-cover md:block' />
<img src={refer2} className='block h-[20%] w-[60%]  object-cover md:hidden' />
<button className='bg-[#1A73E8] text-white px-10 py-1 rounded-[3px]'>Refer Now</button>
      </div>
    </div>
  )
}
