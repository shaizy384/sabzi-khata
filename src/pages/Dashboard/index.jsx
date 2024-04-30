import React from 'react'
import DashboardCards from './DashboardCards'
import IncomeGraph from './IncomeGraph'
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="px-4 py-6 rounded-lg bg-gray-50">
                <div className="bg-gray-50 text-gray-90 font-semibold text-2xl ml-2 mb-3 text-colorPrimary">{t("Customers Analytics")}</div>
                <DashboardCards customerType={true} />
                <div className="bg-gray-50 text-gray-90 font-semibold text-2xl ml-2 mb-3 mt-4 text-colorPrimary">{t('Suppliers Analytics')}</div>
                <DashboardCards customerType={false} />
                {/* <IncomeGraph /> */}
            </div>
        </>
    )
}

export default Dashboard