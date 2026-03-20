import React from 'react'

const Navbar = () => {
  return (
      <div className='bg-purple-950 text-purple-50 p-4 flex justify-between items-center'>
          <div className="logo md:text-xl font-bold text-green-500">Pass/<span className=' text-purple-300 font-bold '>mngr</span></div>
          <ul className='flex md:gap-6 gap-4 text-[.8rem] md:text-lg text-purple-300'>
              <li className='cursor-pointer font-semibold'>Home</li>
              <li className='cursor-pointer font-semibold'>Contact</li>
              <li className='cursor-pointer font-semibold'>AboutUs</li>
          </ul>
    </div>
  )
}

export default Navbar