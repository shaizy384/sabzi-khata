import React, { useState } from 'react'
import logo from "../../../assets/images/veg-cal-logo1.png"
import Input from "../../../components/ui/Input";
import email from '../../../assets/svgs/mail.svg';
import lock from '../../../assets/svgs/lock.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { loginUser } from '../../../redux/auth/action';
import Loader from "../../../assets/gifs/loader.gif";

const LoginForm = () => {
  const dispatch = useDispatch()
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const [data, setData] = useState({ email: "", password: "" });
  const loading = useSelector((state) => state.authReducer?.loading);

  const handleOnChange = (value, name) => {
    setData({ ...data, [name]: value })
  }
  const handleSubmit = async () => {
    if (loading) return;
    if (!data?.email || !data?.password) {
      toast.error("All fields are reqiured")
    } else if (!emailPattern.test(data?.email)) {
      toast.error("Email is invalid")
    } else if (data?.password.length < 8) {
      toast.error("Password must contains atleast 8 characters")
    } else if (data?.email && data?.password) {
      console.log(data);
      dispatch(loginUser(data))
    }
  };
  return (
    <div className="md:w-1/2 w-screen  bg-white h-screen flex justify-center items-center flex-col ">
      <div className="md:w-auto w-[85%]">
        <div className="md:hidden flex h-auto mb-5">
          <img src={logo} alt="Logo" className="w-[180px w-[150px] mx-auto" />
        </div>
        <div className="md:mx-4 mt-2">
          <h1 className="font-bold md:flex text-2xl text-slate-900 hidde">
            Sign In to your Account
          </h1>
          <h3 className="mt- text-slate-500 md:text-left text-cente">
            Welcome back! please enter your details
          </h3>
          <Input type={'email'} logo={email} placeholder={'Email address'} onChange={handleOnChange} />
          <Input type={'password'} logo={lock} placeholder={'Password'} onChange={handleOnChange} />
          {/* <div className="flex justify-between">
            <div className="">
              <label className="mt-3 px-2 flex flex-wrap text-black items-center justify-center">
                <input className="transition-all duration-500 ease-in-out w-5 " type="checkbox" />
                Remember me
              </label>
            </div>
            <div className="">
              <Link to={`/updatepassword`} className="cursor-pointer mt-3 px-2s flex flex-wrap text-colorPrimary hover:text-hoverPrimary items-center justify-center">
                Update password
              </Link>
            </div>
          </div> */}
          <button className={`h-12 font-bold mt-3 cursor-pointer group relative flex gap-1.5 items-center justify-center ${loading ? "py-2" : "py-4"} bg-colorPrimary md:w-96 w-full bg-opacity-80 text-white rounded-xl hover:bg-hoverPrimary hover:shadow-lg transition`} onClick={handleSubmit}>
            {loading ? <img className="h-8" src={Loader} alt="loader" /> : "Sign In"}
          </button>
          <p className="mt-3 mb-8 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to="/signup" className="font-semibold leading-6 text-colorPrimary">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm