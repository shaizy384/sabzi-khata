import React from 'react'
import Breadcrumbs from '../../components/ui/Breadcrumbs'
import vehicle from '../../assets/images/Vector.png'
const VehicleDetails = () => {
  return (
    <div className="py-1 rounded-lg bg-gray-50">
    <div className='mx-10 mt-10 flex justify-between'>
    <Breadcrumbs home="Service Provider" child="Vehicle" />
    </div>
    <div className='flex flex-wrap mx-1 sm:mx-10   '>
      <div className='grid grid-cols-2 bg-white p-5 sm:mt-10 mt-3 mx-1 sm:mx-5  w-full md:w-full lg:w-[40%] rounded-3xl'>
        <div className='m-5'>
          <label htmlFor="" className='text-lg font-semibold'>Vehicle Type</label>
        <div className='flex items-center mt-2  '>
          <img src={vehicle} alt="" />
          <label htmlFor="" className='ml-2 text-gray-500 '>VAN</label>
          </div>
        </div>
        <div className='m-5'>
          <label htmlFor="" className='text-lg font-semibold'>Vehicle Type</label>
        <div className='flex items-center mt-2'>
          <label htmlFor="" className='text-gray-500  '>PS25 34K</label>
          </div>
        </div>
        <div className='m-5'>
          <label htmlFor="" className='text-lg font-semibold'>Vehicle weight Capacity</label>
        <div className='flex items-center mt-2'>
          <label htmlFor="" className='text-gray-500  '>45kg</label>
          </div>
        </div>
        <div className='m-5'>
          <label htmlFor="" className='text-lg font-semibold'>Vehicle Color</label>
        <div className='flex items-center mt-2'>
          <label htmlFor="" className='text-gray-500  '>Black</label>
          </div>
        </div>
        <div className='m-5'>
          <label htmlFor="" className='text-lg font-semibold'>Vehicle Make</label>
        <div className='flex items-center mt-2'>
          <label htmlFor="" className='text-gray-500  '>Honda</label>
          </div>
        </div>
        <div className='m-5'>
          <label htmlFor="" className='text-lg font-semibold'>Vehicle Model</label>
        <div className='flex items-center mt-2'>
          <label htmlFor="" className='text-gray-500  '>City</label>
          </div>
        </div>  
      </div>
      <div className='grid grid-cols-2 bg-white p-5 sm:mt-10 mt-3 mx-1 sm:mx-5   w-full md:w-full lg:w-[40%] rounded-3xl'>
        <div className='m-5'>
          <label htmlFor="" className='text-lg font-semibold'>Vehicle Type</label>
        <div className='flex items-center mt-2  '>
          <img src={vehicle} alt="" />
          <label htmlFor="" className='ml-2 text-gray-500 '>VAN</label>
          </div>
        </div>
        <div className='m-5'>
          <label htmlFor="" className='text-lg font-semibold'>Vehicle Type</label>
        <div className='flex items-center mt-2'>
          <label htmlFor="" className='text-gray-500  '>PS25 34K</label>
          </div>
        </div>
        <div className='m-5'>
          <label htmlFor="" className='text-lg font-semibold'>Vehicle weight Capacity</label>
        <div className='flex items-center mt-2'>
          <label htmlFor="" className='text-gray-500  '>45kg</label>
          </div>
        </div>
        <div className='m-5'>
          <label htmlFor="" className='text-lg font-semibold'>Vehicle Color</label>
        <div className='flex items-center mt-2'>
          <label htmlFor="" className='text-gray-500  '>Black</label>
          </div>
        </div>
        <div className='m-5'>
          <label htmlFor="" className='text-lg font-semibold'>Vehicle Make</label>
        <div className='flex items-center mt-2'>
          <label htmlFor="" className='text-gray-500  '>Honda</label>
          </div>
        </div>
        <div className='m-5'>
          <label htmlFor="" className='text-lg font-semibold'>Vehicle Model</label>
        <div className='flex items-center mt-2'>
          <label htmlFor="" className='text-gray-500  '>City</label>
          </div>
        </div>  
      </div>
     
    </div>
   
     
</div>
  )
}

export default VehicleDetails