import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setCustomerStatus } from "../../redux/customers/action";
import { setSupplierStatus } from "../../redux/suppliers/action";

export default function BlockConfirmationModal({ id, type, person }) {
    const { t } = useTranslation();
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
    }

    const handleSubmit = () => {
        if (id) {
            type === 'supplier' && dispatch(setSupplierStatus(id))
            type === 'customer' && dispatch(setCustomerStatus(id))
            handleCancel()
        }
    }
    return (
        <>
            {person?.status === 1 &&
                <div className="group">
                    <button className={`bg-colorPrimary items-center justify-between flex hover:bg-green-600 text-white  py-2 px-4 rounded`}
                        onClick={handleSubmit}
                    >
                        <svg className="ltr:mr-2 rtl:ml-2 w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" /></svg>
                        {t("ACTIVE")}
                    </button>
                    <div className="tooltip z-10 hidden group-hover:block  bg-white px-2 py-1 rounded absolute mt-2 mr-2 shadow-lg">
                        <h1 className='text-black bg-white rounded mb-2 mt-2'>
                            <span className='font-bold'>{t("Press")}</span> {t("to")} <span className='font-bold text-red-600'>{t("BLOCK")}</span>
                        </h1>
                    </div>
                </div>
            }
            {person?.status === 0 &&
                <div className="group">
                    <button className={`bg-red-600 items-center justify-between flex hover:bg-red-700 text-white  py-2 px-4 rounded`}
                        onClick={handleSubmit}
                    >
                        <svg className='ltr:mr-2 rtl:ml-2' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.364 5.63604C19.9926 7.26472 21 9.51472 21 12C21 16.9706 16.9706 21 12 21C9.51472 21 7.26472 19.9926 5.63604 18.364M18.364 5.63604C16.7353 4.00736 14.4853 3 12 3C7.02944 3 3 7.02944 3 12C3 14.4853 4.00736 16.7353 5.63604 18.364M18.364 5.63604L5.63604 18.364" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                        {t("Blocked")}
                    </button>
                    <div className="tooltip z-10 hidden group-hover:block bg-white px-2 py-1 rounded absolute mt-2 mr-2 shadow-lg">
                        <h1 className='text-black bg-white rounded mb-2 mt-2'>
                            <span className='font-bold'>{t("Press")}</span> {t("to")} <span className='font-bold text-colorPrimary'>{t("ACTIVATE")}</span> {t(modalType)}
                        </h1>
                    </div>
                </div>
            }
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
                                                type="button"
                                                onClick={handleCancel}
                                                className="bg-gray-200 hover:bg-gray-300 w-full text-gray-500 font-medium px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleSubmit}
                                                className={` ${!id ? 'bg-[#0DA06A]' : 'bg-red-500'} w-full text-white font-medium px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150`}
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
