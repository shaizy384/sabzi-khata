import React from 'react'
import Message from './Message'

const ChatSection = () => {
    const messages = [
        {
            id: 1,
            msg: "Hi",
            sender: true,
        },
        {
            id: 2,
            msg: "Hi",
            sender: false,
        },
        {
            id: 3,
            msg: "I want to send cycle",
            sender: true,
        },
        {
            id: 4,
            msg: "Sure, let me know further details",
            sender: false,
        },
        {
            id: 5,
            msg: "wait a minute",
            sender: true,
        },
        {
            id: 4,
            msg: "Sure, let me know further details",
            sender: false,
        },
        {
            id: 5,
            msg: "wait a minute",
            sender: true,
        },
        {
            id: 4,
            msg: "Sure, let me know further details",
            sender: false,
        },
        {
            id: 5,
            msg: "wait a minute",
            sender: true,
        },
    ]
    return (
        <>
            <div className="flex flex-col md:w-2/5 w-full sm:h-[625px] h-[430px] rounded-2xl bg-white shadow">
                <h1 className='font-semibold border-b p-4'>Chat</h1>
                <div className='flex flex-col justify-between p-4 overflow-y-auto'>
                    {messages.map(msg => {
                        return <Message key={msg.id} {...msg} />
                    })}
                </div>
            </div>
        </>
    )
}

export default ChatSection