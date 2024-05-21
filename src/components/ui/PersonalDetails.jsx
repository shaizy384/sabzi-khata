import React from 'react'
import DisabledInput from './DisabledInput'
import ModalAddSupplier from '../../pages/Supplier/ModalAddSupplier'
import ModalAddCustomer from '../../pages/Customer/ModalAddCustomer'

const PersonalDetails = ({ person, type }) => {
  return (
    <div className="shadow-md my-4 rounded-xl p-3 pb-4 bg-white md:mx-10 mx-5">
      <div className='flex justify-end flex-row m-5'>
        {type === 'customer' && <ModalAddCustomer id={person?.id} customer={person} type={type} />}
        {type === 'supplier' && <ModalAddSupplier id={person?.id} supplier={person} type={type} />}

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
            src={person?.profile_image}
            alt="profile image"
          />
        </div>
        <div className='xl:w-4/5 mt-5 flex flex-wrap ga sm:justify-between justify-center'>
          <DisabledInput value={person?.id} label={'Acc No:'} />
          <DisabledInput value={person?.name} label={'Full Name'} />
          <DisabledInput value={person?.phone} label={'Email'} />
          <DisabledInput value={person?.address} label={'Phone'} />
          {/* <DisabledInput value={'Male'} label={'Gender'} /> */}
        </div>
      </div>
    </div>
  )
}

export default PersonalDetails