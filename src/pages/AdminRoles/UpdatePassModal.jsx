import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { updateSubAdmin } from "../../redux/subadmin/action";
import Input from "../../components/ui/Input";

export default function UpdatePassModal({ id, subAdmin }) {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  const handleOnChange = (value, name) => {
    setData({ ...data, [name]: value })
    // setData({ ...data, [e.target.name]: e.target.value })
    console.log("handleOnChange", data);
  }
  // const handleValue = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value
  //   })
  // }

  useEffect(() => {
    if (id) {
      setData(subAdmin)
    }
  }, [id])

  const handleSubmit = () => {
    if (id && data?.password) {
      // dispatch(updatePassword(data))
      dispatch(updateSubAdmin({ ...data, password_confirmation: data?.password }))
      console.log(data);
      setShowModal(false)
    }
  }
  return (
    <>
      <button onClick={() => setShowModal(true)} className={`bg-purple-700 items-center justify-between flex hover:bg-opacity-90 text-white  py-2 px-4 rounded mx-1`}>
        {t('Change Password')}
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
                    {t('Change Password')}
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
                  <div className="mb-3">
                    <label className='font-semibold text-lg font-bol block mr-auto -mb-3 w-auto'>{t('Password')}</label>
                    <Input type={'password'} value={data?.password} onChange={handleOnChange} />
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-center border-blueGray-200 rounded-b">
                  <button
                    className="bg-colorPrimary text-white active:bg-colorPrimary font-bold uppercase text-sm px-6 py-2.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-4 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleSubmit()}
                  >
                    {t('Update Password')}
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