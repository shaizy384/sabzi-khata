import React, { useEffect, useRef, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router'
import { addCustomerTransaction, addSale, getCustomers, updateCustomer } from '../../redux/customers/action'
import { getProducts } from '../../redux/products/action'
import { addPurchase, addSupplierTransaction, getSuppliers, updateSupplier } from '../../redux/suppliers/action'
import { toast } from 'react-toastify'

const AddSale = ({ model_id, model_name, brand_id_fk, brand_name }) => {
    const { t } = useTranslation();
    const dropdownBtn = useRef()
    const prodDropdown = useRef()
    const modErrorRef = useRef()
    const { id } = useParams()
    const brandErrorRef = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [pageType, setPageType] = useState("");
    console.log("params:", id, window.location.href.split("/")[4], location.pathname.split("/").includes("addsale"));
    useEffect(() => {
        location.pathname.split("/").includes("addsale") ?
            setPageType("Sale") :
            setPageType("Purchase")
        console.log("pageType: ", pageType);
    }, [location])
    const [searchCustomer, setSearchCustomer] = useState("");
    const [searchProduct, setSearchProduct] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({ sales: [] });
    console.log(data);
    // const brands = useSelector(state => state.vehicleTypesReducer.getVehicleBrands.data)
    const productsData = useSelector((state) => state.productsReducer.getProducts?.data);
    const customers = useSelector((state) => state.customersReducer.getCustomers?.data);

    const suppliers = useSelector((state) => state.suppliersReducer.getSuppliers?.data);

    const handleEmpty = () => {
        setSearchCustomer("")
        setData({ sales: [] });
    }

    useEffect(() => {
        if (!suppliers) {
            dispatch(getSuppliers())
        }
    }, [suppliers])
    useEffect(() => {
        if (!customers) {
            dispatch(getCustomers())
        }
    }, [customers])
    useEffect(() => {
        if (!productsData) {
            dispatch(getProducts())
        }
    }, [productsData])
    //   const customers = [{ id: 1, cust_name: "Ali" }]
    // const products = [{ id: 1, name: "Mango" }]
    // const models = []
    // const models = useSelector(state => state.vehicleTypesReducer.getVehicleModels.data)
    const filteredCustomers = pageType === 'Sale' ? customers : suppliers?.filter(customer => customer?.name?.toLowerCase()?.includes(searchCustomer?.toLowerCase()))
    const filteredproducts = productsData?.filter(product => product?.name?.toLowerCase()?.includes(searchProduct?.toLowerCase()));
    useEffect(() => {
        if (id && customers && pageType === 'Sale') {
            // let person = (pageType === 'Sale') ? customers : suppliers?.filter(p => p?.id === id);
            let person = customers?.filter(p => p._id == id);
            console.log("persone:::::: ", person, customers);
            person = person?.length > 0 && person[0]
            console.log("persone:::::: ", person);
            setSearchCustomer(person?.name)
            setData({ ...data, person_id: person._id, previous_amount: person.amount });
        } else if (id && suppliers && pageType === 'Purchase') {
            // let person = (pageType === 'Sale') ? customers : suppliers?.filter(p => p?.id === id);
            let person = suppliers?.filter(p => p._id == id);
            console.log("persone:::::: ", person, suppliers);
            person = person?.length > 0 && person[0]
            console.log("persone:::::: ", person);
            setSearchCustomer(person?.name)
            setData({ ...data, person_id: person._id, previous_amount: person.amount });
        } else if (!id) {
            handleEmpty()
        }
    }, [id, customers, suppliers, pageType])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                fontWeight: 'bold',
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
                // fontSize:'19px'
                display: 'none'
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
                justifyContent: 'center',
                fontSize: '17px'
            },
        },
    };
    const columns = [
        {
            name: 'Name',
            selector: row => <span className='text-xl font-semibold'>{row.name}</span>,
        },
        {
            name: 'kg/pcs',
            selector: row => <div><div className='flex items-center gap-1'><span>kg/pcs</span><input type="number" onChange={(e) => handleInputChange(row.product_id, e.target.value, "quantity")} className='block w-full rounded border border-neutral-300 bg-transparent py-2 px-2 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-colorPrimary focus:outline-none' /></div></div>,
        },
        {
            name: 'Price',
            selector: row => <div className='flex items-center gap-1'><span>price</span><input type="number" onChange={(e) => handleInputChange(row.product_id, e.target.value, "price")} className='block w-full rounded border border-neutral-300 bg-transparent py-2 px-2 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-colorPrimary focus:outline-none' /></div>,
        },
        {
            name: 'Price',
            selector: row => <div onClick={() => handleDeleteItem(row?.product_id)} className='w-full grow mx-auto cursor-pointer text-lg text-center font-semibold'>❌</div>,
        },
    ];

    const handleDeleteItem = (product_id) => {
        setData((prevItems) => ({
            ...prevItems,
            sales: prevItems?.sales?.filter((item) =>
                item.product_id !== product_id
            )
        }));
    }

    // const handleValue = (e) => {
    //     setData({
    //         ...data,
    //         [e.target.name]: capitalizeFirstLetter(e.target.value)
    //     })
    // }

    // useEffect(() => {
    //     if (model_id) {
    //         setData({
    //             model_id, model_name, brand_id_fk, brand_name,
    //         })
    //         setSearchCustomer(brand_name)
    //     }
    // }, [model_id])

    // const handleCloseModel = () => {
    //     setShowModal(false)
    //     if (!model_id) {
    //         setData({ brand_id_fk: "", brand_name: "", model_name: "" })
    //         setSearchCustomer("")
    //     }
    // }
    // { amount_added: "", total_amount: "", remaining_amount: "", amount_type: 'debit' }
    let total_amount = 0;
    const handleSubmit = () => {
        if (data?.sales?.length > 0 && data?.person_id) {
            const totalGrandAmount = data.sales.reduce((acc, product) => {
                console.log("product: ", typeof product?.price);
                if (!product.price || !product.quantity) {
                    return toast.error("All fields are required")
                }
                return acc + parseInt(product?.price);
            }, 0);
            // pageType === 'Sale' ?
            //     dispatch(updateCustomer({ ...data?.person, amount: parseInt(data?.person?.amount) + totalGrandAmount })) :
            //     dispatch(updateSupplier({ ...data?.person, amount: parseInt(data?.person?.amount) + totalGrandAmount }))
            const previous_amount = data?.previous_amount
            console.log("add add sale sale: ", typeof totalGrandAmount, typeof previous_amount, { ...data, total_amount: totalGrandAmount + previous_amount, previous_amount, amount_added: totalGrandAmount }, typeof data?.previous_amount);
            // delete data.person;

            const salesData = {
                ...data, amount_type: 'credit', total_amount: totalGrandAmount + previous_amount, previous_amount, amount_added: totalGrandAmount
            }

            pageType === 'Sale' ?
                dispatch(addSale(salesData)) :
                dispatch(addPurchase(salesData))

            setData({ ...data, sales: [] });

            // for (const item of data.sales) {
            //     // total_amount = parseInt(data?.person?.amount) + parseInt(item.price)
            //     if (pageType === 'Sale') {
            //         dispatch(addSale(item))
            //         // dispatch(updateCustomer({ ...data?.person, amount: total_amount }))
            //         dispatch(addCustomerTransaction({ amount_type: 'credit', amount_added: item?.price, remaining_amount: data?.person?.amount, total_amount, person_id: data?.person?.id }))
            //         setData({ sales: [] })
            //         setSearchCustomer("")
            //     } else if (pageType === 'Purchase') {
            //         dispatch(addPurchase(item))
            //         // dispatch(updateSupplier({ ...data?.person, amount: total_amount }))
            //         dispatch(addSupplierTransaction({ amount_type: 'credit', amount_added: item?.price, remaining_amount: data?.person?.amount, total_amount, person_id: data?.person?.id }))
            //         setData({ sales: [] })
            //         setSearchCustomer("")
            //     };
            // }
            console.log("data: ", data, total_amount);
        } else {
            toast.error("All fields are reqiured")
        }
        // if (!data.brand_id_fk || !data.brand_name) {
        //     brandErrorRef.current.innerText = "Brand name is required*"
        // } else if (!data.model_name) {
        //     modErrorRef.current.innerText = "Model name is required*"
        // }
        // }
    }
    const handleCustomerItem = (person) => {
        const { _id, name, amount } = person
        console.log(person);
        dropdownBtn.current.style.display = "none"
        setSearchCustomer(name)
        setData({ ...data, person_id: _id, previous_amount: amount })
    }
    const handleProductItem = (product) => {
        const { _id, name } = product
        const isInclude = data?.sales?.filter(p => p.product_id === _id)
        console.log("isInclude isInclude: ", isInclude);
        prodDropdown.current.style.display = "none"
        if (isInclude?.length > 0) return;

        // setSearchProduct(name)
        // setData([...data, { id: id, name }])

        setData((prevItems) => ({
            ...prevItems,
            sales: [
                ...prevItems.sales,
                pageType === 'Sale' ?
                    { product_id: _id, name, customer_id: data.person_id } :
                    { product_id: _id, name, supplier_id: data.person_id }
            ]
        }));
        // setData({ ...data, sales: [...data?.sales, { product_id: id, name, person_id: data?.customer?.person_id }] })
        // filteredproducts = filteredproducts.filter(p => p.id !== id)
    }
    const handlePersonList = () => {
        dropdownBtn.current.style.display = "block"
        console.log(dropdownBtn.current.style.display === "block");
    }
    const handleSearchList = () => {
        prodDropdown.current.style.display = "block"
        console.log(prodDropdown.current.style.display === "block");
    }

    // Handle product quantity and price change
    const handleInputChange = (id, newValue, type) => {
        setData((prevItems) => ({
            ...prevItems,
            sales: prevItems?.sales?.map((item) =>
                item.product_id === id ? { ...item, [type]: newValue } : item
            )
        }));
    };
    return (
        <div className="py-1 rounded-lg bg-gray-50">
            <div className='sm:mx-10 mx-5 mt-10 mb-5 flex justify-between items-center flex-wrap gap-3'>
                <div className="bg-gray-50 text-gray-900 font-semibold text-2xl">{t(`Add ${pageType}`)}</div>
            </div>
            <div className="md:mx-10 mx-5 shadow-md mt-2 rounded-xl p-2 bg-white">
                <div className="relative p-6 flex-auto">
                    <label htmlFor="default-input" className="block mb-2 text-lg font-semibold text-gray-900">{t(`Select ${pageType === 'Sale' ? 'Customer' : 'Supplier'}`)}</label>
                    <div className="relative mt-2 mb-6">
                        <input type="text" className="relative w-full rounded-md bg-white py-2.5 ltr:pl-2.5 rtl:pr-2.5 ltr:pr-10 rtl:pl-10 ltr:text-left rtl:text-right text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-colorPrimary sm:text-base sm:leading-" aria-haspopup="listbox" aria-expanded="true" placeholder={t(`Search ${pageType === 'Sale' ? 'Customer' : 'Supplier'}`)} aria-labelledby="listbox-label" onFocus={handlePersonList} value={searchCustomer} onChange={e => setSearchCustomer(capitalizeFirstLetter(e.target.value))} />
                        <p className="text-red-600 text-sm" ref={brandErrorRef}></p>
                        {/* BrandS Dropdown */}
                        <ul className="hidden absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-ba shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3" ref={dropdownBtn}>
                            {filteredCustomers?.length !== 0 ?
                                filteredCustomers?.map(customer => {
                                    const { _id, name } = customer;
                                    return <li className="text-gray-900 relative cursor-pointer select-none py-2.5 pl-2.5 pr-9 hover:bg-gray-200" onClick={() => handleCustomerItem(customer)} id="listbox-option-0" role="option">
                                        <div className="flex items-center">
                                            <span className="font-normal ml-3 block truncate">{customer?.name}</span>
                                        </div>
                                        {data?.person_id && _id === data.person_id && <span className="text-colorPrimary absolute inset-y-0 right-0 flex items-center pr-4">
                                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                            </svg>
                                        </span>}
                                    </li>
                                }) : <li className='p-2.5 ml-3 relative text-gray-600 text-'>Nothing found!</li>
                            }
                        </ul>
                    </div>

                    <div className={`${!data?.person_id && 'opacity-50'}`}>
                        <label htmlFor="default-input" className="block mb-2 text-lg font-semibold text-gray-900">{t('Select Products')}</label>
                        <div className="relative mt-2 mb-6">
                            <input type="text" disabled={!data?.person_id} className="relative w-full rounded-md bg-white py-2.5 ltr:pl-2.5 rtl:pr-2.5 ltr:pr-10 rtl:pl-10 ltr:text-left rtl:text-right text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-colorPrimary sm:text-base sm:leading-" aria-haspopup="listbox" aria-expanded="true" placeholder={t("Search Products")} aria-labelledby="listbox-label" onFocus={handleSearchList} onChange={e => setSearchProduct(capitalizeFirstLetter(e.target.value))} />
                            <p className="text-red-600 text-sm" ref={brandErrorRef}></p>
                            {/* BrandS Dropdown */}
                            <ul className="hidden absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-ba shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3" ref={prodDropdown}>
                                {filteredproducts?.length !== 0 ?
                                    filteredproducts?.map(product => {
                                        const { name } = product;
                                        console.log("filteredproducts filteredproducts: ", filteredproducts);
                                        return <li className="text-gray-900 relative cursor-pointer select-none py-2.5 pl-2.5 pr-9 hover:bg-gray-200" onClick={() => handleProductItem(product)} id="listbox-option-0" role="option">
                                            <div className="flex items-center">
                                                <span className="font-normal ml-3 block truncate">{product?.name}</span>
                                            </div>
                                            {data._id && name === data.name && <span className="text-colorPrimary absolute inset-y-0 right-0 flex items-center pr-4">
                                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                                </svg>
                                            </span>}
                                        </li>
                                    }) : <li className='p-2.5 ml-3 relative text-gray-600 text-'>Nothing found!</li>
                                }
                            </ul>
                        </div>

                        {data?.sales?.length > 0 && <div className='[&_div]:[&_div]:min-w-[122px]'><DataTable
                            columns={columns}
                            data={data.sales}
                            pagination={false}
                            selectableRowsHighlight
                            customStyles={customStyles}
                            noTableHead={true}
                        /></div>}
                    </div>

                    {/* <div className="mb-6">
                        <label htmlFor="default-input" className="block mb-2 text-lg font-semibold text-gray-900">Select Products</label>
                        <input type="text" name="model_name" placeholder="Search Products" id="default-input" className="border border-gray-300 text-base text-gray-900  rounded-lg focus:ring-colorPrimary focus:border-colorPrimary block w-full p-2.5 outline-colorPrimary" value={data?.model_name} onChange={(e) => handleValue(e)} />
                        <p className="text-red-600 text-sm" ref={modErrorRef}></p>
                    </div> */}
                    <div className="flex justify-end gap-2 mt-8">
                        <button onClick={() => { navigate(-1); handleEmpty() }} className={`bg-gray-400 items-center justify-between flex hover:bg-gray-500 text-white py-2 px-5 rounded`}>
                            {t('Cancel')}
                        </button>
                        <button onClick={handleSubmit} className={`bg-[#2D9D46] items-center justify-between flex hover:bg-opacity-90 text-white py-2 px-5 rounded`}>
                            {t(`Add ${pageType === 'Sale' ? 'Sale' : 'Purchase'}`)}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddSale