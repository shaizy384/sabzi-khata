import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import basket from "../../assets/svgs/delete.svg";

export default function BlockConfirmationModal({ driver_id, approveDriver }) {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState("");
    useEffect(() => {
        window.location.href.split("/")[3] === "customers" ?
            setModalType("Customer") :
            setModalType("Supplier")
        console.log("modalType: ", modalType);
    }, [])

    const handleCancel = () => {
        setShowModal(false);
        // setData({})
    }

    const handleSubmit = () => {
        if (driver_id) {
            // approveDriver && dispatch(authorizeCompanyDriver({ driver_id, driver_status: VERIFY }))
            // !approveDriver && dispatch(authorizeCompanyDriver({ driver_id, driver_status: REJECTED }))
            handleCancel()
        }
    }
    return (
        <>
            {/* {<button onClick={() => setShowModal(true)} className={`w-full h-[39px] text-white rounded-full text-lg ${approveDriver ? 'bg-[#0DA06A]' : 'bg-red-500'}`}>
                <span className="flex mx-auto justify-center gap-1">{approveDriver ? 'Approve' : 'Reject'}
                    <span className="sm:block hidden">Driver</span>
                </span >
            </button> */}
            {<button onClick={() => setShowModal(true)} className={`bg-red-600 items-center justify-between flex hover:bg-red-700 text-white  py-2 px-4 rounded`}>
                <svg className='mr-2' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.364 5.63604C19.9926 7.26472 21 9.51472 21 12C21 16.9706 16.9706 21 12 21C9.51472 21 7.26472 19.9926 5.63604 18.364M18.364 5.63604C16.7353 4.00736 14.4853 3 12 3C7.02944 3 3 7.02944 3 12C3 14.4853 4.00736 16.7353 5.63604 18.364M18.364 5.63604L5.63604 18.364" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                Block {modalType}
            </button>}
            {
                showModal ? (
                    <>
                        <div
                            className="justify-center rounded-3xl items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative md:w-1/2 w-[95%] my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start rounded-t-3xl justify-center pt-5 mx-5 pb-3 border-b">
                                        <h3 className="text-3xl text-colorPrimary font-semibold">
                                            Block {modalType}
                                        </h3>
                                        <button
                                            className="p- ml-auto bg-transparent border-0 text-colorPrimary float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            ×
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        <div className="mb-4">
                                            <label htmlFor="default-input" className="block mb-2 text-lg font-semibold text- text-start">Do you want to block <span className="lowercase">{modalType}</span>?</label>
                                        </div>
                                        <div className="mb-2 pt-3 flex gap-3">
                                            <button
                                                className="bg-gray-200 hover:bg-gray-300 w-full text-gray-500 font-medium px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={handleCancel}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                className={` ${approveDriver ? 'bg-[#0DA06A]' : 'bg-red-500'} w-full text-white font-medium px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150`}
                                                type="button"
                                                onClick={handleSubmit}
                                            >
                                                Block {modalType}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null
            }
        </>
    );
}
