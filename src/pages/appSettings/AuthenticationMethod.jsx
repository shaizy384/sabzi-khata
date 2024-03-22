import React from 'react'

const AuthenticationMethod = ({ title, icon }) => {
  return (
    <div className='border border-gray-300 rounded-lg p-3 mb-3'>
      <div className='flex flex-wrap justify-between'>
        <div className='flex items-center'>
          <img src={icon} alt="icon" />
          <p className='font-medium text-sm leading-normal ms-2'>{title}</p>
        </div>
        <div className='flex items-center ms-auto'>
          <span class="me-3 font-semibold  text-gray-800 ">Enable/ Disable</span>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4   rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-colorPrimary"></div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default AuthenticationMethod