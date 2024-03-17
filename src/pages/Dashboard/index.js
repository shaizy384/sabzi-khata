import React from 'react'
import DashboardCards from './DashboardCards'
import IncomeGraph from './IncomeGraph'

const Dasboard = () => {
    return (
        <>
            <div className="px-4 py-6 rounded-lg bg-gray-50">
            <DashboardCards />
                <IncomeGraph />
                
            </div>
        </>
    )
}

export default Dasboard