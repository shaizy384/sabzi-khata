import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import Input from '../../components/ui/Input';
import { successColor } from '../../constants/colors';
import { useNavigate } from 'react-router';
const Datatable = () => {
    const navigate=useNavigate();
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
                fontWeight:'bold',
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
            name: 'Customer',
            selector: row => row.customer,
        },
        {
            name: 'Order Details',
            selector: row => row.orderdetail,
        },
        {
            name: 'Provided By',
            selector: row => row.providedby,
        },
        {
            name: 'Vehicle',
            selector: row => <div className='font-bold'>{row.vehicle}</div>
        },
        {
            name: 'Price',
            selector: row => row.price,
        },
        {
            name: 'Order Status',
            selector: row => (row.orderstatus===1?<div className='text-[#0DA06A] bg-[#F0FFFA] py-2 px-5 rounded-full'> Active</div>:row.orderstatus===2?<div className='text-[#FB7E15] bg-[#FFF5EB] py-2 px-5 rounded-full'>Pending</div>:<div className='text-[#F34A7C] bg-[#FFF5F5] py-2 px-5 rounded-full'>Cancelled</div>),
        },
        {
            name: 'Details',
            selector: row => (<button  onClick={()=>navigate('/ordermanagement/orderdetails')} className={`bg-[#2D9D46] hover:bg-[#217E36] text-white font-bold py-2 px-4 rounded` }>
            view
          </button>),
        },
    ];
    
    const data = [
        {
            id: 1,
            customer: 'Furqan',
            orderdetail:"Order ID #290888890",
            providedby:'Furqan',
            vehicle:"ABX 1234",
            price :"$12.00",
            orderstatus:1
        },
        {
            id: 2,
            customer: 'Usama',
            orderdetail:"Order ID #290888890",
            providedby:'Furqan',
            vehicle: 'ABX 4312',
            price :"$12.00",
            orderstatus:1   
        },
        {
            id: 3,
            customer: 'Zahid',
            orderdetail:"Order ID #290888890",
            providedby:'Furqan',
            vehicle: 'ABX 4312',
            price :"$12.00",
            orderstatus:1   
        },
        {
            id: 4,
            customer: 'Arif',
            orderdetail:"Order ID #290888890",
            providedby:'Furqan',
            vehicle: 'ABX 4312',
            price :"$12.00",
            orderstatus:1   
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
export default Datatable