import React from 'react'
import SideBar from './SideBar'
import NavBar from './NavBar'
import Dasboard from '../../pages/Dashboard'
import OrderManagement from '../../pages/OrderManagement/Index'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'

const Layout = ({ children }) => {
  const auth = useSelector(state => state.navbarTitleReducer.auth)
  // const auth = false
  // if (!localStorage.getItem("AUTH_USER"))
  if (!auth) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <SideBar />
      <div className="sm:ml-64 bg-gray-50">
        <NavBar />
        <div className="h-screen bg-gray-50">
          {children}
          {/* <OrderManagement/> */}
        </div>
      </div>
    </>
  )
}

export default Layout