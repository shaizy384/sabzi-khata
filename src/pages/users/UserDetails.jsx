import React from 'react'
import deUser from "../../assets/svgs/deactivate-user.svg"
import UserCard from '../../components/ui/UserCard'
import DisabledInput from './DisabledInput'
import Datatable from './Datatable'
import Breadcrumbs from '../../components/ui/Breadcrumbs'
import Modal from './Modal'
import PersonalDetails from '../../components/ui/PersonalDetails'
const UserDetails = () => {
  return (
    <div className="py-1 rounded-lg bg-gray-50">
      <div className='mx-10 mt-10 flex justify-between'>
        <Breadcrumbs home="Users" child="User Details" />
        <div className='flex'>
          <Modal />
          <button className={`bg-red-600 items-center justify-between flex hover:bg-red-700 text-white  py-2 px-4 rounded`}>
            <svg className='mr-2' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.364 5.63604C19.9926 7.26472 21 9.51472 21 12C21 16.9706 16.9706 21 12 21C9.51472 21 7.26472 19.9926 5.63604 18.364M18.364 5.63604C16.7353 4.00736 14.4853 3 12 3C7.02944 3 3 7.02944 3 12C3 14.4853 4.00736 16.7353 5.63604 18.364M18.364 5.63604L5.63604 18.364" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            Block
          </button>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 mb-4 m-10">
        <UserCard value={'30k'} label={'Saved Addresses'} Link={'/users/userdetails/addresses'} />
        <UserCard value={'08'} label={'Saved Receiver'} Link={'/users/userdetails/receiver'} />
        <UserCard value={'09'} label={'Warnings'} />
        <UserCard value={'23.7'} label={'Avg Order Price'} />
      </div>
      {/* <div className="shadow-md my-4 rounded-xl sm:p-2 bg-white flex sm:flex-wrap flex-col sm:flex-row mx-10 ">
        <div className='w-1/5 mt-5'>
          <img
            className="ml-5 w-32 h-32 rounded-full"
            src='https://dummyimage.com/200x200/000/fff&text=Person+1'
            alt="user photo"
          />
        </div>
        <div className='w-4/5 mt-5 flex flex-wrap justify-between'>
          <DisabledInput value={'Brandone Louis'} label={'Full Name'} />
          <DisabledInput value={'abcd@gmail.com'} label={'Email'} />
          <DisabledInput value={'+44 619 3456 7890'} label={'Phone'} />
          <DisabledInput value={'1982'} label={'Date Of Birth'} />
          <DisabledInput value={'Male'} label={'Gender'} />
        </div>
      </div> */}
      <PersonalDetails />
      <Datatable />
    </div>
  )
}

export default UserDetails