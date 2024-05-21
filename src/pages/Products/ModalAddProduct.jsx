import { Input } from "postcss";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { addProduct } from "../../redux/products/action";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function ModalAddProduct() {
  const { t } = useTranslation();
  const [data, setData] = useState({});
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);
  const handleValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (data?.name && data?.unit) {
      console.log(data);
      dispatch(addProduct(data))
    } else {
      toast.error("All fields are reqiured")
    }
  }
  // const path = window.location.href.split("/")[3]
  // console.log(path);
  return (
    <>
      <button onClick={() => setShowModal(true)} className={`bg-colorPrimary items-center justify-between flex hover:bg-opacity-90 text-white py-2 px-5 rounded ltr:ml-auto rtl:mr-auto`}>
        {t('Add Product')}
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center rounded-3xl items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative md:w-1/2 w-[90%] my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start bg-colorPrimary justify-center p-5 border-b border-solid border-blueGray-200 rounded-t-3xl">
                  <h3 className="text-2xl text-white font-semibold">
                    {t('Add Product')}
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
                  <div className="mb-6">
                    <label for="default-input" className="block mb-2 text-lg font-bold text-gray-900">{t('Product Name')}</label>
                    <input type="text" name='name' value={data?.name} onChange={handleValue} placeholder={t("Enter Product Name")} id="default-input" className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-colorPrimary focus:border-colorPrimary block w-full p-2.5" />
                  </div>
                  <div className="mb-6">
                    <label for="default-input" className="block mb-2 text-lg font-bold text-gray-900">{t('Product Unit')}</label>
                    <input type="text" name='unit' value={data?.unit} onChange={handleValue} placeholder={t("kg/pcs")} id="default-input" className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-colorPrimary focus:border-colorPrimary block w-full p-2.5" />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center border-blueGray-200 rounded-b">

                  <button
                    className="bg-colorPrimary w-1/ text-white active:bg-colorPrimary font-bold uppercase text-sm px-6 py-2.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-4 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    {t('Add Product')}
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