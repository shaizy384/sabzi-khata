import React from 'react'
import Breadcrumbs from '../../components/ui/Breadcrumbs'
// import deUser from "../../assets/svgs/deactivate-user.svg"
import UserCard from '../../components/ui/UserCard'
import DisabledInput from './DisabledInput'
import Datatable from './Datatable'
import Modal from './Modal'
import ProviderPersonalDetails from './ProviderPersonalDetails'
import ProvideOtherDetails from './ProvideOtherDetails'

const ProviderDetails = () => {
  return (
    <div className="py-1 rounded-lg bg-gray-50">
      <div className='sm:mx-10 mx-5 mt-10 flex justify-between sm:flex-row flex-col'>
        <Breadcrumbs home="Service Provider" child="Provider Details" />
        <div className='flex sm:mt-0 mt-3 sm:ms-0 ms-auto'>
          <Modal />
          <button className={`bg-red-600 items-center justify-between flex hover:bg-red-700 text-white  py-2 px-4 rounded`}>
            <svg className='mr-2' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.364 5.63604C19.9926 7.26472 21 9.51472 21 12C21 16.9706 16.9706 21 12 21C9.51472 21 7.26472 19.9926 5.63604 18.364M18.364 5.63604C16.7353 4.00736 14.4853 3 12 3C7.02944 3 3 7.02944 3 12C3 14.4853 4.00736 16.7353 5.63604 18.364M18.364 5.63604L5.63604 18.364" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            Block
          </button>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 mb-4 sm:m-10 m-8">
        <UserCard value={'02'} label={'Total Vehicle'} Link={'/suppliers/supplierdetails/vehicledetails'} />
        <UserCard value={'500'} label={'Total Orders'} />
        <UserCard value={'09'} label={'Warnings'} />
        <UserCard value={'4.9'} label={'Ratings'} />
      </div>
      <ProviderPersonalDetails />
      <ProvideOtherDetails />
      <Datatable />
    </div>
  )
}

export default ProviderDetails