import React, { useEffect } from 'react'
import DashboardCards from './DashboardCards'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerStats } from '../../redux/customers/action';
import { getSupplierStats } from '../../redux/suppliers/action';

const Dashboard = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const customerStats = useSelector((state) => state.customersReducer.getCustomerStats?.data);
    const customerLoading = useSelector((state) => state.customersReducer.getCustomerStats?.loading);
    const supplierStats = useSelector((state) => state.suppliersReducer.getSupplierStats?.data);
    const supplierLoading = useSelector((state) => state.customersReducer.getCustomerStats?.loading);
    useEffect(() => {
        if (!customerStats) {
            dispatch(getCustomerStats())
        }
    }, [customerStats])
    useEffect(() => {
        if (!supplierStats) {
            dispatch(getSupplierStats())
        }
    }, [supplierStats])
    console.log("customerStats supplierStats: ", customerStats, supplierStats);
    return (
        <>
            <div className="px-4 py-6 rounded-lg bg-gray-50">
                <div className="bg-gray-50 text-gray-90 font-semibold text-2xl ml-2 mb-3 text-colorPrimary">{t("Customers Analytics")}</div>
                <DashboardCards isCustomer={true} stats={customerStats} loading={customerLoading} />
                <div className="bg-gray-50 text-gray-90 font-semibold text-2xl ml-2 mb-3 mt-4 text-colorPrimary">{t('Suppliers Analytics')}</div>
                <DashboardCards isCustomer={false} stats={supplierStats} loading={supplierLoading} />
            </div>
        </>
    )
}

export default Dashboard