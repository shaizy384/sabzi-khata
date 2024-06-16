import React, { useEffect } from 'react'
import DashboardCards from './DashboardCards'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerStats } from '../../redux/customers/action';
import { getSupplierStats } from '../../redux/suppliers/action';
import { dashboardData } from '../../redux/dashboard/action';

const Dashboard = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const data = useSelector((state) => state.dashboardDataReducer?.data);
    const dataLoading = useSelector((state) => state.dashboardDataReducer?.loading);
    const isAuthorized = useSelector((state) => state.authReducer.isAuthenticated);
    
    useEffect(() => {
        if (!data && isAuthorized) {
            dispatch(dashboardData());
        }
    }, [data, isAuthorized]);

    console.log("stats: ", data);


    // const customerStats = useSelector((state) => state.customersReducer.getCustomerStats?.data);
    // const customerLoading = useSelector((state) => state.customersReducer.getCustomerStats?.loading);
    // const supplierStats = useSelector((state) => state.suppliersReducer.getSupplierStats?.data);
    // const supplierLoading = useSelector((state) => state.customersReducer.getCustomerStats?.loading);
    // useEffect(() => {
    //     if (!customerStats) {
    //         dispatch(getCustomerStats())
    //     }
    // }, [customerStats])
    // useEffect(() => {
    //     if (!supplierStats) {
    //         dispatch(getSupplierStats())
    //     }
    // }, [supplierStats])
    // console.log("customerStats supplierStats: ", customerStats, supplierStats);

    return (
        <>
            <div className="px-4 py-6 rounded-lg bg-gray-50">
                <div className="bg-gray-50 text-gray-90 font-semibold text-2xl ml-2 mb-3 text-colorPrimary">{t("Customers Analytics")}</div>
                <DashboardCards isCustomer={true} stats={data?.customerStats} loading={dataLoading} />
                <div className="bg-gray-50 text-gray-90 font-semibold text-2xl ml-2 mb-3 mt-4 text-colorPrimary">{t('Suppliers Analytics')}</div>
                <DashboardCards isCustomer={false} stats={data?.supplierStats} loading={dataLoading} />
            </div>
        </>
    )
}

export default Dashboard