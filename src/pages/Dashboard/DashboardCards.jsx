import React, { useState } from 'react'
import deUser from "../../assets/svgs/deactivate-user.svg"
import service from "../../assets/svgs/service-provider.svg"
import deservice from "../../assets/svgs/deactivate-service-provider.svg"
import admin from "../../assets/svgs/admin.svg"
import PersonsSvg from './PersonsSvg'
import MoneySvg from './MoneySvg'
import { useTranslation } from 'react-i18next'

const SkeletonLoader = () => (
    <div className="flex justify-between items-center animate-pulse bg-gray-300 rounded shadow p-6 h-[151px]">
        <div className="flex flex-col">
            <div className="bg-gray-400 h-12 w-12 mb-4 rounded"></div>
            <div className="bg-gray-400 h-6 w-24"></div>
        </div>
        <div className="bg-gray-400 h-12 w-16"></div>
    </div>
);

const DashboardCards = ({ customerType }) => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    return (
        <>
            <div className='lg:flex lg:flex-row mx-2'>
                <div className="w-full grid xl:grid-cols-4 md:grid-cols-1 md:w-full lg:grid-cols-2  gap-4 mb-4">
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
                            <div className="flex justify-between rounded-xl bg-white shadow p-6 h-[129px]">
                                <div className="flex flex-col justify-between h-full">
                                    <h6 className="text-gray-500 text-xl pr-1">{t('Total Amount')}</h6>
                                    <h1 className="text-3xl text-black font-medium">30k</h1>
                                </div>
                                <MoneySvg color={"#8280FF"} type="total" />
                            </div>
                            <div className="flex justify-between rounded-xl bg-white shadow p-6 h-[129px]">
                                <div className="flex flex-col justify-between h-full">
                                    <h6 className="text-gray-500 text-xl pr-1">{t(`Total ${customerType ? 'Customers' : 'Suppliers'}`)}</h6>
                                    <h1 className="text-3xl text-black font-medium">30k</h1>
                                </div>
                                <PersonsSvg color={"#FBAF43"} />
                            </div>
                            <div className="flex justify-between rounded-xl bg-white shadow p-6 h-[129px]">
                                <div className="flex flex-col justify-between h-full">
                                    <h6 className="text-gray-500 text-xl pr-1">{t(`Today ${customerType ? "Sale" : "Purchase"}`)}</h6>
                                    <h1 className="text-3xl text-black font-medium">30k</h1>
                                </div>
                                <MoneySvg color={"#E63E36"} type="sale" />
                            </div>
                            <div className="flex justify-between rounded-xl bg-white shadow p-6 h-[129px]">
                                <div className="flex flex-col justify-between h-full">
                                    <h6 className="text-gray-500 text-xl pr-1">{t(`Amount ${customerType ? "Recieved" : "Paid"}`)}</h6>
                                    <h1 className="text-3xl text-black font-medium">30k</h1>
                                </div>
                                <MoneySvg color={"#50B948"} type={customerType ? 'recieved' : 'paid'} />
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default DashboardCards