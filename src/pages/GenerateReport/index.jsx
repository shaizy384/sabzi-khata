import React, { useEffect, useRef, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { getCustomerTransactions, getCustomers } from '../../redux/customers/action';
import { useDispatch, useSelector } from 'react-redux';
import { getSupplierTransactions, getSuppliers } from '../../redux/suppliers/action';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import TransactionsTable from './TransactionsTable';

const GenerateReport = React.forwardRef(() => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const location = useLocation();
    const [data, setData] = useState([])
    const [title, setTitle] = useState('')
    const [isPrinting, setIsPrinting] = useState(false)
    // const customers = useSelector((state) => state.customersReducer.getCustomers?.data);
    // const suppliers = useSelector((state) => state.suppliersReducer.getSuppliers?.data);
    // const customertransactions = useSelector((state) => state.customersReducer.getCustomerTransactions?.data);
    // const supplierTransactions = useSelector((state) => state.suppliersReducer.getSupplierTransactions?.data);

    // useEffect(() => {
    //     location?.pathname === "/customerreport" ?
    //         setTitle("Customer") :
    //         setTitle("Supplier")
    //     // console.log("Title: ", title);
    // }, [location])

    // useEffect(() => {
    //     if (!customertransactions && title === "Customer") {
    //         dispatch(getCustomerTransactions())
    //     } else if (customertransactions && title === "Customer") {
    //         setData(customertransactions)
    //     }
    // }, [customertransactions, title])

    // useEffect(() => {
    //     if (!supplierTransactions && title === "Supplier") {
    //         dispatch(getSupplierTransactions())
    //     } else if (supplierTransactions && title === "Supplier") {
    //         setData(supplierTransactions)
    //     }
    // }, [supplierTransactions, title])

    // // console.log("supplierTransactions: ", supplierTransactions, customertransactions, title, location);

    // useEffect(() => {
    //     if (!suppliers) {
    //         dispatch(getSuppliers())
    //     }
    // }, [suppliers])

    // useEffect(() => {
    //     if (!customers) {
    //         dispatch(getCustomers())
    //     }
    // }, [customers])

    // const filterPerson = (id) => {
    //     const person = title === "Supplier" ? suppliers : customers
    //         ?.filter(p => p.id === id);
    //     // console.log("filterPerson filterPerson filterPerson: ", person, id);
    //     return person?.length > 0 && person[0];
    // }

    // const customStyles = {
    //     rows: {
    //         style: {
    //             minHeight: '72px', // override the row height
    //         },
    //     },
    //     headCells: {
    //         style: {
    //             fontWeight: 'bold',
    //             paddingLeft: '8px', // override the cell padding for head cells
    //             paddingRight: '8px',
    //         },
    //     },
    //     cells: {
    //         style: {
    //             paddingLeft: '8px', // override the cell padding for data cells
    //             paddingRight: '8px',
    //         },
    //     },
    // };
    // const columns = [
    //     {
    //         name: t('Account no'),
    //         selector: row => title === "Customer" ? row.customer_id : row.supplier_id,
    //     },
    //     {
    //         name: t('Name'),
    //         selector: row => filterPerson(title === "Customer" ? row.customer_id : row.supplier_id)?.name,
    //     },
    //     {
    //         name: t('Address'),
    //         selector: row => filterPerson(title === "Customer" ? row.customer_id : row.supplier_id)?.address,
    //     },
    //     {
    //         name: t('Remaining Amount'),
    //         selector: row => row.remaining_amount,
    //     },
    //     {
    //         name: t('Fresh Sale Amount'),
    //         selector: row => row.amount_added,
    //     },
    //     {
    //         name: t('Total Amount'),
    //         selector: row => row.total_amount,
    //     },
    // ]
    // const cdata = [
    //     {
    //         id: 1,
    //         "picture": "https://dummyimage.com/200x200/000/fff&text=Person+1",
    //         "name": "John Smith",
    //         "email": "john.smith@example.com",
    //         "address": "SDK",
    //         "total_amount": "1813",
    //         "phone": "+1 (555) 123-4567",
    //         "gender": "Male",
    //         "dob": "1985-03-10"
    //     },
    //     {
    //         id: 1,
    //         "picture": "https://dummyimage.com/200x200/000/fff&text=Person+2",
    //         "name": "Jane Doe",
    //         "email": "jane.doe@example.com",
    //         "address": "SDK",
    //         "total_amount": "1813",
    //         "phone": "+1 (555) 234-5678",
    //         "gender": "Female",
    //         "dob": "1990-07-18"
    //     },
    //     {
    //         id: 1,
    //         "picture": "https://dummyimage.com/200x200/000/fff&text=Person+3",
    //         "name": "Alex Johnson",
    //         "email": "alex.johnson@example.com",
    //         "address": "SDK",
    //         "total_amount": "1813",
    //         "phone": "+1 (555) 345-6789",
    //         "gender": "Non-binary",
    //         "dob": "1988-12-05"
    //     },
    //     {
    //         id: 1,
    //         "picture": "https://dummyimage.com/200x200/000/fff&text=Person+4",
    //         "name": "Emily Davis",
    //         "email": "emily.davis@example.com",
    //         "address": "SDK",
    //         "total_amount": "1813",
    //         "phone": "+1 (555) 456-7890",
    //         "gender": "Female",
    //         "dob": "1995-01-22"
    //     },
    //     {
    //         id: 1,
    //         "picture": "https://dummyimage.com/200x200/000/fff&text=Person+5",
    //         "name": "Michael Brown",
    //         "email": "michael.brown@example.com",
    //         "address": "SDK",
    //         "total_amount": "1813",
    //         "phone": "+1 (555) 567-8901",
    //         "gender": "Male",
    //         "dob": "1982-09-14"
    //     },
    //     {
    //         id: 1,
    //         "picture": "https://dummyimage.com/200x200/000/fff&text=Person+6",
    //         "name": "Olivia Taylor",
    //         "email": "olivia.taylor@example.com",
    //         "address": "SDK",
    //         "total_amount": "1813",
    //         "phone": "+1 (555) 678-9012",
    //         "gender": "Female",
    //         "dob": "1993-04-30"
    //     },
    //     {
    //         id: 1,
    //         "picture": "https://dummyimage.com/200x200/000/fff&text=Person+7",
    //         "name": "Daniel Wilson",
    //         "email": "daniel.wilson@example.com",
    //         "address": "SDK",
    //         "total_amount": "1813",
    //         "phone": "+1 (555) 789-0123",
    //         "gender": "Male",
    //         "dob": "1987-06-08"
    //     },
    //     {
    //         id: 1,
    //         "picture": "https://dummyimage.com/200x200/000/fff&text=Person+8",
    //         "name": "Sophia Miller",
    //         "email": "sophia.miller@example.com",
    //         "address": "SDK",
    //         "total_amount": "1813",
    //         "phone": "+1 (555) 890-1234",
    //         "gender": "Female",
    //         "dob": "1997-11-17"
    //     },
    //     {
    //         id: 1,
    //         "picture": "https://dummyimage.com/200x200/000/fff&text=Person+9",
    //         "name": "Ethan Martinez",
    //         "email": "ethan.martinez@example.com",
    //         "address": "SDK",
    //         "total_amount": "1813",
    //         "phone": "+1 (555) 901-2345",
    //         "gender": "Male",
    //         "dob": "1984-02-25"
    //     },
    //     {
    //         id: 1,
    //         "picture": "https://dummyimage.com/200x200/000/fff&text=Person+10",
    //         "name": "Ava Garcia",
    //         "email": "ava.garcia@example.com",
    //         "address": "SDK",
    //         "total_amount": "1813",
    //         "phone": "+1 (555) 012-3456",
    //         "gender": "Female",
    //         "dob": "1994-08-12"
    //     },
    //     {
    //         id: 1,
    //         "picture": "https://dummyimage.com/200x200/000/fff&text=Person+11",
    //         "name": "Matthew Brown",
    //         "email": "matthew.brown@example.com",
    //         "address": "SDK",
    //         "total_amount": "1813",
    //         "phone": "+1 (555) 123-4567",
    //         "gender": "Male",
    //         "dob": "1986-03-20"
    //     },
    //     {
    //         id: 1,
    //         "picture": "https://dummyimage.com/200x200/000/fff&text=Person+12",
    //         "name": "Grace Davis",
    //         "email": "grace.davis@example.com",
    //         "address": "SDK",
    //         "total_amount": "1813",
    //         "phone": "+1 (555) 234-5678",
    //         "gender": "Female",
    //         "dob": "1991-07-25"
    //     },
    //     {
    //         id: 1,
    //         "picture": "https://dummyimage.com/200x200/000/fff&text=Person+13",
    //         "name": "Noah Taylor",
    //         "email": "noah.taylor@example.com",
    //         "address": "SDK",
    //         "total_amount": "1813",
    //         "phone": "+1 (555) 345-6789",
    //         "gender": "Male",
    //         "dob": "1989-12-12"
    //     },
    //     {
    //         id: 1,
    //         "picture": "https://dummyimage.com/200x200/000/fff&text=Person+14",
    //         "name": "Lily Moore",
    //         "email": "lily.moore@example.com",
    //         "address": "SDK",
    //         "total_amount": "1813",
    //         "phone": "+1 (555) 456-7890",
    //         "gender": "Female",
    //         "dob": "1996-01-28"
    //     },
    //     {
    //         id: 1,
    //         "picture": "https://dummyimage.com/200x200/000/fff&text=Person+15",
    //         "name": "Carter Johnson",
    //         "email": "carter.johnson@example.com",
    //         "address": "SDK",
    //         "total_amount": "1813",
    //         "phone": "+1 (555) 567-8901",
    //         "gender": "Male",
    //         "dob": "1983-09-18"
    //     },
    //     {
    //         id: 1,
    //         "picture": "https://dummyimage.com/200x200/000/fff&text=Person+16",
    //         "name": "Chloe White",
    //         "email": "chloe.white@example.com",
    //         "address": "SDK",
    //         "total_amount": "1813",
    //         "phone": "+1 (555) 678-9012",
    //         "gender": "Female",
    //         "dob": "1992-05-05"
    //     },
    //     {
    //         id: 1,
    //         "picture": "https://dummyimage.com/200x200/000/fff&text=Person+17",
    //         "name": "Logan Harris",
    //         "email": "logan.harris@example.com",
    //         "address": "SDK",
    //         "total_amount": "1813",
    //         "phone": "+1 (555) 789-0123",
    //         "gender": "Male",
    //         "dob": "1988-07-10"
    //     },
    //     {
    //         id: 1,
    //         "picture": "https://dummyimage.com/200x200/000/fff&text=Person+18",
    //         "name": "Emma Wilson",
    //         "email": "emma.wilson@example.com",
    //         "address": "SDK",
    //         "total_amount": "1813",
    //         "phone": "+1 (555) 890-1234",
    //         "gender": "Female",
    //         "dob": "1998-11-23"
    //     },
    //     {
    //         id: 1,
    //         "picture": "https://dummyimage.com/200x200/000/fff&text=Person+19",
    //         "name": "Mason Miller",
    //         "email": "mason.miller@example.com",
    //         "address": "SDK",
    //         "total_amount": "1813",
    //         "phone": "+1 (555) 901-2345",
    //         "gender": "Male",
    //         "dob": "1985-02-28"
    //     },
    //     {
    //         id: 1,
    //         "picture": "https://dummyimage.com/200x200/000/fff&text=Person+20",
    //         "name": "Isabella Clark",
    //         "email": "isabella.clark@example.com",
    //         "address": "SDK",
    //         "total_amount": "1813",
    //         "phone": "+1 (555) 012-3456",
    //         "gender": "Female",
    //         "dob": "1993-08-15"
    //     }
    // ]

    // for print
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    // const handlePrint = useReactToPrint({
    //     documentTitle: "Print This Document",
    //     onBeforePrint: () => console.log("before printing..."),
    //     onAfterPrint: () => console.log("after printing..."),
    //     removeAfterPrint: true,
    // });

    return (
        <div className="py-1 rounded-lg bg-gray-50">
            <div className='sm:mx-10 mx-5 mt-10 mb-5 flex justify-between items-center flex-wrap gap-3'>
                <div className="bg-gray-50 text-gray-900 font-semibold text-2xl">{t(`${title} Report`)}</div>
                <ReactToPrint
                    trigger={() => <button setIsPrinting={true} className={`bg-colorPrimary items-center justify-between flex hover:bg-opacity-90 text-white py-2 px-5 rounded ltr:ml-auto rtl:mr-auto`}>{t('Generate Report')}</button>}
                    content={() => componentRef.current}
                />
                {/* <button onClick={handlePrint} className={`bg-colorPrimary items-center justify-between flex hover:bg-opacity-90 text-white py-2 px-5 rounded ltr:ml-auto rtl:mr-auto`}>{t('Generate Report')}</button> */}
            </div>
            <TransactionsTable title={title} setTitle={setTitle} ref={componentRef} />
            {/* <div className="sm:mx-10 mx-5 shadow-md mt-2 rounded-xl p-2 bg-white ref={componentRef}">
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    selectableRowsHighlight
                    customStyles={customStyles}
                />
            </div> */}
        </div >
    )
})

export default GenerateReport