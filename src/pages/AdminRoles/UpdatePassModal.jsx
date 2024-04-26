import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function UpdatePassModal({ id }) {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const handleValue = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (id) {
      setData({
        ...data,
        "id": id
      })
    }
  }, [id])

  const handleSubmit = () => {
    if (id) {
      // dispatch(updatePassword(data))
      console.log(data);
      setShowModal(false)
    }
  }
  return (
    <>
      <button onClick={() => setShowModal(true)} className={`bg-purple-700 items-center justify-between flex hover:bg-opacity-90 text-white  py-2 px-4 rounded mx-1`}>
        Change Password
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
                <div className="flex items-start rounded-t-3xl bg-colorPrimary justify-center p-5 border-b border-solid border-blueGray-200">
                  <h3 className="text-2xl text-white font-semibold">
                    Change Password
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
                  <div className="mb-3">
                    <label htmlFor="default-input" className="block mb-2 text-lg font-bold text-gray-900">Password</label>
                    <input type="text" name="password" placeholder="Enter New Password" id="default-input" className=" border border-gray-300 text-gray-900  rounded-lg focus:ring-yellowPrimary focus:border-yellowPrimary block w-full p-2.5" onChange={(e) => handleValue(e)} />
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-center border-blueGray-200 rounded-b">
                  <button
                    className="bg-colorPrimary text-white active:bg-colorPrimary font-bold uppercase text-sm px-6 py-2.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-4 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleSubmit()}
                  >
                    Update Password
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