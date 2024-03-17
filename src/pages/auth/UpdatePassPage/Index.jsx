import React from 'react'
import AuthBanner from '../AuthBanner'
// import EmailForm from '../emailPage/EmailForm'
// import LoginForm from '../LoginPage/LoginForm'
import UpdatePassForm from './UpdatePassForm'
const UpdatePasswordPage = () => {
  return (
    <div className="w-screen  flex h-screen flex-wrap flex-row">
      {/* left Section */}
      <AuthBanner/>
      {/* right Section */} 
      <UpdatePassForm/>
    </div>
  )
}

export default UpdatePasswordPage