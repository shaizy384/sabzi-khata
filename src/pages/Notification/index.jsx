import React from 'react'
import NotificationItem from './NotificationItem'

const Notification = () => {
    const notification = [
        {
            title: "Provider Request for id approval",
            desc: "Rehan with Email (abcd@gamil.com) has sent request for id approval"
        },
        {
            title: "Order Cancellation Request",
            desc: "Ahmed with Email (abcd@gamil.com) has sent request for order cancel. "
        },
        {
            title: "You Have blocked Ahmed Ali",
            desc: "Service Provider has blocked by you."
        },
    ]
    return (
        <div className="py-1 rounded-lg bg-gray-50">
            <div className='sm:mx-10 mx-6 mt-10 h-full'>
                {notification.map(item => {
                    return <NotificationItem {...item} />
                })}
            </div>
        </div>
    )
}

export default Notification