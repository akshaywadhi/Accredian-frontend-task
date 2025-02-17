import React from 'react'

export default function Table() {
  return (
    <div className='mb-[50px] max-h-[400px] lg:max-h-[100%] overflow-y-scroll lg:overflow-y-auto  rounded-xl p-4 lg:w-[70%] gap-6 mx-auto'>
      <div className='w-full h-full py-[30px] flex flex-col justify-between gap-16'>
        <h1 className='font-bold text-3xl text-center'>What Are The <span className='text-[#1A73E8]'>Referral Benefits?</span></h1>
<div className='text-right text-xl mb-[-50px]'>
  <h2>Enrolled <i class="fa-solid fa-toggle-on"></i></h2>
</div>
        <div className='flex justify-evenly items-center gap-5'>
          <div className='bg-white rounded-lg shadow-lg self-stretch'>
            <ul className='p-4 space-y-5 divide-y'>
              <li className='py-2 flex justify-between items-center'>
                All Programs <i className="fa-solid fa-chevron-right ml-2"></i>
              </li>
              <li className='py-2 flex justify-between items-center'>
                Program Management <i className="fa-solid fa-chevron-right ml-2"></i>
              </li>
              <li className='py-2 flex justify-between items-center'>
                Strategy & Leadership <i className="fa-solid fa-chevron-right ml-2"></i>
              </li>
              <li className='py-2 flex justify-between items-center'>
                Business Management <i className="fa-solid fa-chevron-right ml-2"></i>
              </li>
              <li className='py-2 flex justify-between items-center'>
                Fintech <i className="fa-solid fa-chevron-right ml-2"></i>
              </li>
              <li className='py-2 flex justify-between items-center'>
                Senior Management <i className="fa-solid fa-chevron-right ml-2"></i>
              </li>
              <li className='py-2 flex justify-between items-center'>
                Data Science <i className="fa-solid fa-chevron-right ml-2"></i>
              </li>
              <li className='py-2 flex justify-between items-center'>
                Digital Transformation <i className="fa-solid fa-chevron-right ml-2"></i>
              </li>
              <li className='py-2 flex justify-between items-center'>
                Business Analytics <i className="fa-solid fa-chevron-right ml-2"></i>
              </li>
            </ul>
          </div>
          <div className='hidden lg:block  overflow-x-auto rounded-lg shadow-xl self-stretch'>
            <table className="min-w-full h-[100%] space-y-6 divide-y divide-gray-200">
              <thead className='bg-[#AFCEF7]'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r'>Programs</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r'>Referrer Bonus</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Referral Bonus</th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                <tr>
                  <td className='px-6 py-6 whitespace-nowrap border-r'><i class="fa-solid fa-user-graduate p-1"></i>Professional Certificate Program in Product Management</td>
                  <td className='px-6 py-6 whitespace-nowrap border-r'>₹ 7,000</td>
                  <td className='px-6 py-6 whitespace-nowrap'>₹ 9,000</td>
                </tr>
                <tr>
                  <td className='px-6 py-6 whitespace-nowrap border-r'><i class="fa-solid fa-user-graduate p-1"></i>PG Certificate Program in Strategic Product Management</td>
                  <td className='px-6 py-6 whitespace-nowrap border-r'>₹ 9,000</td>
                  <td className='px-6 py-6 whitespace-nowrap'>₹ 11,000</td>
                </tr>
                <tr>
                  <td className='px-6 py-6 whitespace-nowrap border-r'><i class="fa-solid fa-user-graduate p-1"></i>Executive Program in Data Driven Product Management</td>
                  <td className='px-6 py-6 whitespace-nowrap border-r'>₹ 10,000</td>
                  <td className='px-6 py-6 whitespace-nowrap'>₹ 10,000</td>
                </tr>
                <tr>
                  <td className='px-6 py-6 whitespace-nowrap border-r'><i class="fa-solid fa-user-graduate p-1"></i>Executive Program in Data Driven Product Management</td>
                  <td className='px-6 py-6 whitespace-nowrap border-r'>₹ 10,000</td>
                  <td className='px-6 py-6 whitespace-nowrap'>₹ 10,000</td>
                </tr>
                <tr>
                  <td className='px-6 py-6 whitespace-nowrap border-r'><i class="fa-solid fa-user-graduate p-1"></i>Executive Program in Data Driven Product Management</td>
                  <td className='px-6 py-6 whitespace-nowrap border-r'>₹ 10,000</td>
                  <td className='px-6 py-6 whitespace-nowrap'>₹ 10,000</td>
                </tr>
                <tr>
                  <td className='px-6 py-6 whitespace-nowrap border-r'><i class="fa-solid fa-user-graduate p-1"></i>Executive Program in Data Driven Product Management</td>
                  <td className='px-6 py-6 whitespace-nowrap border-r'>₹ 10,000</td>
                  <td className='px-6 py-4 whitespace-nowrap'>₹ 10,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
<button className='text-right text-[#A0A6AA] border rounded-lg px-6 py-2 inline-block ml-auto'>Show More <i class="fa-solid fa-chevron-down px-2"></i></button>
        <button className='bg-[#1A73E8] text-white px-10 py-1 rounded-[3px] w-40 mx-auto'>Refer Now</button>
      </div>
    </div>
  );
}
