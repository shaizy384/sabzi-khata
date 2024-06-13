import React from 'react'
import { useTranslation } from 'react-i18next';

const DisabledInput = ({ value, label, innerLabel, unitLabel }) => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col w-full md:w-[48%] my-5 mx-1'>
      <span className='font-semibold'>{t(label)}</span>
      <div className="relative mt-2">
        {innerLabel &&
          <span className="text-colorPrimary font-semibold absolute top-1 left-4 left-0 ml-2">{innerLabel}</span>
        }
        {unitLabel &&
          <span className="text-black absolute right-4 top-4 ml-2">{unitLabel}</span>
        }
        <input
          type='text'
          value={value}
          disabled
          className={`block w-full rounded-2xl border border-neutral-300 bg-transparent ${innerLabel ? 'pt-7' : ' py-4'} py-4 pl-5 pr-5 text-base/6 text-gray-400 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-green-500 focus:outline-none`}
        />
      </div>
    </div>

  )
}

export default DisabledInput