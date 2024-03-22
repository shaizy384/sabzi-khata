import React from 'react'
import ProviderPersonalDetails from '../Supplier/ProviderPersonalDetails'
import Modal from '../Supplier/Modal'
import Breadcrumbs from '../../components/ui/Breadcrumbs'
import SettingsForm from './SettingsForm'
import notification from "../../assets/svgs/notification.svg";
import AuthenticationMethod from './AuthenticationMethod'
import gmail from "../../assets/svgs/gmail.svg";
import facebook from "../../assets/svgs/facebook.svg";
import apple from "../../assets/svgs/apple.svg";
import NotificationModal from './NotificationModal'
import { useNavigate } from 'react-router'

const UserAppSettings = () => {
  const navigate = useNavigate()
  const auths = [
    {
      id: 1,
      title: "Google Gmail Authentication",
      icon: gmail,
    },
    {
      id: 2,
      title: "Facebook Account Authentication",
      icon: facebook,
    },
    {
      id: 3,
      title: "Apply ID Authentication",
      icon: apple,
    },
  ]
  return (
    <div className="py-1 rounded-lg bg-gray-50">
      <div className='mx-10 mt-10 flex justify-between  lg:flex-row flex-col'>
        <Breadcrumbs home="Service Provider" child="Provider Details" />
        <div className='flex flex-wrap justify-end mt-3 gap-2'>
          <button className={`bg-red-600 items-center justify-between flex hover:bg-red-700 text-white  py-2 px-4 rounded`} onClick={() => navigate("/userappsettings/blockedusers")}>
            <svg className='mr-2' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.364 5.63604C19.9926 7.26472 21 9.51472 21 12C21 16.9706 16.9706 21 12 21C9.51472 21 7.26472 19.9926 5.63604 18.364M18.364 5.63604C16.7353 4.00736 14.4853 3 12 3C7.02944 3 3 7.02944 3 12C3 14.4853 4.00736 16.7353 5.63604 18.364M18.364 5.63604L5.63604 18.364" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            View Blocked Users
          </button>
          <NotificationModal />
        </div>
      </div>
      <div className="shadow-md my-4 rounded-xl bg-white mx-10 p-4">
        <h1 className='text-lg font-bold'>Onboarding Screens</h1>
        <SettingsForm />
        <SettingsForm />
        <SettingsForm />
      </div>
      <div className="shadow-md my-6 rounded-xl bg-white mx-10 p-5">
        <h1 className='text-lg font-bold mb-4'>Authentications</h1>
        {auths.map(auth => {
          return <AuthenticationMethod key={auth.id} {...auth} />
        })}
      </div>
    </div>
  )
}

export default UserAppSettings