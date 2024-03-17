import React from 'react'
import { NavLink } from 'react-router-dom'

const UserCard = ({ label, value,Link }) => {
  return (
    <NavLink to={Link} className='cursor-pointer '>
      <div className="flex items-center hover:shadow-xl  justify-between rounded-xl bg-white shadow border-2 border-gray-400 p-6 h-[151px]">
        <div className="flex flex-col">
          <h1 className="text-5xl text-black font-medium mb-3">{value}</h1>
          <h5 className="text-black text-xl font-semibold ">{label}</h5 >
        </div>
      </div>
    </NavLink>
  )
}

export default UserCard