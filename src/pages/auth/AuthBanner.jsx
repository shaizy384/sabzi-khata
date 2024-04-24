import React from 'react'
// import logo from "../../assets/svgs/logo.svg"
import logo from "../../assets/images/sabzi2.png"
const AuthBanner = () => {
  return (
    <>
      <div className="hidden bg-[#2cb766] md:w-1/2 w-screen md:block md:flex md:items-center md:justify-center ">
      {/* <div className="hidden bg-black md:w-1/2 w-screen md:block md:flex md:items-center md:justify-center "> */}
        {/* <div className="flex justify-center items-center max-h-60 xl:h-96 rounded-lg bg-[#3B3B3B] lg:h-72 md:h-56 md:mx-10 px-10">dk, */}
        <div className="flex justify-center items-center rounded-lg bg-[#219551] h-[inherit] md:mx-10 px-10 py-8">
          <img src={logo} alt="Logo" className="w-[50%]" />
          {/* <img src={logo} alt="Logo" className="w-9/12 h-5/6" /> */}
        </div>
      </div>
      {/* <div className="hidden bg-[#252525] md:w-1/2 w-screen md:block md:flex md:items-center md:justify-center "> */}
      {/* <div className="flex justify-center items-center max-h-60 xl:h-96 rounded-lg bg-[#dddcdc] lg:h-72 md:h-56 md:mx-10 "> */}
      {/* <div className="flex justify-center items-center w-full rounded-lg bg-[#dddcdc] md:mx-10 ">
          <img src={logo} alt="Logo" className="w-[55%] mt-5" />
        </div>
      </div> */}
      {/* 
        <div className="hidden bg-[#27ae60] md:w-1/2 w-screen md:flex items-center">
          <div className="flex flex-col justify-center items-center rounded-lg bg-[#2ecc71] h-[90%] w-[90%] m-auto">
            <div className="w-9/12 items-center">
              <img src={logo} alt="Logo" className="w-full h-" /> */}
      {/* <img src={organizational} alt="organizational" className="w-1/3 mt-4 text-end ml-auto" /> */}
      {/* </div>
          </div>
        </div> */}
    </>
  )
}

export default AuthBanner