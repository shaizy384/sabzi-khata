import React from 'react'
import AuthBanner from '../AuthBanner'
import EmailForm from './EmailForm'

const EmailPage = () => {
  return (
    <div className="w-screen  flex h-screen flex-wrap flex-row">
    {/* left Section */}
    <AuthBanner/>
    {/* right Section */}
    {/* <LoginForm/> */}
    <EmailForm/>
  </div>
  )
}

export default EmailPage