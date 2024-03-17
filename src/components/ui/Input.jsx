import React, { useState } from 'react'
import eyeOff from '../../assets/svgs/eye-off.svg';
import eyeOn from '../../assets/svgs/eye-on.svg';
const Input = (props) => {
  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => {
    setShowPass(!showPass)
  }
  return (
    <div className="relative mt-6 lg:w-[auto] w-full">
      {props.logo && <div className="absolute inset-y-1 left-3 flex justify-end">
        <img className='w-5' src={props.logo} alt="" />
      </div>}
      {props.label && <label className='font-medium block mb-3'>{props.label}</label>}
      <input
        value={props.value}
        type={showPass ? 'text' : props.type}
        placeholder={props.placeholder}
        autocomplete="email"
        aria-label="Input"
        class={`block lg:w-96 w-full rounded-2xl border border-neutral-300 bg-transparent py-4 ${props.logo ? "pl-10" : "pl-5"}  text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-yellow-500 focus:outline-none`}
      />
      {props.type === 'password' && <div className="absolute inset-y-1 right-4 flex justify-end">
        <button onClick={handleShowPass}>
          <img className='w-5' src={showPass ? eyeOff : eyeOn} alt="" />
        </button>
      </div>}
    </div>
  )
}

export default Input