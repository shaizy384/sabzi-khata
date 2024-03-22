import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import Input from '../../components/ui/Input';
import { successColor } from '../../constants/colors';
import { useNavigate } from 'react-router';


const OrderManagement = () => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
    // Handle save logic here
    console.log("Changes saved!");
  };

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
      selector: row => (row.orderstatus === 1 ? <div className='text-[#0DA06A] bg-[#F0FFFA] py-2 px-5 rounded-full'> Active</div> : row.orderstatus === 2 ? <div className='text-[#FB7E15] bg-[#FFF5EB] py-2 px-5 rounded-full'>Pending</div> : <div className='text-[#F34A7C] bg-[#FFF5F5] py-2 px-5 rounded-full'>Cancelled</div>),
    },
    {
      name: 'Details',
      selector: row => (<button onClick={() => navigate('/ordermanagement/orderdetails')} className={`bg-[#2D9D46] hover:bg-[#217E36] text-white font-bold py-2 px-4 rounded`}>
        view
      </button>),
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
      orderstatus: 1
    },
    {
      id: 2,
      customer: 'Usama',
      orderdetail: "Order ID #290888890",
      providedby: 'Furqan',
      vehicle: 'ABX 4312',
      price: "$12.00",
      orderstatus: 1
    },
    {
      id: 3,
      customer: 'Zahid',
      orderdetail: "Order ID #290888890",
      providedby: 'Furqan',
      vehicle: 'ABX 4312',
      price: "$12.00",
      orderstatus: 1
    },
    {
      id: 4,
      customer: 'Arif',
      orderdetail: "Order ID #290888890",
      providedby: 'Furqan',
      vehicle: 'ABX 4312',
      price: "$12.00",
      orderstatus: 1
    },
    {
      id: 5,
      customer: 'Aleem',
      orderdetail: "Order ID #290888890",
      providedby: 'Furqan',
      vehicle: 'ABX 4312',
      price: "$12.00",
      orderstatus: 1
    },
    {
      id: 6,
      customer: 'Javed',
      orderdetail: "Order ID #290888890",
      providedby: 'Furqan',
      vehicle: 'ABX 4312',
      price: "$12.00",
      orderstatus: 1
    },
    {
      id: 7,
      customer: 'Beetle juice',
      orderdetail: "Order ID #290888890",
      providedby: 'Furqan',
      vehicle: 'ABX 4312',
      price: "$12.00",
      orderstatus: 1
    },
    {
      id: 8,
      customer: 'Beetle juice',
      orderdetail: "Order ID #290888890",
      providedby: 'Furqan',
      vehicle: 'ABX 4312',
      price: "$12.00",
      orderstatus: 2
    },
    {
      id: 9,
      customer: 'Javed',
      orderdetail: "Order ID #290888890",
      providedby: 'Furqan',
      vehicle: 'ABX 4312',
      price: "$12.00",
      orderstatus: 3
    },
    {
      id: 10,
      customer: 'Beetle juice',
      orderdetail: "Order ID #290888890",
      providedby: 'Furqan',
      vehicle: 'ABX 4312',
      price: "$12.00",
      orderstatus: 2
    },
    {
      id: 11,
      customer: 'Beetlejuice',
      orderdetail: "Order ID #290888890",
      providedby: 'Furqan',
      vehicle: "ABX 1234",
      price: "$12.00",
      orderstatus: 1
    },
    {
      id: 12,
      customer: 'Beetle juice',
      orderdetail: "Order ID #290888890",
      providedby: 'Furqan',
      vehicle: 'ABX 4312',
      price: "$12.00",
      orderstatus: 1
    },
    {
      id: 13,
      customer: 'Beetle juice',
      orderdetail: "Order ID #290888890",
      providedby: 'Furqan',
      vehicle: 'ABX 4312',
      price: "$12.00",
      orderstatus: 1
    },
    {
      id: 14,
      customer: 'Beetle juice',
      orderdetail: "Order ID #290888890",
      providedby: 'Furqan',
      vehicle: 'ABX 4312',
      price: "$12.00",
      orderstatus: 1
    },
    {
      id: 15,
      customer: 'Beetle juice',
      orderdetail: "Order ID #290888890",
      providedby: 'Furqan',
      vehicle: 'ABX 4312',
      price: "$12.00",
      orderstatus: 1
    },
    {
      id: 16,
      customer: 'Beetle juice',
      orderdetail: "Order ID #290888890",
      providedby: 'Furqan',
      vehicle: 'ABX 4312',
      price: "$12.00",
      orderstatus: 3
    },
    {
      id: 17,
      customer: 'Beetle juice',
      orderdetail: "Order ID #290888890",
      providedby: 'Furqan',
      vehicle: 'ABX 4312',
      price: "$12.00",
      orderstatus: 2
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
      // Filter by search term in customer names
      return row.customer.toLowerCase().includes(searchTerm.toLowerCase());
    });
  return (
    <div className="py-1 rounded-lg bg-gray-50">
      <div className='mx-10 mt-10 flex'>
        <div className="relative w-11/12">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none  focus:border-transparent">
            <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="search"
            id="rounded-email"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-10 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-colorPrimary focus:border-transparent"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="relative ml-3">
          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            className={`text-black bg-white shadow-sm hover:bg-slate-100 focus:ring-2 focus:outline-none focus:ring-colorPrimary focus:ring-offset-colorPrimary font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center relative`}
            onClick={() => setDropdownVisible(!dropdownVisible)}
          >
            <svg
              className="w-5 h-5 mx-1 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18.85 1.1A1.99 1.99 0 0 0 17.063 0H2.937a2 2 0 0 0-1.566 3.242L6.99 9.868 7 14a1 1 0 0 0 .4.8l4 3A1 1 0 0 0 13 17l.01-7.134 5.66-6.676a1.99 1.99 0 0 0 .18-2.09Z" />
            </svg>
            Filter
          </button>
          {dropdownVisible && (
            <div
              id="dropdownHover"
              className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-auto absolute mt-2"
            >
              <ul className="py-2  text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
                <li>
                  <button
                    onClick={() => {
                      setSelectedFilter('all');
                      setDropdownVisible(false);
                    }}
                    className={` w-full block px-4 py-2 hover:bg-gray-100 ${selectedFilter === 'all' ? 'bg-colorPrimary text-white' : ''
                      }`}
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSelectedFilter('active');
                      setDropdownVisible(false);
                    }}
                    className={` w-full block px-4 py-2 hover:bg-gray-100 ${selectedFilter === 'active' ? 'bg-colorPrimary text-white' : ''
                      }`}
                  >
                    Active
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSelectedFilter('pending');
                      setDropdownVisible(false);
                    }}
                    className={`w-full block px-4 py-2 hover:bg-gray-100 ${selectedFilter === 'pending' ? 'bg-colorPrimary text-white' : ''
                      }`}
                  >
                    Pending
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSelectedFilter('cancelled');
                      setDropdownVisible(false);
                    }}
                    className={`w-full block px-4 py-2 hover:bg-gray-100 ${selectedFilter === 'cancelled' ? 'bg-colorPrimary text-white' : ''
                      }`}
                  >
                    Cancelled
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="mx-10 shadow-md mt-2 rounded-xl p-2 bg-white">
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          selectableRowsHighlight
          customStyles={customStyles}
        />
      </div>
    </div>
  )
}

export default OrderManagement