import React, { useEffect } from 'react'
import DashboardCards from './DashboardCards'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
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