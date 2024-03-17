import React from 'react'
import logo from "../../../assets/svgs/logo.svg"
import Input from "../../../components/ui/Input";
import email from '../../../assets/svgs/mail.svg';
import { Link } from 'react-router-dom';
const EmailForm = () => {
  return (
    //     <div className="md:w-1/2 w-screen  bg-white h-screen flex justify-center items-center flex-col "> 
    //     <div className=" md:hidden flex h-auto rounded-lg bg-gray-700 p-6 mb-5 ">
    //     <img src={logo} alt="Logo" className="w-32 h-16" />
    //   </div>
    //       <div className="md:mx-4">
    //       <h1 className="font-bold flex  text-2xl text-slate-900">
    //       Reset your password
    //       </h1>
    //       <h3 className="text-slate-500 group relative flex gap-1.5 justify-center py-4 sm:w-96 w-full">
    //       Enter the email address associated with your account and we will send you a link to reset your password.
    // </h3>
    //     <Input type={'email'} logo={email} placeholder={'Email address'}/>
    //     <button className="mt-6 cursor-pointer group relative flex gap-1.5 justify-center py-4 bg-yellowPrimary sm:w-96 w-full  text-[#f1f1f1] rounded-xl  hover:bg-[#E99F01] transition font-semibold ">
    // Continue
    // </button>
    //       </div>
    //     </div>

    <div className="md:w-1/2 w-screen md:mx-auto   bg-white h-screen flex justify-center items-center flex-col mx-10">
      <div className=" md:hidden flex h-auto rounded-lg bg-gray-700 p-6 mb-5 ">
        <img src={logo} alt="Logo" className="w-32 h-16" />
      </div>
      <div className="md:mx-4">
        <h1 className="font-bold flex  text-2xl text-slate-900">
          Reset your password
        </h1>
        <h3 className="text-slate-500 group relative flex gap-1.5 justify-center py-4 sm:w-96 w-full">
          Enter the email address associated with your account and we will send you a link to reset your password.
        </h3>
        <Input type={'email'} logo={email} placeholder={'Email address'} />

        <button className="  mt-6 cursor-pointer group relative flex gap-1.5 justify-center py-4 bg-yellowPrimary sm:w-96 w-full bg-opacity-80 text-white rounded-xl  hover:bg-[#E99F01] transition font-bold ">
          Send
        </button>
        <div className="flex justify-center">
          <div className="">
            <Link to={`/`} className="mt-3 px-2s flex flex-wrap text-yellowPrimary hover:text-[#E99F01] items-center justify-center">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailForm