import React from 'react'
import logo from "../../../assets/svgs/logo.svg"
import Input from "../../../components/ui/Input";
import email from '../../../assets/svgs/mail.svg';
import lock from '../../../assets/svgs/lock.svg';
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/navbarTitle/action';
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className="md:w-1/2 w-screen  bg-white h-screen flex justify-center items-center flex-col ">
      <div className=" md:hidden flex h-auto rounded-lg bg-gray-700 p-6 mb-5 ">
        <img src={logo} alt="Logo" className="w-32 h-16" />
      </div>
      <div className="md:mx-4 ">
        <h1 className="font-bold flex  text-2xl text-slate-900">
          Sign In to your Account
        </h1>
        <h3 className="mt-2 text-slate-500">
          Welcome back! please enter your detail
        </h3>
        <Input type={'email'} logo={email} placeholder={'Email address'} />
        <Input type={'password'} logo={lock} placeholder={'Password'} />
        <div className="flex justify-between">
          <div className="">
            <label className="mt-3 px-2 flex flex-wrap text-black items-center justify-center">
              <input className=" transition-all duration-500 ease-in-out w-5 " type="checkbox" />
              Remember me
            </label>
          </div>
          <div className="">
            <Link to={`/updatepassword`} className="cursor-pointer mt-3 px-2s flex flex-wrap text-colorPrimary hover:text-[#E99F01] items-center justify-center">
              Update password
            </Link>
          </div>
        </div>
        <button className="font-bold mt-6 cursor-pointer group relative flex gap-1.5 justify-center py-4 bg-colorPrimary sm:w-96 w-full bg-opacity-80 text-white rounded-xl  hover:bg-[#219551] transition " onClick={() => { dispatch(login()); navigate("/dashboard") }}>
          Sign In
        </button>
        <p className="mt-3 mb-8 text-center text-sm text-gray-500">
          Not a member?{' '}
          <Link to="/signup" className="font-semibold leading-6 text-colorPrimary">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm