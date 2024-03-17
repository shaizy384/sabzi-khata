import React from 'react'
// import logo from "../../assets/svgs/logo.svg"
import logo from "../../assets/images/Sabzi-png.png"
const AuthBanner = () => {
  return (
    <div className="hidden bg-black md:w-1/2 w-screen md:block md:flex md:items-center md:justify-center ">
      {/* <div className="flex justify-center items-center max-h-60 xl:h-96 rounded-lg bg-[#dddcdc] lg:h-72 md:h-56 md:mx-10 "> */}
      <div className="flex justify-center items-center w-full rounded-lg bg-[#dddcdc] md:mx-10 ">
        <img src={logo} alt="Logo" className="w-[55%] mt-5" />
      </div>
    </div>
  )
}

export default AuthBanner