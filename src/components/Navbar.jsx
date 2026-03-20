import React from 'react'

const Navbar = () => {
  return (
      <div className=' w-[70% ] bg-blue-900 px-3 py-2 md:py-4 md:px-10 flex justify-between items-center  '>
          <div className="logo md:text-[1.5rem] font-bold text-green-400">&lt;Pass <span className=' text-blue-200'>mngr/&gt;</span></div>
          <ul className='flex md:gap-6 gap-4 text-[.8rem] md:text-lg text-slate-300 font-semibold'>
              <li className='cursor-pointer hover:text-slate-300'>Home</li>
              <li className='cursor-pointer hover:text-slate-300'>Contact</li>
              <li className='cursor-pointer hover:text-slate-300'>AboutUs</li>
          </ul>
    </div>
  )
}

export default Navbar