import React, { useEffect } from 'react'
import DashboardCards from './DashboardCards'
import IncomeGraph from './IncomeGraph'
// import { useDispatch, useSelector } from 'react-redux';
// import { dashboardData } from '../../redux/dashboard/action';

const Dasboard = () => {
  // const dispatch = useDispatch();
  // const data = useSelector((state) => state.dashboardDataReducer?.data);
  // const isAuthorized = useSelector((state) => state.authReducer.isAuthenticated);
  // useEffect(() => {
  //   if (data === null && isAuthorized) {
  //     dispatch(dashboardData());
  //   }
  // }, [data, isAuthorized]);

  return (
    <>
      <div className="px-4 py-6 rounded-lg bg-gray-50">
        {/* <DashboardCards />
        <IncomeGraph /> */}
      </div>
    </>
  )
}

export default Dasboard