import React from 'react'
import DisabledInput from './DisabledInput'
import LicenseImage from './LicenseImage'
import FileDownload from './FileDowload'
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'
const ProvideOtherDetails = () => {
    return (
        <div className="shadow-md my-4 rounded-xl p-2 bg-white sm:mx-10 mx-5">
            <div className='flex justify-between flex-row m-5'>
                <h1 className='text-xl font-semibold'>License Details</h1>
                <div className='flex items-center'>
                    <span class="me-3 font-semibold  text-gray-800 ">Approved/ Disapproved</span>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4   rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellowPrimary"></div>
                    </label>
                </div>

            </div>
            <div className='flex justify-between flex-row m-5 flex-wrap'>
                <DisabledInput value='452345CDSCD' label='License no' />
                <div className="lg:contents flex grow [&>*:last-child]:my-2.5 [&>*:last-child]:sm:my-0 [&>*:last-child]:sm:m-auto [&>*:last-child]:sm:px-1 lg:my-0 my-2 sm:flex-nowrap flex-wrap">
                    <LicenseImage label='Front Image' />
                    <LicenseImage label='Back Image' />
                </div>
            </div>
            <div className='flex justify-between flex-row m-3'>
                <div className='flex flex-wrap'>
                    <FileDownload />
                    <FileDownload />
                </div>
            </div>
            <div className='mt-5 mx-7'>
                <h1>Vehicle Images</h1>
            </div>
            <div className='flex justify-between flex-row mx-7 mt-2 mb-10'>
                <div className='flex flex-wrap'>
                    <img src={img1} className='m-2' alt="" />
                    <img src={img2} alt="" className='m-2' />
                    <img src={img3} alt="" className='m-2' />
                    <img src={img4} alt="" className='m-2' />
                </div>
            </div>
        </div>
    )
}

export default ProvideOtherDetails