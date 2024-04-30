import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router';
import ModalAddProduct from './ModalAddProduct';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);
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
      name: t('Picture'),
      selector: row => (<img
        className="ml-5 w-8 h-8 rounded-full"
        src={row.picture}
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
      selector: row => row.total_amount,
    },
    {
      name: t('Approved/ Disapproved'),
      selector: row => (
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4   rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-colorPrimary"></div>
        </label>
      ),
    },
    {
      name: t('Action'),
      selector: row => (<button onClick={() => navigate('/users/userdetails')} className={`bg-[#2D9D46] hover:bg-[#217E36] text-white font-bold py-2 px-2 rounded`}>
        <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
          <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
          </g>
        </svg>
      </button>),
    },
  ];
  const data = [
    {
      "picture": "https://dummyimage.com/200x200/000/fff&text=Person+1",
      "name": "John Smith",
      "address": "SDK",
      "total_amount": "1813",
      "phone": "+1 (555) 123-4567",
      "gender": "Male",
      "dob": "1985-03-10"
    },
    {
      "picture": "https://dummyimage.com/200x200/000/fff&text=Person+2",
      "name": "Jane Doe",
      "address": "SDK",
      "total_amount": "1813",
      "phone": "+1 (555) 234-5678",
      "gender": "Female",
      "dob": "1990-07-18"
    },
    {
      "picture": "https://dummyimage.com/200x200/000/fff&text=Person+3",
      "name": "Alex Johnson",
      "address": "SDK",
      "total_amount": "1813",
      "phone": "+1 (555) 345-6789",
      "gender": "Non-binary",
      "dob": "1988-12-05"
    },
    {
      "picture": "https://dummyimage.com/200x200/000/fff&text=Person+4",
      "name": "Emily Davis",
      "address": "SDK",
      "total_amount": "1813",
      "phone": "+1 (555) 456-7890",
      "gender": "Female",
      "dob": "1995-01-22"
    },
    {
      "picture": "https://dummyimage.com/200x200/000/fff&text=Person+5",
      "name": "Michael Brown",
      "address": "SDK",
      "total_amount": "1813",
      "phone": "+1 (555) 567-8901",
      "gender": "Male",
      "dob": "1982-09-14"
    },
    {
      "picture": "https://dummyimage.com/200x200/000/fff&text=Person+6",
      "name": "Olivia Taylor",
      "address": "SDK",
      "total_amount": "1813",
      "phone": "+1 (555) 678-9012",
      "gender": "Female",
      "dob": "1993-04-30"
    },
    {
      "picture": "https://dummyimage.com/200x200/000/fff&text=Person+7",
      "name": "Daniel Wilson",
      "address": "SDK",
      "total_amount": "1813",
      "phone": "+1 (555) 789-0123",
      "gender": "Male",
      "dob": "1987-06-08"
    },
    {
      "picture": "https://dummyimage.com/200x200/000/fff&text=Person+8",
      "name": "Sophia Miller",
      "address": "SDK",
      "total_amount": "1813",
      "phone": "+1 (555) 890-1234",
      "gender": "Female",
      "dob": "1997-11-17"
    },
    {
      "picture": "https://dummyimage.com/200x200/000/fff&text=Person+9",
      "name": "Ethan Martinez",
      "address": "SDK",
      "total_amount": "1813",
      "phone": "+1 (555) 901-2345",
      "gender": "Male",
      "dob": "1984-02-25"
    },
    {
      "picture": "https://dummyimage.com/200x200/000/fff&text=Person+10",
      "name": "Ava Garcia",
      "address": "SDK",
      "total_amount": "1813",
      "phone": "+1 (555) 012-3456",
      "gender": "Female",
      "dob": "1994-08-12"
    },
    {
      "picture": "https://dummyimage.com/200x200/000/fff&text=Person+11",
      "name": "Matthew Brown",
      "address": "SDK",
      "total_amount": "1813",
      "phone": "+1 (555) 123-4567",
      "gender": "Male",
      "dob": "1986-03-20"
    },
    {
      "picture": "https://dummyimage.com/200x200/000/fff&text=Person+12",
      "name": "Grace Davis",
      "address": "SDK",
      "total_amount": "1813",
      "phone": "+1 (555) 234-5678",
      "gender": "Female",
      "dob": "1991-07-25"
    },
    {
      "picture": "https://dummyimage.com/200x200/000/fff&text=Person+13",
      "name": "Noah Taylor",
      "address": "SDK",
      "total_amount": "1813",
      "phone": "+1 (555) 345-6789",
      "gender": "Male",
      "dob": "1989-12-12"
    },
    {
      "picture": "https://dummyimage.com/200x200/000/fff&text=Person+14",
      "name": "Lily Moore",
      "address": "SDK",
      "total_amount": "1813",
      "phone": "+1 (555) 456-7890",
      "gender": "Female",
      "dob": "1996-01-28"
    },
    {
      "picture": "https://dummyimage.com/200x200/000/fff&text=Person+15",
      "name": "Carter Johnson",
      "address": "SDK",
      "total_amount": "1813",
      "phone": "+1 (555) 567-8901",
      "gender": "Male",
      "dob": "1983-09-18"
    },
    {
      "picture": "https://dummyimage.com/200x200/000/fff&text=Person+16",
      "name": "Chloe White",
      "address": "SDK",
      "total_amount": "1813",
      "phone": "+1 (555) 678-9012",
      "gender": "Female",
      "dob": "1992-05-05"
    },
    {
      "picture": "https://dummyimage.com/200x200/000/fff&text=Person+17",
      "name": "Logan Harris",
      "address": "SDK",
      "total_amount": "1813",
      "phone": "+1 (555) 789-0123",
      "gender": "Male",
      "dob": "1988-07-10"
    },
    {
      "picture": "https://dummyimage.com/200x200/000/fff&text=Person+18",
      "name": "Emma Wilson",
      "address": "SDK",
      "total_amount": "1813",
      "phone": "+1 (555) 890-1234",
      "gender": "Female",
      "dob": "1998-11-23"
    },
    {
      "picture": "https://dummyimage.com/200x200/000/fff&text=Person+19",
      "name": "Mason Miller",
      "address": "SDK",
      "total_amount": "1813",
      "phone": "+1 (555) 901-2345",
      "gender": "Male",
      "dob": "1985-02-28"
    },
    {
      "picture": "https://dummyimage.com/200x200/000/fff&text=Person+20",
      "name": "Isabella Clark",
      "address": "SDK",
      "total_amount": "1813",
      "phone": "+1 (555) 012-3456",
      "gender": "Female",
      "dob": "1993-08-15"
    }
  ]
  const products = [
    {
      name: "Mango",
      unit: "kg"
    },
    {
      name: "Onion",
      unit: "kg"
    },
    {
      name: "Apple",
      unit: "kg"
    },
    {
      name: "Mango",
      unit: "kg"
    },
    {
      name: "Banana",
      unit: "kg"
    },
    {
      name: "Mango",
      unit: "kg"
    },
  ]

  const filteredData = data
    .filter((row) => {
      // Filter by selected order status
      if (selectedFilter === 'all') {
        return true;
      } else {
        return row.orderstatus === (selectedFilter === 'male' ? 1 : 'female');
      }
    })
    .filter((row) => {
      // Filter by search term in customer names
      return row.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  return (
    <div className="py-1 rounded-lg bg-gray-50">
      <div className='sm:mx-10 mx-5 mt-10 mb-5 flex justify-between items-center flex-wrap gap-3'>
        <div className="bg-gray-50 text-gray-900 font-semibold text-2xl">{t('All Products')}</div>
        <ModalAddProduct />
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
            id="rounded-email"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-10 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-colorPrimary focus:border-transparent"
            placeholder={t("Search")}
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
            {t('Filter')}
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
                      setSelectedFilter('male');
                      setDropdownVisible(false);
                    }}
                    className={` w-full block px-4 py-2 hover:bg-gray-100 ${selectedFilter === 'male' ? 'bg-colorPrimary text-white' : ''
                      }`}
                  >
                    Male
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSelectedFilter('female');
                      setDropdownVisible(false);
                    }}
                    className={`w-full block px-4 py-2 hover:bg-gray-100 ${selectedFilter === 'female' ? 'bg-colorPrimary text-white' : ''
                      }`}
                  >
                    Female
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="sm:mx-10 mx-5 shadow-md mt-2 rounded-xl py-2 px-4 bg-white">
        {/* <DataTable
          columns={columns}
          data={filteredData}
          pagination
          selectableRowsHighlight
          customStyles={customStyles}
        /> */}

        <div className="my-5 flex flex-wrap gap-3">
          {products?.map(p => {
            return <div className="w-[18rem] p-6 bg-white border border-gray-200 rounded-lg shadow flex items-center justify-between">
              <div className="">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{p.name}</h5>
                </a>
                <p className="mb-3 font-semibold text-gray-600">{t(p.unit)}</p>
              </div>
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4   rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-colorPrimary"></div>
                </label>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Products