import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import Input from './Input';
import { successColor } from '../../constants/colors';
import { useNavigate } from 'react-router';
import ViewTransactionModal from './ViewTransactionModal';
const TransactionsDatatable = () => {
    const navigate = useNavigate();
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
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
            name: 'Date',
            selector: row => row.date,
        },
        {
            name: 'Amount',
            selector: row => row.amount,
        },
        {
            name: 'Transactions',
            selector: row => row.transactions,
        },
        {
            name: 'Details',
            selector: row => (<ViewTransactionModal />),
            // selector: row => (<button onClick={() => navigate('/ordermanagement/orderdetails')} className={`bg-[#2D9D46] hover:bg-[#217E36] text-white font-bold py-2 px-4 rounded`}>
            //     view
            // </button>),
        },
    ];

    const data = [
        {
            id: 1,
            customer: 'Furqan',
            orderdetail: "Order ID #290888890",
            providedby: 'Furqan',
            vehicle: "ABX 1234",
            price: "$12.00",
            orderstatus: 1,
            date: "2023-09-05",
            amount: 1500,
            transactions: 3
        },
        {
            id: 2,
            customer: 'Usama',
            orderdetail: "Order ID #290888890",
            providedby: 'Furqan',
            vehicle: 'ABX 4312',
            price: "$12.00",
            orderstatus: 1,
            date: "2023-09-05",
            amount: 1500,
            transactions: 3
        },
        {
            id: 3,
            customer: 'Zahid',
            orderdetail: "Order ID #290888890",
            providedby: 'Furqan',
            vehicle: 'ABX 4312',
            price: "$12.00",
            orderstatus: 1,
            date: "2023-09-05",
            amount: 1500,
            transactions: 3
        },
        {
            id: 4,
            customer: 'Arif',
            orderdetail: "Order ID #290888890",
            providedby: 'Furqan',
            vehicle: 'ABX 4312',
            price: "$12.00",
            orderstatus: 1,
            date: "2023-09-05",
            amount: 1500,
            transactions: 3
        },
    ]
    const filteredData = data
        .filter((row) => {
            // Filter by selected order status
            if (selectedFilter === 'all') {
                return true;
            } else {
                return row.orderstatus === (selectedFilter === 'active' ? 1 : selectedFilter === 'pending' ? 2 : 3);
            }
        })
        .filter((row) => {
            return row.customer.toLowerCase().includes(searchTerm.toLowerCase());
        });
    return (
        <div className="mx-10 shadow-md mt-2 rounded-xl p-2 bg-white">
            <DataTable
                columns={columns}
                data={filteredData}
                pagination
                selectableRowsHighlight
                customStyles={customStyles}
            />
        </div>
    )
}
export default TransactionsDatatable