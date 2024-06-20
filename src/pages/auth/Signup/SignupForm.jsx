import React, { useState } from "react";
import Loader from "../../../assets/gifs/loader.gif";
import Input from "../../../components/ui/Input";
import lock from "../../../assets/svgs/lock.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import blackLogo from "../../../assets/images/veg-cal-logo2.png"
import { toast } from "react-toastify";
import { signupUser } from "../../../redux/auth/action";

const SignupForm = () => {
  const dispatch = useDispatch();
  // const [rememberMe, setRememberMe] = useState(false);
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;  //eslint-disable-line
  const [data, setData] = useState({ fullName: "", email: "", password: "", password_confirmation: "" });
  const loading = useSelector((state) => state.authReducer?.loading);

  const handleOnChange = (value, name) => {
    setData({ ...data, [name]: value })
    console.log(data);
  }

  // const handleRememberMeChange = () => {
  //   setRememberMe(!rememberMe);
  // };

  const handleSubmit = async () => {
    if (loading) return;
    if (!data.fullName || !data?.email || !data?.password || !data?.password_confirmation) {
      toast.error("All fields are reqiured")
    } else if (!emailPattern.test(data?.email)) {
      toast.error("Email is invalid")
    } else if (data?.password.length < 8) {
      toast.error("Password must contains atleast 8 characters")
    } else if (data?.password !== data?.password_confirmation) {
      toast.error("Confirm password doesn't match the original password")
    } else if (data.fullName && data?.email && data?.password && data?.password_confirmation) {
      dispatch(signupUser(data))
    }
  };
  return (
    <div className="md:w-1/2 w-screen bg-white">
      <div className="flex justify-center items-center flex-col h-full">
        <div className="md:w-auto w-[85%]">
          <div className="md:hidden flex h-auto mb-3">
            <img src={blackLogo} alt="Logo" className="w-[150px] mx-auto" />
          </div>
          <div className="md:mx-4">
            <h1 className="font-bold  text-2xl text-slate-900 md:flex hidden">
              Sign Up to your Account
            </h1>
            <h3 className="mt- text-slate-500 md:text-left text-center">
              Welcome! please enter your details to signup
            </h3>
            <Input
              type={"fullName"}
              placeholder={"Full Name"}
              value={data?.fullName}
              onChange={handleOnChange}
            />
            <Input
              type={"email"}
              placeholder={"Email address"}
              value={data?.email}
              onChange={handleOnChange}
            />
            <Input
              type={"password"}
              logo={lock}
              placeholder={"Password"}
              value={data?.password}
              onChange={handleOnChange}
            />
            <Input
              type={"password"}
              name={"password_confirmation"}
              logo={lock}
              placeholder={"Confirm Password"}
              value={data?.password_confirmation}
              onChange={handleOnChange}
            />
            {/* <div className="flex justify-between">
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
                  className="cursor-pointer mt-3 px-2s flex flex-wrap text-colorPrimary  hover:text-hoverPrimary items-center justify-center"
                >
                  Forgot password
                </Link>
              </div>
            </div> */}

            <button className={`h-12 font-bold mt-3 cursor-pointer group relative flex gap-1.5 items-center justify-center ${loading ? "py-2" : "py-4"} bg-colorPrimary md:w-96 w-full bg-opacity-80 text-white rounded-xl hover:bg-hoverPrimary hover:shadow-lg transition `} onClick={handleSubmit}>
              {loading ? <img className="h-8" src={Loader} alt="loader" /> : "Sign Up"}
            </button>
            <p className="mt-3 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <Link to="/" className="font-semibold leading-6 text-colorPrimary">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupForm;
