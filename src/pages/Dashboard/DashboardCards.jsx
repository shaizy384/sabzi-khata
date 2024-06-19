import React from 'react'
import PersonsSvg from './PersonsSvg'
import MoneySvg from './MoneySvg'
import { useTranslation } from 'react-i18next'

const SkeletonLoader = () => (
    <div className="flex justify-between items-center animate-pulse bg-white shadow p-6 h-[129px] rounded-xl">
        <div className="flex flex-col">
            <div className="bg-gray-200 h-12 w-12 mb-4 rounded-lg"></div>
            <div className="bg-gray-200 h-6 w-24 rounded-lg"></div>
        </div>
        <div className="bg-gray-200 h-12 w-16 rounded-lg"></div>
    </div>
);

const DashboardCards = ({ isCustomer, stats, loading }) => {
    const { t } = useTranslation();
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
                                    <h1 className="text-3xl text-black font-medium">{stats?.total_amount}</h1>
                                </div>
                                <MoneySvg color={"#8280FF"} type="total" />
                            </div>
                            <div className="flex justify-between rounded-xl bg-white shadow p-6 h-[129px]">
                                <div className="flex flex-col justify-between h-full">
                                    <h6 className="text-gray-500 text-xl pr-1">{t(`Total ${isCustomer ? 'Customers' : 'Suppliers'}`)}</h6>
                                    <h1 className="text-3xl text-black font-medium">{stats?.total_persons}</h1>
                                </div>
                                <PersonsSvg color={"#FBAF43"} />
                            </div>
                            <div className="flex justify-between rounded-xl bg-white shadow p-6 h-[129px]">
                                <div className="flex flex-col justify-between h-full">
                                    <h6 className="text-gray-500 text-xl pr-1">{t(`Today ${isCustomer ? "Sale" : "Purchase"}`)}</h6>
                                    <h1 className="text-3xl text-black font-medium">{stats?.today_sale}</h1>
                                </div>
                                <MoneySvg color={"#E63E36"} type="sale" />
                            </div>
                            <div className="flex justify-between rounded-xl bg-white shadow p-6 h-[129px]">
                                <div className="flex flex-col justify-between h-full">
                                    <h6 className="text-gray-500 text-xl pr-1">{t(`Amount ${isCustomer ? "Recieved" : "Paid"}`)}</h6>
                                    <h1 className="text-3xl text-black font-medium">{stats?.amount_received}</h1>
                                </div>
                                <MoneySvg color={"#50B948"} type={isCustomer ? 'recieved' : 'paid'} />
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default DashboardCards