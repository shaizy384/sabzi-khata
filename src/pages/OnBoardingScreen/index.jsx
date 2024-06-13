import React from 'react'
import onBoardingLogo from '../../assets/images/veg-cal-logo4.png'
import { useSelector } from 'react-redux';

const OnBoardingScreen = () => {
    const name = useSelector((state) => state.userReducer.getUser?.data?.name);
    return (
        <div className="px-4 py-6 sm:h-[80vh] h-[70vh] mt-5 mx-10 rounded-lg flex bg-colorPrimary justify-center items-center">
            <div className="flex flex-col sm:mx-14 mx-8 ">
                <h1 className='text-white text-2xl mb-5'>Hi, <span className='text-white capitalize font-semibold'>{name}</span> welcome to</h1>
                <img src={onBoardingLogo} alt="onBoarding-logo" width={600} />
            </div>
        </div>
    )
}

export default OnBoardingScreen