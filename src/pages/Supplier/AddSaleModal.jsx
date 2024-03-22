import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import edit from "../../assets/svgs/edit.svg";
// import { addVehicleModel, updateVehicleModel } from '../../redux/vehicleTypes/action';

const AddSaleModal = ({ model_id, model_name, brand_id_fk, brand_name }) => {
  const dropdownBtn = useRef()
  const modErrorRef = useRef()
  const brandErrorRef = useRef()
  const dispatch = useDispatch()
  const [searchBrand, setSearchBrand] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({ brand_id_fk: "", brand_name: "", model_name: "" });
  // const brands = useSelector(state => state.vehicleTypesReducer.getVehicleBrands.data)
  const brands = []
  const models = []
  // const models = useSelector(state => state.vehicleTypesReducer.getVehicleModels.data)
  const filteredBrands = brands.filter(brand => brand?.brand_name.includes(searchBrand))

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleValue = (e) => {
    setData({
      ...data,
      [e.target.name]: capitalizeFirstLetter(e.target.value)
    })
  }

  useEffect(() => {
    if (model_id) {
      setData({
        model_id, model_name, brand_id_fk, brand_name,
      })
      setSearchBrand(brand_name)
    }
  }, [model_id])

  const handleCloseModel = () => {
    setShowModal(false)
    if (!model_id) {
      setData({ brand_id_fk: "", brand_name: "", model_name: "" })
      setSearchBrand("")
    }
  }

  const handleSubmit = () => {
    if (!data.brand_id_fk || !data.brand_name) {
      brandErrorRef.current.innerText = "Brand name is required*"
    } else if (!data.model_name) {
      modErrorRef.current.innerText = "Model name is required*"
    } else {
      if (model_id) {
        const isExist = models.filter(m => m?.model_name === data.model_name).length > 0
        if (!isExist) {
          // dispatch(updateVehicleModel(data))
          setShowModal(false)
        } else {
          modErrorRef.current.innerText = "Model name already exist*"
        }
      } else {
        // dispatch(addVehicleModel(data))
        setData({ brand_id_fk: "", brand_name: "", model_name: "" })
        setSearchBrand("")
        setShowModal(false)
      }
    }
  }
  const handleBrandItem = (brand) => {
    const { brand_id, brand_name } = brand
    dropdownBtn.current.style.display = "none"
    setSearchBrand(brand_name)
    setData({ ...data, brand_id_fk: brand_id, brand_name })
  }
  const handleBrandList = () => {
    dropdownBtn.current.style.display = "block"
    console.log(dropdownBtn.current.style.display === "block");
  }
  return (
    <>
      {model_id ?
        <button onClick={() => setShowModal(true)} className={`bg-colorPrimary hover:bg-yellow-600 text-white font-bold py- p-2.5 rounded-xl`}>
          <img src={edit} width={18.5} alt="basket" />
        </button> :
        <button onClick={() => setShowModal(true)} className={`bg-[#2D9D46] items-center justify-between flex hover:bg-opacity-90 text-white py-2 px-5 rounded ml-auto`}>
          Add Sale
        </button>
      }
      {/* Model */}
      {showModal ? (
        <>
          <div
            className="justify-center rounded-3xl items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex  items-center rounded-t-3xl bg-colorPrimary justify-center px-5 py-4 border-b border-solid border-blueGray-200">
                  <h3 className="text-xl text-white font-semibold">Add Sale</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={handleCloseModel}
                  >
                    <span className="bg-transparent text-white text-2xl block outline-none focus:outline-none">×</span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <label htmlFor="default-input" className="block mb-2 text-lg font-bold text-gray-900">Customer Details</label>
                  <div className="relative mt-2 mb-6">
                    <input type="text" className="relative w-full rounded-md bg-white py-2.5 pl-2.5 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-colorPrimary sm:text-base sm:leading-" aria-haspopup="listbox" aria-expanded="true" placeholder="Search brand" aria-labelledby="listbox-label" onFocus={handleBrandList} value={searchBrand} onChange={e => setSearchBrand(capitalizeFirstLetter(e.target.value))} />
                    <p className="text-red-600 text-sm" ref={brandErrorRef}></p>
                    {/* BrandS Dropdown */}
                    <ul className="hidden absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-ba shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3" ref={dropdownBtn}>
                      {filteredBrands.length !== 0 ?
                        filteredBrands?.map(brand => {
                          const { brand_name } = brand;
                          return <li className="text-gray-900 relative cursor-pointer select-none py-2.5 pl-2.5 pr-9 hover:bg-gray-200" onClick={() => handleBrandItem(brand)} id="listbox-option-0" role="option">
                            <div className="flex items-center">
                              <span className="font-normal ml-3 block truncate">{brand?.brand_name}</span>
                            </div>
                            {data.brand_id_fk && brand_name === data.brand_name && <span className="text-colorPrimary absolute inset-y-0 right-0 flex items-center pr-4">
                              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                              </svg>
                            </span>}
                          </li>
                        }) : <li className='p-2.5 ml-3 relative text-gray-600 text-'>Nothing found!</li>
                      }
                    </ul>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-lg font-bold text-gray-900">Select Products</label>
                    <input type="text" name="model_name" placeholder="Enter Model" id="default-input" className="border border-gray-300 text-base text-gray-900  rounded-lg focus:ring-colorPrimary focus:border-colorPrimary block w-full p-2.5 outline-colorPrimary" value={data?.model_name} onChange={(e) => handleValue(e)} />
                    <p className="text-red-600 text-sm" ref={modErrorRef}></p>
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-center border-blueGray-200 rounded-b">
                  <button
                    type="button"
                    onClick={() => handleSubmit()}
                    className="bg-colorPrimary w-2/5 text-white active:bg-colorPrimary font-bold uppercase text-sm px-3 py-2.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-4 ease-linear transition-all duration-150"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null
      }


    </>
  )
}

export default AddSaleModal