import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { getSupplierTransactions, getSuppliers } from '../../redux/suppliers/action';
import { getCustomerTransactions, getCustomers } from '../../redux/customers/action';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

const TransactionsTable = React.forwardRef(({ title, setTitle }, ref) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const location = useLocation();
    const [data, setData] = useState([])
    const customers = useSelector((state) => state.customersReducer.getCustomers?.data);
    const suppliers = useSelector((state) => state.suppliersReducer.getSuppliers?.data);
    const customertransactions = useSelector((state) => state.customersReducer.getCustomerTransactions?.data);
    const supplierTransactions = useSelector((state) => state.suppliersReducer.getSupplierTransactions?.data);

    useEffect(() => {
        location?.pathname === "/customerreport" ?
            setTitle("Customer") :
            setTitle("Supplier")
        // console.log("Title: ", title);
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

    // console.log("supplierTransactions: ", supplierTransactions, customertransactions, title, location);

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

    const filterPerson = (id) => {
        const person = title === "Supplier" ? suppliers : customers
            ?.filter(p => p.id === id);
        // console.log("filterPerson filterPerson filterPerson: ", person, id);
        return person?.length > 0 && person[0];
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
            selector: row => filterPerson(title === "Customer" ? row.customer_id : row.supplier_id)?.name,
        },
        {
            name: t('Address'),
            selector: row => filterPerson(title === "Customer" ? row.customer_id : row.supplier_id)?.address,
        },
        {
            name: t('Remaining Amount'),
            selector: row => row.remaining_amount,
        },
        {
            name: t('Fresh Sale Amount'),
            selector: row => row.amount_added,
        },
        {
            name: t('Total Amount'),
            selector: row => row.total_amount,
        },
        // {
        //     name: t('Received Amount'),
        //     selector: row => "",
        // },
    ]
    return (
        <>
            <div ref={ref} className="sm:mx-10 mx-5 shadow-md mt-2 rounded-xl p-2 bg-white ref={componentRef}">
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    selectableRowsHighlight
                    customStyles={customStyles}
                />
            </div>
        </>
    )
})
// })

export default TransactionsTable