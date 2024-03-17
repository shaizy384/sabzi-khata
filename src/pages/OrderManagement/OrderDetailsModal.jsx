import React from 'react'

const OrderDetailsModal = () => {
    return (
        <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-2xl shadow">
                <div className="flex items-center justify-between  bg-[#FBAF43] p-4 md:p-5 border-b rounded-t-2xl">
                    <h3 className="text-xl font-semibold  text-white">
                        Order Details
                    </h3>
                    <button type="button" className="text-white bg-transparent hover:bg-white hover:text-gray-900 rounded-lg text-sm w-12 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                        Close
                    </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                    <p className="text-base leading-relaxed text-gray-500">
                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500">
                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                    </p>
                </div>
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                    <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">I accept</button>
                    <button data-modal-hide="default-modal" type="button" className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Decline</button>
                </div>
            </div>
        </div>
    )
}

export default OrderDetailsModal