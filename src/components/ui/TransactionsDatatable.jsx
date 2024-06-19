import React from 'react'
import DataTable from 'react-data-table-component';
import ViewTransactionModal from './ViewTransactionModal';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

const TransactionsDatatable = ({ orders }) => {
    const { t } = useTranslation();
    const { pathname } = useLocation()
    const pageType = pathname.split("/")[1]

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
            name: t('Date'),
            selector: row => row.date,
        },
        {
            name: t('Amount'),
            selector: row => row.total_price,
        },
        {
            name: t('Transactions'),
            selector: row => row.transactions,
        },
        {
            name: t('Details'),
            selector: row => (<ViewTransactionModal ordersPerDay={row?.ordersPerDay} title={pageType !== "suppliers" ? "Sales" : "Purchase"} />),
        },
    ];

    return (
        <>
            <div className='sm:mx-10 mx-5 mt-10 mb-5 flex justify-between items-center flex-wrap gap-3'>
                <div className="bg-gray-50 text-gray-900 font-semibold text-2xl">{t(`${pageType !== "suppliers" ? "Sales" : "Purchase"} History`)}</div>
            </div>
            <div className="md:mx-10 mx-5 shadow-md mt-2 rounded-xl p-2 bg-white">
                <DataTable
                    columns={columns}
                    data={orders}
                    pagination
                    selectableRowsHighlight
                    customStyles={customStyles}
                />
            </div>
        </>
    )
}
export default TransactionsDatatable