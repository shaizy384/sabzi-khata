import React from 'react'
import logo from "../../../assets/svgs/logo.svg"
import Input from "../../../components/ui/Input";
import lock from '../../../assets/svgs/lock.svg';
import { Link } from 'react-router-dom';
const UpdatePassForm = () => {
  return (
    <div className="md:w-1/2 w-screen  bg-white h-screen flex justify-center items-center flex-col "> 
    <div className=" md:hidden flex h-auto rounded-lg bg-gray-700 p-6 mb-5 ">
    <img src={logo} alt="Logo" className="w-32 h-16" />
  </div>
      <div className="md:mx-4">
      <h1 className="font-bold flex  text-2xl text-slate-900">
      Sign In to your Account
      </h1>
      <h3 className="mt-2 text-slate-500">
      Welcome back! please enter your detail
      </h3>
    
    <Input type={'password'} logo={lock} placeholder={'Password'} />
    <Input type={'password'} logo={lock} placeholder={'Confirm Password'} />

    <button className="  mt-6 cursor-pointer group relative flex gap-1.5 justify-center py-4 bg-yellow-500 sm:w-96 w-full  text-white rounded-xl  hover:bg-[#E99F01] transition font-bold">
Done
</button>
      </div>

      <div className='mt-5'>
      <Link  to={`/`} className=" text-slate-500">
      Back to Login
      </Link>
      </div>
    </div>
  )
}

export default UpdatePassForm