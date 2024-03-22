import React, { useState } from 'react'
import deUser from "../../assets/svgs/deactivate-user.svg"
import service from "../../assets/svgs/service-provider.svg"
import deservice from "../../assets/svgs/deactivate-service-provider.svg"
import admin from "../../assets/svgs/admin.svg"
import PieChartComponent from './PieChart'
const SkeletonLoader = () => (
    <div className="flex justify-between items-center animate-pulse bg-gray-300 rounded shadow p-6 h-[151px]">
        <div className="flex flex-col">
            <div className="bg-gray-400 h-12 w-12 mb-4 rounded"></div>
            <div className="bg-gray-400 h-6 w-24"></div>
        </div>
        <div className="bg-gray-400 h-12 w-16"></div>
    </div>
);
const DashboardCards = () => {
    const [loading, setLoading] = useState(false);
    return (
        <>
            <div className='lg:flex lg:flex-row mx-2  '>
                <div className="lg:w-2/3 w-full grid xl:grid-cols-2 md:grid-cols-1 md:w-full lg:grid-cols-2  gap-4 mb-4">
                    {loading ?
                        <>
                            <SkeletonLoader />
                            <SkeletonLoader />
                            <SkeletonLoader />
                            <SkeletonLoader />
                            <SkeletonLoader />
                            <SkeletonLoader />
                        </>
                        :

                        <>
                            <div className="flex items-center justify-between rounded-xl bg-white shadow p-6 h-[151px]">
                                <div className="flex flex-col">
                                    <img src={deUser} alt="users" width={39} />
                                    <h6 className="text-gray-500 text-xl mt-4">Total Amount</h6>
                                </div>
                                <h1 className="text-3xl text-black font-medium">30k</h1>
                            </div>
                            <div className="flex items-center justify-between rounded-xl bg-white shadow p-6 h-[151px]">
                                <div className="flex flex-col">
                                    <img src={deUser} alt="users" width={39} />
                                    <h6 className="text-gray-500 text-xl mt-4">Total Customers</h6>
                                </div>
                                <h1 className="text-3xl text-black font-medium">48</h1>
                            </div>
                            <div className="flex items-center justify-between rounded-xl bg-white shadow p-6 h-[151px]">
                                <div className="flex flex-col">
                                    <img src={deservice} alt="users" width={39} />
                                    <h6 className="text-gray-500 text-xl mt-4">Deactivate Customers</h6>
                                </div>
                                <h1 className="text-3xl text-black font-medium">30k</h1>
                            </div>
                            <div className="flex items-center justify-between rounded-xl bg-white shadow p-6 h-[151px]">
                                <div className="flex flex-col">
                                    <img src={service} alt="users" width={39} />
                                    <h6 className="text-gray-500 text-xl mt-4">Total Suppliers</h6>
                                </div>
                                <h1 className="text-3xl text-black font-medium">30k</h1>
                            </div>
                            <div className="flex items-center justify-between rounded-xl bg-white shadow p-6 h-[151px]">
                                <div className="flex flex-col">
                                    <img src={deservice} alt="users" width={39} />
                                    <h6 className="text-gray-500 text-xl mt-4">Deactivate Suppliers</h6>
                                </div>
                                <h1 className="text-3xl text-black font-medium">30k</h1>
                            </div>
                            <div className="flex items-center justify-between rounded-xl bg-white shadow p-6 h-[151px]">
                                <div className="flex flex-col">
                                    <img src={admin} alt="users" width={39} />
                                    <h6 className="text-gray-500 text-xl mt-4">Admins</h6>
                                </div>
                                <h1 className="text-3xl text-black font-medium">30k</h1>
                            </div>
                        </>
                    }
                </div>
                <div className="bg-white sm:ml-4 w-full  lg:w-1/3 rounded-xl shadow">
                    <div className='text-xl mt-8 mx-8'>
                        Order Status
                    </div>
                    <PieChartComponent />
                    <div className='flex mx-8 items-center my-2'>
                        <div className='bg-[#2D9D46] text-red p-2 rounded-full w-5 h-5 mr-2'></div>
                        <span className='text-lg'>
                            Completed
                        </span>

                    </div>
                    <div className='flex mx-8 items-center my-2'>
                        <div className='bg-[#2cb766]   text-red p-2 rounded-full w-5 h-5 mr-2'></div>
                        <span className='text-lg'>
                            Pending
                        </span>

                    </div>
                    <div className='flex mx-8 items-center my-2'>
                        <div className='bg-[#E63E36]  text-red p-2 rounded-full w-5 h-5 mr-2'></div>
                        <span className='text-lg'>
                            Cancelled
                        </span>

                    </div>
                </div>
            </div>



        </>
    )
}

export default DashboardCards