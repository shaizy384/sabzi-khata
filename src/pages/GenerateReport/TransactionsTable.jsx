import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { getSupplierTransactions } from '../../redux/suppliers/action';
import { getCustomerTransactions } from '../../redux/customers/action';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

const TransactionsTable = React.forwardRef(({ title, setTitle }, ref) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const location = useLocation();
    const [data, setData] = useState([])
    const customertransactions = useSelector((state) => state.customersReducer.getCustomerTransactions?.data);
    const supplierTransactions = useSelector((state) => state.suppliersReducer.getSupplierTransactions?.data);

    useEffect(() => {
        location?.pathname === "/customerreport" ?
            setTitle("Customer") :
            setTitle("Supplier")
    }, [location])

    useEffect(() => {
        if (!customertransactions && title === "Customer") {
            dispatch(getCustomerTransactions())
        } else if (customertransactions && title === "Customer") {
            setData(customertransactions)
        }
    }, [customertransactions, title])

    useEffect(() => {
        if (!supplierTransactions && title === "Supplier") {
            dispatch(getSupplierTransactions())
        } else if (supplierTransactions && title === "Supplier") {
            setData(supplierTransactions)
        }
    }, [supplierTransactions, title])

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
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };
    const columns = [
        {
            name: t('Account no'),
            selector: row => title === "Customer" ? row.customer_id : row.supplier_id,
        },
        {
            name: t('Name'),
            selector: row => row?.name,
        },
        {
            name: t('Address'),
            selector: row => row?.address,
        },
        {
            name: t('Remaining Amount'),
            selector: row => row.previous_amount,
        },
        {
            name: t('Fresh Sale'),
            selector: row => row.amount_added,
        },
        {
            name: t('Total Amount'),
            selector: row => row.remaining_amount,
        },
        {
            name: t('Received Amount'),
            selector: row => "",
        },
    ]
    return (
        <>
            <div className="sm:mx-10 mx-5 shadow-md rounded-xl py-2 bg-white ref={componentRef}">
                <div ref={ref} className='mx-2 my-2' id='printable-table'>
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination
                        selectableRowsHighlight
                        customStyles={customStyles}
                    />
                </div>
            </div>
        </>
    )
})

export default TransactionsTable