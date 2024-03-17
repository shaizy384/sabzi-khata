import React, { useRef, useState } from "react";
import Loader from "../../../assets/gifs/loader.gif";
import Input from "../../../components/ui/Input";
import email from "../../../assets/svgs/mail.svg";
import lock from "../../../assets/svgs/lock.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import blackLogo from "../../../assets/images/Sabzi-png.png"
import { login } from "../../../redux/navbarTitle/action";

const SignupForm = ({ data, setData, formType, setFormType }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const allInpRef = useRef('')
  const numRef = useRef('')
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const cPasswordRef = useRef('')
  const [cPassword, setCPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  // const loading = useSelector((state) => state.authReducer.loading);
  const loading = false;

  const handleChange = (value, name) => {
    setData({ ...data, [name]: value })
    console.log(data);
    cPasswordRef.current.innerText = ""
    passwordRef.current.innerText = ""
    emailRef.current.innerText = ""
    numRef.current.innerText = ""
  };

  const handleCPassword = (value) => {
    setCPassword(value);
    cPasswordRef.current.innerText = ""
    passwordRef.current.innerText = ""
    emailRef.current.innerText = ""
    numRef.current.innerText = ""
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };
  const handleSubmit = async (e) => {
    dispatch(login())
    navigate("/dashboard")
    // emailRef.current.style.color = "red"    //change email error color to red
    // passwordRef.current.style.color = "red"    //change password error color to red
    // cPasswordRef.current.style.color = "red"    //change password error color to red
    // allInpRef.current.style.display = "none"
    // if (!data.phone || !data?.email || !data?.password || !cPassword) {
    //   allInpRef.current.style.display = "block"
    // }
    // else if (data?.password.length < 8 && !emailPattern.test(data?.email)) {
    //   emailRef.current.innerText = "Email is invalid"
    //   passwordRef.current.innerText = "Password must contains atleast 8 characters"
    // }
    // else if (!emailPattern.test(data?.email)) {
    //   emailRef.current.innerText = "Email is invalid"
    // }
    // else if (data?.password.length < 8 || cPassword.length < 8) {
    //   passwordRef.current.innerText = "Password must contains atleast 8 characters"
    //   cPasswordRef.current.innerText = "Password must contains atleast 8 characters"
    // }
    // else if (data?.password !== cPassword) {
    //   cPasswordRef.current.innerText = "Password doesn't match the original password"
    // }
    // else {
    //   console.log(data);
    //   console.log(cPassword);
    //   setFormType("company_details")
    // }
  };
  return (
    <div className="md:w-1/2 w-screen bg-white">
      <div className="flex justify-center items-center flex-col h-full">
        <div className="md:hidden flex h-auto mb-3">
          <img src={blackLogo} alt="Logo" className="w-32 h-16" />
        </div>
        <div className="md:mx-4">
          <h1 className="font-bold flex text-2xl text-slate-900">
            Sign Up to your Account
          </h1>
          <h3 className="mt- text-slate-500">
            Welcome! please enter your details
          </h3>
          <p className="text-red-500 -mb-5 mt-2 hidden" ref={allInpRef}>All fields are required*</p>
          <Input
            type={"phone"}
            placeholder={"Phone no"}
            value={data?.phone}
            onChange={handleChange}
          />
          <p className="text-dangers" ref={numRef}></p>
          <Input
            type={"email"}
            placeholder={"Email address"}
            value={data?.email}
            onChange={handleChange}
          />
          <p className="text-dangers" ref={emailRef}></p>
          <Input
            type={"password"}
            logo={lock}
            placeholder={"Password"}
            value={data?.password}
            onChange={handleChange}
          />
          <p className="text-danger" ref={passwordRef}></p>
          <Input
            type={"password"}
            name={"cPassword"}
            logo={lock}
            placeholder={"Confirm Password"}
            value={cPassword}
            onChange={handleCPassword}
          />
          <p className="text-danger" ref={cPasswordRef}></p>
          <div className="flex justify-between">
            <div className="">
              <label className="mt-3 gap-1 flex flex-wrap text-black items-center justify-center">
                <input
                  className="transition-all duration-500 ease-in-out w-5"
                  type="checkbox"
                  onChange={handleRememberMeChange}
                />
                Remember me
              </label>
            </div>
            <div className="">
              <Link
                to={`/forgotpassword`}
                className="cursor-pointer mt-3 px-2s flex flex-wrap text-yellowPrimary hover:text-[#E99F01] items-center justify-center"
              >
                Forgot password
              </Link>
            </div>
          </div>

          <button
            className={`h-12 font-bold mt-3 cursor-pointer group relative flex gap-1.5 items-center justify-center ${loading ? "py-2" : "py-4"}  bg-yellowPrimary sm:w-96 w-full bg-opacity-80 text-white rounded-xl  hover:bg-[#E99F01] transition `}
            onClick={() => handleSubmit(data?.email, data?.password)}
          >
            {
              loading ? <img className="h-8" src={Loader} alt="" />
                : "Sign Up"
            }
          </button>
          <p className="mt-3 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/" className="font-semibold leading-6 text-yellowPrimary">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignupForm;
