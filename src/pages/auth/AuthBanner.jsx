import React from 'react'
import logo from "../../assets/images/veg-cal-logo4.png";
const AuthBanner = () => {
  return (
    <>
      <div className="hidden bg-[#2cb766] md:w-1/2 w-screen md:flex md:items-center md:justify-center">
        <div className="flex justify-center items-center rounded-lg bg-[#53fd99] h-[inherit md:mx-10 px-4 py-3 mt-3 w-[90%] h-[79%]">
          <img src={logo} alt="Logo" className="w-[83%]" />
        </div>
      </div>
    </>
  )
}

export default AuthBanner