import React from 'react'
import DisabledInput from '../users/DisabledInput'
import Input from './Input'
import TextArea from '../../components/ui/TextArea'
import png_img from '../../assets/svgs/transparent-img.svg'

const SettingsForm = () => {
  return (
    <div className='border-b pb-4'>
      <div className='flex flex-wrap justify-between gap-2 mb-3 items-center flex-row mt-5'>
        <h1>1 Onboarding screen</h1>
        <div className='flex items-center ms-auto'>
          <span class="me-3 font-semibold  text-gray-800 ">Enable/ Disable</span>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4   rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-colorPrimary"></div>
          </label>
        </div>
      </div>
      <div className='flex flex-wrap flex-row sm:flex-row mt-2'>
        <div className='w-full md:w-1/2 pe-2 flex flex-col'>
          <Input value={'Lorem ipsum'} label={'Title'} />
          <div>
            <p className='text-gray-400 text-end'>(Please insert png image without any background)</p>
            <div className="flex flex-wrap gap-3 mt-3">
              <span>Image</span>
              <img src={png_img} alt="transparent image" />
              <div className="flex">
                <div>
                  <button className={`bg-red-600 items-center justify-between hover:bg-red-700 text-white  py-2 px-4 rounded me-2 block`}>Upload</button>
                </div>
                <div>
                  <button className={`bg-green-500 items-center justify-between hover:bg-green-600 text-white py-2 px-4 ms-auto rounded block`}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 flex flex-col flex-wrap md:mt-0 mt-4 ps-2'>
          <TextArea value={'Lorem ipsum dolor sit amet consectetur. Mauris cras curabitur tristique sagittis in'} label={'Subtitle'} />
        </div>
      </div>
    </div>
  )
}

export default SettingsForm