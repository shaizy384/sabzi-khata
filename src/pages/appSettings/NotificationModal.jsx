import React from "react";
import notification from "../../assets/svgs/notification.svg";

export default function NotificationModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)} className="bg-green-500 items-center justify-between flex hover:bg-green-600 text-white py-2 px-4 sms-auto rounded">
        <img className='mr-2' src={notification} width={19} alt="notification" />
        Create new Admin Role
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
                  <h3 className="grow text-center text-2xl text-white font-semibold">Notification</h3>
                  <button
                    className="p-1 pt-0 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white w-6 text-2xl block outline-none focus:outline-none">×</span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="mb-6">
                    <label for="default-input" className="block mb-2 text-lg font-bold text-gray-900">Notification Heading</label>
                    <input type="text" placeholder="Type warning heading..." id="default-input" className=" border border-gray-300 text-gray-900  rounded-lg focus:ring-colorPrimary focus:border-colorPrimary block w-full p-2.5" />
                  </div>
                  <div className="mb-6">
                    <label for="message" className="block mb-2 text-lg font-bold text-gray-900">Notification Details</label>
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
                    Send
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