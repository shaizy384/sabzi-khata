import React from 'react'
import DisabledInput from './DisabledInput'
import ModalAddSupplier from '../../pages/Supplier/ModalAddSupplier'

const PersonalDetails = () => {
  return (
    <div className="shadow-md my-4 rounded-xl p-3 pb-4 bg-white sm:mx-10 mx-8">
      <div className='flex justify-end flex-row m-5'>
        <ModalAddSupplier id={1} />

        {/* <span className="me-3 font-semibold  text-gray-800 ">Approved / Disapproved</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-colorPrimary"></div>
        </label> */}
      </div>
      <div className='flex justify-normal sm:flex-wrap flex-col sm:flex-row xl:p-0 px-1'>
        <div className='xl:w-1/5 mt-5'>
          <img
            className="ml-5 w-32 h-32 rounded-full"
            src='https://dummyimage.com/200x200/000/fff&text=Person+1'
            alt="user photo"
          />
        </div>
        <div className='xl:w-4/5 mt-5 flex flex-wrap ga sm:justify-between justify-center'>
          <DisabledInput value={'Brandone Louis'} label={'Full Name'} />
          <DisabledInput value={'abcd@gmail.com'} label={'Email'} />
          <DisabledInput value={'+44 619 3456 7890'} label={'Phone'} />
          <DisabledInput value={'1982'} label={'Date Of Birth'} />
          <DisabledInput value={'Male'} label={'Gender'} />
        </div>
      </div>
    </div>
  )
}

export default PersonalDetails