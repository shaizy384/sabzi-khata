import React from 'react'
import { useNavigate } from 'react-router'
import deUser from "../../assets/svgs/deactivate-user.svg"
import service from "../../assets/svgs/service-provider.svg"
import deservice from "../../assets/svgs/deactivate-service-provider.svg"
import admin from "../../assets/svgs/admin.svg"
import DisabledInput from './DisabledInput'
import TextArea from './TextArea'
import ChatSection from './ChatSection'
import Breadcrumbs from '../../components/ui/Breadcrumbs'
const OrderDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="py-1 rounded-lg bg-gray-50">
      <div className='mx-12 my-6 flex justify-between'>
        <Breadcrumbs home="Order Management" child="Order Details" />
        
    </div>
      <>
        <div className="mx-5 mb-4 flex flex-wrap gap-3">
          <div className="grow md:w-3/6 rounded-2xl bg-white shadow ">
            <div className='flex justify-between m-5'>
              <h1 className='font-semibold'>Parcel Devlivery Details</h1>
              <h1 className='font-semibold'>Status:<span className='text-colorPrimary'> Pending</span></h1>
            </div>
            <div className='flex flex-wrap justify-between m-5 gap-3'>
              <DisabledInput label={'Order ID'} value={'#2346254293847'} />
              <DisabledInput label={'Price'} value={'26.7'} unitLabel={'SR'} />
              <DisabledInput label={'Pick up Location'} value={'B-BI 999, Street no 2... '} />
              <DisabledInput label={'Drop off Location'} value={'Street no 2 sadiqabad'} />
            </div>
            <div className='m-5'>
              <TextArea label={'Order Details'} value={'I want to sen my bycycle'} />
            </div>
            <div className='flex justify-between m-5'>
              <h1 className='font-semibold'>Receivers</h1>
            </div>
            <div className='flex flex-wrap justify-between m-5 gap-3'>
              <DisabledInput label={'Reciever 1'} innerLabel={'Furqan'} value={'+92 234 8324320'} />
              <DisabledInput label={'Reciever 2'} innerLabel={'Shahzaib'} value={'+92 234 8324320'} />
            </div>
          </div>

          <ChatSection />
        </div>
        
        <div className='w-100 mx-5 mb-4'>
          <h1 className='font-medium text-xl md:mb-4 mb-3'>
            User Details
          </h1>
          <div className='flex flex-col rounded-2xl bg-white'>
            <div className='flex justify-end mt-5 mr-5' >
            <button  className={`bg-[#2D9D46] items-center justify-between flex hover:bg-[#2D9B46] text-white  py-2 px-4 rounded` }>
          View Profile
          </button>
            </div>
          <div className="flex md:flex-row flex-col justify-between gap-5 mb-4 p-4 ">
            <div className="w-full [&>div]:w-full">
              <DisabledInput label={'Name'} value={'Furqan'} />
            </div>
            <div className="w-full [&>div]:w-full">
              <DisabledInput label={'Phone no'} value={'+92 234 8324320'} />
            </div>
          </div>
          </div>
          
        </div>
        <div className='w-100 mx-5 mb-4'>
          <h1 className='font-medium text-xl md:mb-4 mb-3'>
            Service Provider Details
          </h1>
          <div className='flex flex-col rounded-2xl bg-white'>
          <div className='flex justify-end mt-5 mr-5' >
            <button  className={`bg-[#2D9D46] items-center justify-between flex hover:bg-[#2D9B46] text-white  py-2 px-4 rounded` }>
          View Profile
          </button>
            </div>
          <div className="flex md:flex-row flex-col justify-between gap-5 mb-4 p-4">
            <div className="w-full [&>div]:w-full">
              <DisabledInput label={'Name'} value={'Shahzaib'} />
            </div>
            <div className="w-full [&>div]:w-full">
              <DisabledInput label={'Phone no'} value={'+92 234 8324320'} />
            </div>
            <div className="w-full [&>div]:w-full">
              <DisabledInput label={'Vehicle'} value={'ED73 DHI'} />
            </div>
          </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default OrderDetails