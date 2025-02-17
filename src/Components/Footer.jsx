import React from 'react';
import logo from '../assets/logo.webp';

export default function Footer() {
  return (
    <footer className='w-full bg-[#282828] py-5'>
      <div className='flex items-center justify-between w-full lg:w-[70%] mx-auto'>
        <div>
          <img src={logo} className="w-30"/>
        </div>
        <div>
          <button className='bg-[#007BFF] rounded-lg shadow-lg text-white px-5 py-2'>Schedule 1-on-1 Call Now</button>
          <p className='text-white text-center text-sm'>Speak With Learning Advisor</p>
        </div>
      </div>
      <hr className="border-t border-white my-5 w-full lg:w-[70%] mx-auto"/>
      <div className='flex justify-between w-full lg:w-[70%] mx-auto'>
        <div className=' hidden lg:block text-white flex-1 max-w-xs mx-2'>
          <ul className='p-4 space-y-5'>
            <h4 className='text-[#E4E4E4]'>Programs</h4>
            <li className='py-2 flex justify-between items-center'>
              All Programs <i className="fa-solid fa-plus ml-2"></i>
            </li>
            <li className='py-2 flex justify-between items-center'>
              Program Management <i className="fa-solid fa-plus ml-2"></i>
            </li>
            <li className='py-2 flex justify-between items-center'>
              Strategy & Leadership <i className="fa-solid fa-plus ml-2"></i>
            </li>
            <li className='py-2 flex justify-between items-center'>
              Business Management <i className="fa-solid fa-plus ml-2"></i>
            </li>
            <li className='py-2 flex justify-between items-center'>
              Fintech <i className="fa-solid fa-plus ml-2"></i>
            </li>
            <li className='py-2 flex justify-between items-center'>
              Senior Management <i className="fa-solid fa-plus ml-2"></i>
            </li>
            <li className='py-2 flex justify-between items-center'>
              Data Science <i className="fa-solid fa-plus ml-2"></i>
            </li>
            <li className='py-2 flex justify-between items-center'>
              Digital Transformation <i className="fa-solid fa-plus ml-2"></i>
            </li>
            <li className='py-2 flex justify-between items-center'>
              Business Analytics <i className="fa-solid fa-plus ml-2"></i>
            </li>
          </ul>
        </div>
        <div className='self-stretch flex-1 max-w-xs mx-2'>
          <ul className='p-4 space-y-2 text-white'>
            <h4 className='text-[#E4E4E4]'>Contact Us</h4>
            <div className='text-sm'>
              <li>Data Science & AI</li>
              <li>Email us (For Data Science Queries): admissions@accredian.com</li>
              <li>Email us (For Product Management Queries): pm@accredian.com</li>
              <li>Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</li>
              <li>Product Management Admission Helpline: +91 9625811095</li>
              <li>Enrolled Student Helpline: +91 7969322507</li>
              <li>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</li>
              <li>Why Accredian</li>
              <li className='text-xl'>Follow Us</li>
              <div className='flex gap-8 text-xl'>
                
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-linkedin"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-youtube"></i></li>
              </div>
            </div>
          </ul>
        </div>
        <div className='self-stretch flex-1 max-w-xs mx-2'>
          <ul className='p-4 space-y-2 text-white'>
            <h4 className='text-[#E4E4E4]'>Accredian</h4>
            <div className='text-sm'>
              <li>About</li>
              <li>Career</li>
              <li>Blog</li>
              <li>Admission Policy</li>
              <li>Referral Policy</li>
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
              <li>Master FAQs</li>
            </div>
          </ul>
        </div>
      </div>
      <div className='text-center text-white text-sm mt-5'>
        © 2024 Accredian - A Brand of FullStack Education Pvt Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}
