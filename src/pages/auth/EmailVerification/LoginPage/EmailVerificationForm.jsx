import React from 'react'
import logo from "../../../../assets/svgs/logo.svg"
import emailverification from "../../../../assets/svgs/emailverification.svg"
import { Link } from 'react-router-dom';
const EmailVerficationForm = () => {
  return (
    <div className="md:w-1/2 md:mx-auto w-screen bg-white h-screen flex justify-center items-center flex-col mx-10 "> 
    <div className=" md:hidden flex h-auto rounded-lg bg-gray-700 p-6 mb-5 ">
    <img src={logo} alt="Logo" className="w-32 h-16" />
  </div>
  <div className="">
    <img src={emailverification} alt="Logo" className="w-64 mb-10" />
  </div>
      <div className="md:mx-4 text-center ">
      <h1 className="font-bold text-2xl text-slate-900">
      Verify your Email
      </h1>
      <h3 className="mt-2 text-slate-500">
      Thank you, check your email for instructions to reset your password
      </h3> 
   <div className='flex justify-center'>
   <button className="  mt-6 cursor-pointer group relative flex gap-1.5 justify-center py-4 bg-yellowPrimary sm:w-96 w-full bg-opacity-80 text-white rounded-xl  hover:bg-[#E99F01] transition font-bold ">
Skip Now
</button>
   </div>
  
<h3 className="mt-6 text-slate-500">
Don’t receive an email? <Link className='font-bold cursor-pointer' to={`/`}> Resend</Link>
      </h3> 
      </div>
    </div>
  )
}

export default EmailVerficationForm