import React from 'react'

const NotificationItem = ({ title, desc }) => {
    return (
        <div className="w-full flex justify-between items-center bg-white rounded-md shadow-sm p-3 md:pe-6 mb-3">
            <div className="">
                <h1 className='font-medium text-colorPrimary text-lg'>{title}</h1>
                <h2 className='text-sm'>{desc}</h2>
            </div>
            <div>
                <h1 className='cursor-pointer sm:text-sm ms-3'>View</h1>
            </div>
        </div>
    )
}

export default NotificationItem