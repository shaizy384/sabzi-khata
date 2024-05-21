import React, { useEffect } from 'react'
import DataTable from 'react-data-table-component';
import ViewTransactionModal from './ViewTransactionModal';
import { useTranslation } from 'react-i18next';
import { getSales } from '../../redux/customers/action';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchases } from '../../redux/suppliers/action';
import { useLocation } from 'react-router';

const TransactionsDatatable = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const pageType = pathname.split("/")[1]
    console.log(pageType);
    const sales = useSelector((state) => state.customersReducer.getSales?.data);
    const purchases = useSelector((state) => state.suppliersReducer.getPurchases?.data);

    useEffect(() => {
        if (!purchases) {
            dispatch(getPurchases())
        }
    }, [purchases])
    useEffect(() => {
        if (!sales) {
            dispatch(getSales())
        }
    }, [sales])
    console.log("sales: ", sales);
    console.log("purchases: ", purchases);

    const summarizeDataByDate = (sales) => {
        const sale = pageType !== "suppliers" ? sales : purchases?.reduce((acc, current) => {
            const date = current.created_at.slice(0, 10);

            if (!acc[date]) {
                acc[date] = { date, transactions: 0, totalAmount: 0 };
            }

            acc[date].transactions += 1;
            acc[date].totalAmount += current.price;

            return acc;
        }, {});

        return sale ? Object?.values(sale) : [];
    };
    const summarizedSales = summarizeDataByDate(sales);
    console.log("result result result: ", summarizedSales);


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
            selector: row => row.totalAmount,
        },
        {
            name: t('Transactions'),
            selector: row => row.transactions,
        },
        {
            name: t('Details'),
            selector: row => (<ViewTransactionModal date={row.date} sales={sales} />),
            // selector: row => (<button onClick={() => navigate('/ordermanagement/orderdetails')} className={`bg-[#2D9D46] hover:bg-[#217E36] text-white font-bold py-2 px-4 rounded`}>
            //     view
            // </button>),
        },
    ];

    // const data = [
    //     {
    //         id: 1,
    //         customer: 'Furqan',
    //         orderdetail: "Order ID #290888890",
    //         providedby: 'Furqan',
    //         vehicle: "ABX 1234",
    //         price: "$12.00",
    //         orderstatus: 1,
    //         date: "2023-09-05",
    //         amount: 1500,
    //         transactions: 3
    //     },
    //     {
    //         id: 2,
    //         customer: 'Usama',
    //         orderdetail: "Order ID #290888890",
    //         providedby: 'Furqan',
    //         vehicle: 'ABX 4312',
    //         price: "$12.00",
    //         orderstatus: 1,
    //         date: "2023-09-05",
    //         amount: 1500,
    //         transactions: 3
    //     },
    //     {
    //         id: 3,
    //         customer: 'Zahid',
    //         orderdetail: "Order ID #290888890",
    //         providedby: 'Furqan',
    //         vehicle: 'ABX 4312',
    //         price: "$12.00",
    //         orderstatus: 1,
    //         date: "2023-09-05",
    //         amount: 1500,
    //         transactions: 3
    //     },
    //     {
    //         id: 4,
    //         customer: 'Arif',
    //         orderdetail: "Order ID #290888890",
    //         providedby: 'Furqan',
    //         vehicle: 'ABX 4312',
    //         price: "$12.00",
    //         orderstatus: 1,
    //         date: "2023-09-05",
    //         amount: 1500,
    //         transactions: 3
    //     },
    // ]
    // const filteredData = data
    //     .filter((row) => {
    //         // Filter by selected order status
    //         if (selectedFilter === 'all') {
    //             return true;
    //         }
    //         // } else {
    //         //     return row.orderstatus === (selectedFilter === 'active' ? 1 : selectedFilter === 'pending' ? 2 : 3);
    //         // }
    //     })
    // // .filter((row) => {
    // //     return row.customer.toLowerCase().includes(searchTerm.toLowerCase());
    // // });
    return (
        <div className="md:mx-10 mx-5 shadow-md mt-2 rounded-xl p-2 bg-white">
            <DataTable
                columns={columns}
                data={summarizedSales}
                pagination
                selectableRowsHighlight
                customStyles={customStyles}
            />
        </div>
    )
}
export default TransactionsDatatable