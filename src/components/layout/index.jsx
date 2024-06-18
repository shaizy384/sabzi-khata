import React from 'react'
import SideBar from './SideBar'
import NavBar from './NavBar'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'

const Layout = ({ children }) => {
  const isAuthorized = useSelector((state) => state.authReducer.isAuthenticated);
  // const auth = useSelector(state => state.navbarTitleReducer.auth)
  // const auth = false
  // if (!localStorage.getItem("AUTH_USER"))
  if (!isAuthorized) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <SideBar />
      <div className="ltr:sm:ml-64 rtl:sm:mr-64 bg-gray-50">
        <NavBar />
        <div className="h-screen bg-gray-50">
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout