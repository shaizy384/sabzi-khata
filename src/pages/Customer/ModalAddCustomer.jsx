import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import searchIcon from "../../assets/svgs/search.svg";
// import vehicle1 from "../../assets/images/vehicle.png";
import uploadIcon from "../../assets/svgs/upload.svg";
import { AVAILABLE, NOT_AVAILABLE, RESERVED } from "../../constants/constants";
import Input from "../../components/ui/Input";
import { useTranslation } from "react-i18next";
import { addCustomer, updateCustomer } from "../../redux/customers/action";
import { toast } from "react-toastify";

export default function ModalAddCustomer({ id, customer }) {
  const fileInpRef = useRef()
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const [imageUrl, setImageUrl] = useState(null);
  const [data, setData] = useState({});
  const [modalPage, setModalPage] = useState("picture");
  const [search, setSearch] = useState("")
  const [showModal, setShowModal] = useState(false);
  const handleSearch = (e) => { setSearch(e.target.value) }
  const handleValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  console.log(".............data: ", data);
  useEffect(() => {
    if (customer?.id) {
      setData({ ...customer })
      setImageUrl(customer?.profile_image)
    }
  }, [customer])

  const handleCancel = () => {
    setShowModal(false);
    setData(([]))
    setModalPage("picture")
    setSearch("")
  }

  const handleFile = (e) => {
    console.log(e.target.files[0])
    const file = e.target.files[0];
    setData({ ...data, profile_image: e.target.files[0] })

    // to show profile_image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  const handleSubmit = () => {
    if (modalPage === "picture" && data?.profile_image) {
      setModalPage("details")
    }
    else if (modalPage === "details" && data?.name && data?.phone && data?.cnic && data?.address && data?.amount) {
      if (id) {
        console.log(data);
        dispatch(updateCustomer(data))

      } else if (!id) {
        console.log(data);
        dispatch(addCustomer(data))
      }
    } else {
      toast.error("All fields are reqiured")
    }
    // else if (modalPage === "documents" && data?.profile_image) {
    //   console.log(data);
    //   // handleCancel()  // to close and remove all modal data
    // }
    // if (rider_id && vehicle_id) {
    //   dispatch(authorizeVehicle(data))
    // }
  }
  return (
    <>
      {!id ? <button onClick={() => setShowModal(true)} className='bg-yellowPrimary items-center justify-between flex hover:bg-opacity-90 text-white hover:ring-2 hover:ring-yellowPrimary ring-inset hover:bg-white hover:text-yellowPrimary py-2 px-5 rounded ml-auto'>{t('Add Customer')}</button> :
        <abbr title="Update Customer"><svg className='cursor-pointer' onClick={() => setShowModal(true)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18 17.153H2V1.99599H10V0.101362H0V19.0476H20V9.57448H18V17.153ZM6 9.47597L15.839 0L20 3.91904L9.842 13.3637H6V9.47597Z" fill="#2cb766" />
        </svg></abbr>
      }
      {showModal ? (
        <>
          <div
            className="justify-center rounded-3xl items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative md:w-2/3 w-[90%] max-h- my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-8 pb-4 max-h-[92vh] overflow-hidden">
                {/*header*/}
                <button
                  className="ltr:ml-auto rtl:mr-auto bg-transparent -mr[17px] mt-[7px] border-0 text-colorPrimary float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={handleCancel}
                >
                  ×
                </button>
                <div className="flex items-start rounded-t-3xl justify-center md:px-5 pt-3 pb-5 border-b-2 ">
                  <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
                    <li onClick={() => setModalPage('picture')} className="cursor-pointer flex items-center space-x-3 rtl:space-x-reverse text-colorPrimary">
                      <span className="hidden md:flex items-center justify-center w-9 h-9 shrink-0">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_2797_6743)"><path fillRule="evenodd" clipRule="evenodd" d="M50.4 46.522C50.4 46.8216 50.316 47.0987 50.2292 47.3703C49.6244 39.1271 44.5704 32.1495 37.45 28.7923C40.2304 26.2331 42 22.5988 42 18.522C42 12.6952 38.4384 7.7084 33.376 5.6H47.6C49.1456 5.6 50.4 5.77637 50.4 7.32197V46.522ZM44.6964 50.4H11.13C11.13 50.4 11.1132 49.6746 11.1132 49.5626C11.1132 40.8938 17.7128 33.4881 26.1492 32.6061C28 32.8525 28.714 32.5414 29.7444 32.4126C38.15 33.3254 44.7132 40.9443 44.7132 49.5879C44.7132 49.6999 44.6964 50.4 44.6964 50.4ZM5.6 46.522V7.32197C5.6 5.77637 6.8544 5.6 8.4 5.6H22.624C17.5616 7.7084 14 12.6952 14 18.522C14 22.568 15.7416 26.1826 18.4856 28.739C11.4996 31.9814 6.45958 38.6961 5.63358 46.6901C5.63078 46.6313 5.6 46.5808 5.6 46.522ZM36.4 18.522C36.4 22.554 33.5412 25.9283 29.7444 26.7347C28.0924 26.6003 27.6304 26.6222 26.2304 26.7258C22.4476 25.911 19.6 22.5456 19.6 18.522C19.6 13.8908 23.3688 10.122 28 10.122C32.6312 10.122 36.4 13.8908 36.4 18.522ZM50.4 0H5.6C2.506 0 0 2.506 0 5.6V50.4C0 53.4912 2.506 56 5.6 56H50.4C53.494 56 56 53.4912 56 50.4V5.6C56 2.506 53.494 0 50.4 0Z" fill="currentColor" /></g><defs><clipPath id="clip0_2797_6743"><rect width="56" height="56" fill="white" /></clipPath></defs>
                        </svg>
                      </span>
                      <span>
                        <h3 className="font-medium leading-tight">{t("Customer's Profile Picture")}</h3>
                      </span>
                    </li>
                    <li className={"flex items-center space-x-3 rtl:space-x-reverse " + (modalPage !== 'picture' ? 'text-colorPrimary' : 'text-gray-400')}>
                      <span className="hidden md:flex items-center justify-center w-9 h-9 shrink-0">
                        <svg width="75" height="56" viewBox="0 0 75 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M70 0H4.66667C3.42899 0 2.242 0.491665 1.36683 1.36683C0.491665 2.242 0 3.42899 0 4.66667V51.3333C0 52.571 0.491665 53.758 1.36683 54.6332C2.242 55.5083 3.42899 56 4.66667 56H70C71.2377 56 72.4247 55.5083 73.2998 54.6332C74.175 53.758 74.6667 52.571 74.6667 51.3333V4.66667C74.6667 3.42899 74.175 2.242 73.2998 1.36683C72.4247 0.491665 71.2377 0 70 0ZM39.6667 37.3333H16.3333C15.7145 37.3333 15.121 37.0875 14.6834 36.6499C14.2458 36.2123 14 35.6188 14 35C14 34.3812 14.2458 33.7877 14.6834 33.3501C15.121 32.9125 15.7145 32.6667 16.3333 32.6667H39.6667C40.2855 32.6667 40.879 32.9125 41.3166 33.3501C41.7542 33.7877 42 34.3812 42 35C42 35.6188 41.7542 36.2123 41.3166 36.6499C40.879 37.0875 40.2855 37.3333 39.6667 37.3333ZM58.3333 28H16.3333C15.7145 28 15.121 27.7542 14.6834 27.3166C14.2458 26.879 14 26.2855 14 25.6667C14 25.0478 14.2458 24.4543 14.6834 24.0167C15.121 23.5792 15.7145 23.3333 16.3333 23.3333H58.3333C58.9522 23.3333 59.5457 23.5792 59.9832 24.0167C60.4208 24.4543 60.6667 25.0478 60.6667 25.6667C60.6667 26.2855 60.4208 26.879 59.9832 27.3166C59.5457 27.7542 58.9522 28 58.3333 28ZM58.3333 18.6667H16.3333C15.7145 18.6667 15.121 18.4208 14.6834 17.9832C14.2458 17.5457 14 16.9522 14 16.3333C14 15.7145 14.2458 15.121 14.6834 14.6834C15.121 14.2458 15.7145 14 16.3333 14H58.3333C58.9522 14 59.5457 14.2458 59.9832 14.6834C60.4208 15.121 60.6667 15.7145 60.6667 16.3333C60.6667 16.9522 60.4208 17.5457 59.9832 17.9832C59.5457 18.4208 58.9522 18.6667 58.3333 18.6667Z" fill="currentColor" />
                        </svg>
                      </span>
                      <span>
                        <h3 className="font-medium leading-tight">{t("Customer's Personal Details ")}</h3>
                      </span>
                    </li>
                    {/* <li className={"flex items-center text-gray-400 space-x-3 rtl:space-x-reverse " + (modalPage === 'documents' && 'text-colorPrimary')}>
                      <span className="hidden md:flex items-center justify-center w-9 h-9 shrink-0">
                        <svg width="50" height="56" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M39 45.5V50.75C39 53.6494 36.6494 56 33.75 56H5.75C2.8505 56 0.5 53.6494 0.5 50.75V15.75C0.5 12.8505 2.8505 10.5 5.75 10.5H11V3.5C11 1.567 12.567 0 14.5 0H36.1006C37.957 0 39.7374 0.737499 41.0503 2.05025L47.4497 8.44974C48.7626 9.76252 49.5 11.543 49.5 13.3995V42C49.5 43.933 47.933 45.5 46 45.5H39ZM42.5 38.5V17.5H35.5C33.567 17.5 32 15.933 32 14V7H18V38.5H42.5ZM32 45.5V49H7.5V17.5H11V42C11 43.933 12.567 45.5 14.5 45.5H32Z" fill="currentColor" />
                        </svg>
                      </span>
                      <span>
                        <h3 className="font-medium leading-tight">Driver’s Documents</h3>
                      </span>
                    </li> */}
                  </ol>
                </div>

                {/*body*/}
                <div className="relative pt-4 flex-auto">
                  {modalPage === "picture" &&
                    <div className="my-5 overflow-y-auto text-center">
                      <h1 className="text-xl text-gray-500 mb-5">{t("Customer's face must be clear in photo. ")}</h1>
                      {!imageUrl ?
                        <img src={uploadIcon} className="cursor-pointer mx-auto" width={190} alt="" onClick={() => fileInpRef.current.click()} />
                        :
                        <img
                          src={imageUrl}
                          alt="Uploaded"
                          className="cursor-pointer mx-auto my-2"
                          onClick={() => fileInpRef.current.click()}
                          style={{ maxWidth: '190px', maxHeight: '200px' }}
                        />
                      }
                      <input id="file-upload" name="file-upload" type="file" accept='image/*' className="sr-only" ref={fileInpRef} onChange={handleFile} />
                    </div>}
                  {modalPage === "details" &&
                    // <div className="my-5 overflow-x-auto flex max-h-[43v whitespace-nowrap">
                    <div className="grid grid-cols-2 gap-3 justify-between mb-6 my-5">
                      <div className="flex flex-col grow">
                        <label className='font-medium block mb-3 text-gray-500'>{t('Name')}</label>
                        <input
                          value={data?.name}
                          type='text'
                          name='name'
                          className={`block rounded-2xl border border-neutral-300 bg-transparent py-4 pl-5 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-yellow-500 focus:outline-none`}
                          onChange={handleValue}
                        />
                      </div>
                      <div className="flex flex-col grow">
                        <label className='font-medium block mb-3 text-gray-500'>{t('Phone no')}</label>
                        <input
                          value={data?.phone}
                          type='text'
                          name='phone'
                          className={`block rounded-2xl border border-neutral-300 bg-transparent py-4 pl-5 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-yellow-500 focus:outline-none`}
                          onChange={handleValue} />
                      </div>
                      <div className="flex flex-col grow">
                        <label className='font-medium block mb-3 text-gray-500'>{t('CNIC')}</label>
                        <input
                          value={data?.cnic}
                          type='text'
                          name='cnic'
                          className={`block rounded-2xl border border-neutral-300 bg-transparent py-4 pl-5 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-yellow-500 focus:outline-none`}
                          onChange={handleValue} />
                      </div>
                      <div className="flex flex-col grow">
                        <label className='font-medium block mb-3 text-gray-500'>{t('Address')}</label>
                        <input
                          value={data?.address}
                          type='text'
                          name='address'
                          className={`block rounded-2xl border border-neutral-300 bg-transparent py-4 pl-5 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-yellow-500 focus:outline-none`}
                          onChange={handleValue} />
                      </div>
                      <div className="flex flex-col grow">
                        <label className='font-medium block mb-3 text-gray-500'>{t('Total Amount')}</label>
                        <input
                          value={data?.amount}
                          type='text'
                          name='amount'
                          className={`block rounded-2xl border border-neutral-300 bg-transparent py-4 pl-5 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-yellow-500 focus:outline-none`}
                          onChange={handleValue} />
                      </div>
                    </div>
                  }
                  {/* {modalPage === "documents" &&
                    <div className="flex justify-evenly my-5 flex-wrap gap-3">
                      <div className="flex flex-col gap-2">
                        <label className='font-medium block mb-3 text-gray-500'>License Front</label>
                        <img src={uploadIcon} className="cursor-pointer" width={190} alt="" onClick={() => fileInpRef.current.click()} />
                        <input id="file-upload" name="file-upload" type="file" accept='.pdf' className="sr-only" ref={fileInpRef} onChange={handleFile} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className='font-medium block mb-3 text-gray-500'>License Front</label>
                        <img src={uploadIcon} className="cursor-pointer" width={190} alt="" onClick={() => fileInpRef.current.click()} />
                        <input id="file-upload" name="file-upload" type="file" accept='.pdf' className="sr-only" ref={fileInpRef} onChange={handleFile} />
                      </div>
                    </div>
                  } */}
                  {/*footer*/}
                  <div className="flex items-center justify-center border-blueGray-200 rounded-b">
                    <button
                      className={"bg-gray-5 text hover:bg-gray text-white font-medium uppercase px-[78px] py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 bg-gray-900 cursor-pointer"}
                      type="button"
                      onClick={handleSubmit}
                    >
                      {modalPage !== "details" ? t("Next") : t(`${id ? 'Update' : 'Add'} Customer`)}
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