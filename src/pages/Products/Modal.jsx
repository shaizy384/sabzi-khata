import { Input } from "postcss";
import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)} className={`bg-colorPrimary items-center justify-between flex hover:bg-opacity-90 text-white  py-2 px-4 rounded mx-1`}>
        <svg className='mr-2' width="20-px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="17" r="1" fill="#ffffff"></circle> <path d="M12 10L12 14" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3.44722 18.1056L10.2111 4.57771C10.9482 3.10361 13.0518 3.10362 13.7889 4.57771L20.5528 18.1056C21.2177 19.4354 20.2507 21 18.7639 21H5.23607C3.7493 21 2.78231 19.4354 3.44722 18.1056Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        Warning
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center rounded-3xl items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start rounded-t-3xl bg-colorPrimary justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl text-white font-semibold">
                    Warning
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-white  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none leading-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="mb-6">
                    <label for="default-input" className="block mb-2 text-lg font-bold text-gray-900">Warning Heading</label>
                    <input type="text" placeholder="Type warning heading..." id="default-input" className=" border border-gray-300 text-gray-900  rounded-lg focus:ring-colorPrimary focus:border-colorPrimary block w-full p-2.5" />
                  </div>
                  <div className="mb-6">
                    <label for="message" className="block mb-2 text-lg font-bold text-gray-900">Warning Details</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-gray-900  rounded-lg border border-gray-300 focus:ring-colorPrimary focus:border-colorPrimary" placeholder="Write warning details here..."></textarea>

                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center border-blueGray-200 rounded-b">

                  <button
                    className="bg-colorPrimary w-1/2 text-white active:bg-colorPrimary font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-4 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
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