import React, { useState } from 'react';

export function Navbar() {

  const [open, setOpen] = useState(false)
  return (
    <header className='p-5 font-circular'>
      <nav className='flex items-center justify-between sm:w-[70%] mx-auto'>
        <div className='flex gap-5 items-center'>
          <img
            className="w-30"
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
            alt="logo"
          />
          <button className='hidden lg:block bg-[#1A73E8] text-white px-5 py-2 rounded-[3px]'>
            Courses <i class="fa-solid fa-chevron-down"></i>
          
          </button>
        </div>
        <div className={`z-100 lg:z-0 lg:static absolute md:min-h-fit bg-white p-5 min-h-[60h] left-12 top-[-112%] flex items-center px-5 ${open ? "top-[12%]" : "top:[-200%]"} `}>
<ul className='flex md:flex-row flex-col md:items-center items-center md:gap-[1.2vw] gap-5'>
  <li>Refer & Earn</li>
  <li>Resources</li>
  <li>About Us</li>
  <li><button className='bg-[#EAEDF1] px-5 py-1 rounded-[3px]'>Login</button></li>
  
  <li><button className='bg-[#1A73E8] text-white px-5 py-1 rounded-[3px]'>Try For Free</button></li>
</ul>
        </div>
        <div className='flex items-center gap-6 lg:hidden'>
          <button className='bg-[#1A73E8] text-white px-5 py-1 rounded-[3px]'>Explore</button>
        <button onClick={() => setOpen(!open)}><i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-3xl cursor-pointer`}></i></button>
        </div>
        
        
      </nav>
      
    </header>
  );
}
