import React, { useEffect, useRef, useState } from "react";
import money_icon from '../../assets/svgs/money.svg'
import { useTranslation } from "react-i18next";
import Input from "./Input";
import { addSale, addCustomerTransaction, updateCustomer, addCustomerCash } from "../../redux/customers/action";
import { useDispatch } from "react-redux";
import { addPurchase, addSupplierCash, addSupplierTransaction, updateSupplier } from "../../redux/suppliers/action";
import { toast } from "react-toastify";

export default function ModalAddCash({ isCustomer, person }) {
  const priceRef = useRef()
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({ amount_added: "", remaining_amount: "", previous_amount: "", amount_type: 'debit' });
  const [type, setType] = useState(null);
  const handleValue = (e) => {
    priceRef.current.style.display = "none"
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  // const path = window.location.href.split("/")[3]
  // console.log(path);
  useEffect(() => {
    if (person?.amount) {
      setData({ ...data, previous_amount: person?.amount })
    }
  }, [person])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value, remaining_amount: parseInt(data.previous_amount) - parseInt(e.target.value) })
    console.log(data);
    // emailRef.current.innerText = ""
    // passwordRef.current.innerText = ""
  };

  const handleSubmit = () => {
    // console.log("person cash flow: ", { ...person, amount: data?.remaining_amount });
    if (data?.previous_amount < data?.amount_added) {
      toast.error("Amount cannot be greater than Payable Amount")
    } else if (data?.amount_added < 1) {
      toast.error("Amount cannot be 0")

    } else {
      if (isCustomer) {
        // console.log("customer cash flow: ", { ...person, amount: data?.remaining_amount }, data);
        console.log("customer cash flow: ", { person_id: person._id, ...data });
        dispatch(addCustomerCash({ ...data, person_id: person?._id }))
        // dispatch(updateCustomer({ ...person, amount: data?.remaining_amount }))
        // dispatch(addCustomerTransaction({ ...data, customer_id: person?.id }))
      } else {
        console.log("addSupplierCash cash flow: ", { person_id: person._id, ...data });
        dispatch(addSupplierCash({ ...data, person_id: person?._id }))
        // console.log("supplier cash flow: ", { ...person, amount: data?.remaining_amount }, data);
        // dispatch(updateSupplier({ ...person, amount: data?.remaining_amount }))
        // dispatch(addSupplierTransaction({ ...data, supplier_id: person?.id }))
      }
    }
    // console.log(data);
    // if (order_id && data?.price && data?.price > 0) {
    //   console.log(data);
    //   // dispatch(acceptOrder(data))
    //   setShowModal(false)
    // } else {
    //   priceRef.current.style.display = "block"
    // }
  }
  return (
    <>
      <button onClick={() => setShowModal(true)} className={`bg-colorPrimary items-center justify-between flex hover:bg-opacity-90 text-white py-2 px-2 rounded-e text-lg`}><img src={money_icon} className="w-5 h-5" alt="money" /></button>
      {showModal ? (
        <>
          <div
            className="justify-center rounded-3xl items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative md:w-1/2 w-[90%] my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start bg-colorPrimary justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl text-white font-semibold">
                    {t('Payment Recovery')}
                  </h3>
                  <button
                    className="p-1 ltr:ml-auto rtl:mr-auto bg-transparent border-0 text-white  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none leading-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">

                  {!type ?
                    <div className="flex flex-col gap-2 w-[75%] text-center mx-auto my-3 mt-4">
                      <button className="bg-gray-200 hover:bg-gray-300 w-full text-gray-600 font-medium px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150" type="button" onClick={() => setType("card")}>{t('Pay With Card')}</button>
                      <p>{t('or')}</p>
                      <button className="bg-colorPrimary w-full text-white font-medium px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150" type="button" onClick={() => setType("cash")}>{t('Cash Payment')}</button>
                    </div>
                    : <>
                      {type === 'card' ? <>
                        <p className='text-center flex items-baseline justify-center gap-1 mb-2'>
                          <span className='text-sm'>{t('Due Amount:')}</span><br />
                          <span className='text-2xl text-red-500'>{person?.amount}</span>
                        </p>
                        <div className="mb-6">
                          <label for="default-input" className="block mb-2 text-lg font-semibold text-gray-900">{t('Card Number')}</label>
                          <input type="text" placeholder={t("Enter Card Number")} id="default-input" className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-colorPrimary focus:ring-2 focus:border-colorPrimary block w-full p-2.5 outline-none" />
                        </div>
                        <div className="mb-6">
                          <label for="default-input" className="block mb-2 text-lg font-semibold text-gray-900">{t('Card Holder Name')}</label>
                          <input type="text" placeholder={t("Enter Card Holder Name")} id="default-input" className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-colorPrimary focus:ring-2 focus:border-colorPrimary block w-full p-2.5 outline-none" />
                        </div>
                        <div className="mb-6">
                          <label for="default-input" className="block mb-2 text-lg font-semibold text-gray-900">{t('CVV Code')}</label>
                          <input type="text" placeholder={t("Enter CVV Code")} id="default-input" className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-colorPrimary focus:ring-2 focus:border-colorPrimary block w-full p-2.5 outline-none" />
                        </div>
                        <div className="mb-6">
                          <label for="default-input" className="block mb-2 text-lg font-semibold text-gray-900">{t('Expiry Date')}</label>
                          <input type="text" placeholder={t("Enter Expiry Date")} id="default-input" className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-colorPrimary focus:ring-2 focus:border-colorPrimary block w-full p-2.5 outline-none" />
                        </div>
                        <div className="mb-3 flex gap-3 lg:w-96 mx-auto">
                          <button className="bg-gray-200 hover:bg-gray-300 w-full text-gray-600 font-medium px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150" type="button" onClick={() => setType(null)}>{t("Back")}</button>
                          <button
                            className="bg-colorPrimary w-full text-white font-medium px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => handleSubmit()}
                          >
                            {t("Pay")}
                          </button>
                        </div>
                      </> : <>
                        <div className="mb-6">
                          <label for="default-input" className="block mb-2 text-lg font-semibold text-gray-900">{t('Payable Amount')}</label>
                          <input type="text" placeholder="Total Payable Amount" id="default-input" className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-colorPrimary focus:ring-2 focus:border-colorPrimary block w-full p-2.5 outline-none" value={person?.amount} disabled />
                        </div>
                        <div className="mb-6">
                          <label for="default-input" className="block mb-2 text-lg font-semibold text-gray-900">{t('Pay Amount')}</label>
                          <input type="number" name="amount_added" value={data?.amount_added} onChange={handleChange} placeholder={t("Enter Paid Amount")} id="default-input" className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-colorPrimary focus:ring-2 focus:border-colorPrimary block w-full p-2.5 outline-none" />
                        </div>
                        {/* <div className='flex flex-wrap justify-center mb-6'>
                          <Input
                            type={"bank"}
                            placeholder={"Arab National Bank"}
                            value={data.bank}
                            onChange={handleChange}
                            label="Arab National Bank"
                          />
                          <Input
                            type={"title"}
                            placeholder={"Title"}
                            value={data.title}
                            onChange={handleChange}
                            label="Account Title"
                          />
                          <Input
                            type={"number"}
                            name={"number"}
                            placeholder={"Account Number"}
                            value={data.no_of_employees}
                            onChange={handleChange}
                            label="Account Number"
                          />
                          <Input
                            type={"number"}
                            name={"amount"}
                            placeholder={"Withdraw amount"}
                            value={data.amount}
                            onChange={handleChange}
                            label="Withdraw amount"
                          />
                        </div> */}
                        <div className="mb-4 flex gap-3 lg:w-96 mx-auto">
                          <button className="bg-gray-200 hover:bg-gray-300 w-full text-gray-600 font-medium px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150" type="button" onClick={() => setType(null)}>{t('Back')}</button>
                          <button
                            className="bg-colorPrimary w-full text-white font-medium px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => handleSubmit()}
                          >
                            {t('Pay')}
                          </button>
                        </div>
                      </>}
                    </>
                  }


                </div>

                {/*footer*/}
                <div className="flex items-center justify-center border-blueGray-200 rounded-b">
                  {/* <button
                    className="bg-colorPrimary w-1/ text-white active:bg-colorPrimary font-bold uppercase text-sm px-6 py-2.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-4 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    {t('Pay Amount')}
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}