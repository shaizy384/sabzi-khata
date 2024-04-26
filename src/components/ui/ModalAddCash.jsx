import { Input } from "postcss";
import React from "react";
import money_icon from '../../assets/svgs/money.svg'

export default function ModalAddCash() {
  const [showModal, setShowModal] = React.useState(false);
  // const path = window.location.href.split("/")[3]
  // console.log(path);
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
                    Payment Recovery
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-white  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="mb-6">
                    <label for="default-input" className="block mb-2 text-lg font-bold text-gray-900">Payable Amount</label>
                    <input type="text" placeholder="Total Payable Amount" id="default-input" className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-colorPrimary focus:border-colorPrimary block w-full p-2.5" value={1813} disabled />
                  </div>
                  <div className="mb-6">
                    <label for="default-input" className="block mb-2 text-lg font-bold text-gray-900">Pay Amount</label>
                    <input type="text" placeholder="Enter Pay Amount" id="default-input" className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-colorPrimary focus:border-colorPrimary block w-full p-2.5" />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center border-blueGray-200 rounded-b">

                  <button
                    className="bg-colorPrimary w-1/ text-white active:bg-colorPrimary font-bold uppercase text-sm px-6 py-2.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-4 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Pay Amount
                  </button>
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