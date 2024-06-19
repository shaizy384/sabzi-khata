import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router';
import ModalAddSupplier from './ModalAddSupplier';
import ModalAddCash from '../../components/ui/ModalAddCash';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getSuppliers } from '../../redux/suppliers/action';

const Supplier = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const suppliers = useSelector((state) => state.suppliersReducer.getSuppliers?.data);

  useEffect(() => {
    if (!suppliers) {
      dispatch(getSuppliers())
    }
  }, [suppliers])

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
      name: t('Picture'),
      selector: row => (<img
        className="ml-5 w-8 h-8 rounded-full"
        src={row.profile_image}
        alt="user photo"
      />),
    },
    {
      name: t('Name'),
      selector: row => row.name,
    },
    {
      name: t('Phone no'),
      selector: row => row.phone,
    },
    {
      name: t('Address'),
      selector: row => row.address,
    },
    {
      name: t('Total Amount'),
      selector: row => row.amount,
    },
    {
      name: t('Approved/ Disapproved'),
      selector: row => (
        row?.status === 1 && <div className='text-[#0DA06A] bg-[#F0FFFA] py-2 px-5 rounded-full'>{"Active"}</div> || row?.status === 0 && <div className='text-sm text-[#E63E36] bg-[#e63e361a] py-1 px-3 rounded-full'>{"Blocked"}</div>
      ),
    },
    {
      name: t('Action'),
      selector: row => (<div className="flex">
        <button onClick={() => navigate(`/suppliers/supplierdetails/${row?._id}`)} className={`bg-yellowPrimary text-white font-bold py-2 px-2 rounded-s`}>
          <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" /></g></svg>
        </button>
        <ModalAddCash isCustomer={false} person={row} />
      </div>),
    },
  ];

  const filteredData = suppliers?.filter((row) => {
    // Filter by selected order status
    if (selectedFilter === 'all') {
      return true;
    } else {
      return row.status === (selectedFilter === 1 ? 1 : 0);
    }
  })?.filter((row) => {
    // Filter by search term in customer names
    return row.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="py-1 rounded-lg bg-gray-50">
      <div className='sm:mx-10 mx-5 mt-10 mb-5 flex justify-between items-center flex-wrap gap-3'>
        <div className="bg-gray-50 text-gray-900 font-semibold text-2xl">{t('All Suppliers')}</div>
        <div className="flex gap-2 ltr:ml-auto rtl:mr-auto">
          <ModalAddSupplier />
        </div>
      </div>
      <div className='sm:mx-10 mx-5 mt-10 flex'>
        <div className="relative w-11/12">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none  focus:border-transparent">
            <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="search"
            _="rounded-email"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-10 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-colorPrimary focus:border-transparent"
            placeholder={t("Search")}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="relative ltr:ml-3 rtl:mr-3">
          <button
            _="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdoFwn-trigger="hover"
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
            {t('Filter')}
          </button>
          {dropdownVisible && (
            <div
              _="dropdownHover"
              className="w-full z-10 bg-white divide-y divide-gray-100 rounded-lg shadow absolute mt-2"
            >
              <ul className="py-2  text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
                <li>
                  <button
                    onClick={() => {
                      setSelectedFilter('all');
                      setDropdownVisible(false);
                    }}
                    className={` w-full block px-4 py-2 ${selectedFilter === 'all' ? 'bg-colorPrimary text-white' : 'hover:bg-gray-100'}`}
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSelectedFilter(1);
                      setDropdownVisible(false);
                    }}
                    className={` w-full block px-4 py-2 ${selectedFilter === 1 ? 'bg-colorPrimary text-white' : 'hover:bg-gray-100'}`}
                  >
                    Active
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSelectedFilter(0);
                      setDropdownVisible(false);
                    }}
                    className={`w-full block px-4 py-2 ${selectedFilter === 0 ? 'bg-colorPrimary text-white' : 'hover:bg-gray-100'}`}
                  >
                    Blocked
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="sm:mx-10 mx-5 shadow-md mt-2 rounded-xl p-2 bg-white">
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

export default Supplier