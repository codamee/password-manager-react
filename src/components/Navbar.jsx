import React from 'react'

const Navbar = () => {
  return (
    <div className='w-[70% ] bg-blue-900 px-3 py-2 md:py-4 md:px-10 flex justify-between items-center  '>
      <div className="logo md:text-[1.5rem] font-bold text-green-400">&lt;Pass <span className=' text-blue-200'>mngr/&gt;</span></div>
      <div className='text-center'>

        <a href="https://github.com/codamee">
          <lord-icon
            src="https://cdn.lordicon.com/jjxzcivr.json"
            trigger="hover"
            stroke="bold"
            colors="primary:#ffffff,secondary:#00ff00  "
            style={{ "width": "40px", "height": "40px", "cursor": "pointer" }}>
          </lord-icon></a>
      </div>

    </div>
  )
}

export default Navbar