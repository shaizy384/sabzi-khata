import React from 'react'
import DashboardCards from './DashboardCards'
import IncomeGraph from './IncomeGraph'

const Dashboard = () => {
    return (
        <>
            <div className="px-4 py-6 rounded-lg bg-gray-50">
                <div className="bg-gray-50 text-gray-90 font-semibold text-2xl ml-2 mb-3 text-colorPrimary">Customers Analytics</div>
                <DashboardCards customerType={true} />
                <div className="bg-gray-50 text-gray-90 font-semibold text-2xl ml-2 mb-3 mt-4 text-yellowPrimary">Suppliers Analytics</div>
                <DashboardCards customerType={false} />
                {/* <IncomeGraph /> */}
            </div>
        </>
    )
}

export default Dashboard