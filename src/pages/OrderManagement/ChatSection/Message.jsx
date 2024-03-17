import React from 'react'

const Message = ({ msg, sender }) => {
    const img1 = 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    const img2 = 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?q=80&w=1514&h=1514&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    return (
        <>
            <div className={"flex min-w-0 gap-x-4 my-3 " + (sender && "justify-end")}>
                <img className={"h-12 w-12 flex-none rounded-full bg-gray-50 " + (sender && "order-1")} src={sender ? img2 : img1} alt="" />
                <div className="min-w-0">
                    <div className={"pt-2 px-2 pb-0.5 rounded-lg min-w-[83px] max-w-[203px] " + (sender ? "bg-yellow-300" : "bg-gray-200")}>
                        <p className="text-md leading-6 xl:pe-6 pe-2">{msg}</p>
                        <p className="text-end truncate text-xs leading-5">09:34 PM</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Message