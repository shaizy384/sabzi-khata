import React, { useEffect, useRef, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router';
import ModalAddCustomer from './ModalAddCustomer';
import ModalAddCash from '../../components/ui/ModalAddCash';

import Tesseract from 'tesseract.js';
// import vision from '@google-cloud/vision';
// import * as fs from 'browserfs/dist/fs';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { getCustomers } from '../../redux/customers/action';
import { useDispatch, useSelector } from 'react-redux';

const Customers = () => {
  const { t } = useTranslation();
  const fileRef = useRef()
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const customers = useSelector((state) => state.customersReducer.getCustomers?.data);
  useEffect(() => {
    if (!customers) {
      dispatch(getCustomers())
    }
  }, [customers])

  console.log("customers: ", customers);
  const [selectedImage, setSelectedImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  // const CREDENTIALS = process.env.REACT_APP_G_CREDENTIALS
  // const CREDENTIALS = JSON.parse(JSON.stringify({
  //   "type": "service_account",
  //   "project_id": "sabzi-khata-418710",
  //   "private_key_id": "0754a5e3d478251f6b4c005c788669561d28d9ab",
  //   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDMAlzq1tFRQbnM\nhBIvN5+xTVVLn3/fYUJCLo0fPPC2HCvY/I/gYMJiuhyg5n0CpxtozZXtRmclWakZ\nLx3AWZleJaFqoaNgTFwwvQxV7E+M89avjUu5yJCOHPpgMDA3bTDKdG1cyE5R4cto\nq2Y8bRoYJlNHWvHzvDJJwzp09nmF9NS476E/bkIa8kMHSyUz7a4jAWpK09vOGdY4\nY7AceA97r08XYpKA2y10P5JE5XCtydwjSnTiXcYohQUfNRmDhoBAx6WjBaXlKG9u\nB92EiSftR/7ZSUyf6A+quxUJBgsZ3lUbHRhkZtWsFyvh4AoR7shEwUdOE6gHCQIV\nV6G1ftj3AgMBAAECggEADUOzNcZHmUF/nNrbw9K+CjZP3N2/KP1N5G6RRmvT72ff\nyx2uhAMh+9zDszA3Bk7YWNCuUbjb2t78ZNCC3iGsHEpnNz8aF7zM/25CJn95xctA\nWaQDYimR9/3Nx2/aqZIz6n8a34c2lP/HqEO4HybSAKpB1aOYJpOzHMeHq8adGm/s\nrxKYcSgGQjnj6NIJ4SeuPX72cUt5RWqL+Vg6Y757jM+d8F93QCipzJtaq5k6XF2L\nQYcyN1dWit8ro2C/9JRttqyjmWILp/XeutQNqObbldjHPzkQ0eRK+aEMxbufTjcW\ndz15Oc58KeyoJWerwJRqAcsWLCAGDuBeOjhwb91iAQKBgQD43pjaa/3eXKcqJtYJ\nVN5StJRdH+i2Vdwu9DPXvDtPcDMX4LXrTLkV8evCSe9gRjB9BdJvAR372C6sCT3U\nBCLvguKFDiX4C4MTlnf7luCc5R4N/y4iH02qnNMMRkuPWEa/ax+3zgneuezx3WXP\ncFRPbC1N+gk9npg2ZevjTAS1QQKBgQDR2rm+zr36AjCAFQC9M+7zlKHAfjD9zJnZ\nbeLKO8uAyFEaetagkO7JtZTpWDVATXH7t2Uw6i9EbkX1gzcqZl+d8bH533o0lBq1\nks2c+Ggt2hInKYb+loq48dttl8H5QoedVy5oN7Kr8bzurR5B9n3s9I9gMcjZ6OVH\nvHpP0PnoNwKBgQDHIZ2ez+Avh2V+ldqXVuAZv0IjjX+wPd1TeLTuvz+Z3YYUagpG\nP3qtc4iYSn6OQztTHlB136f1NtKJd0+QkMq/aLQFkP+SjOuRxck1d1E8WRwGSRPJ\n29BSXu+EF88n4JOjYHzdnrBJFe3gza1EIXZkooNRrGqucnMKu9zWX6I4wQKBgHUw\nhgXOAj05N8hu8ii2dbxExkdusQEqXsgTG1EAL1bNhq0Y5/5msVKnOm9MuQAdv4do\nFPRJ8vdt9VdzXT0qSj8zl8YITIBMLNY1EumTtunUG8sO37oQa4t4VKdQ1hvSUVVG\nOD4uzHJE3tMSjhEcC5plwCNh6d32twNmd49XDhflAoGBALZfet+fKSyE/f3RFByV\n89t5LxLsz1/puxjJmah7jZLMmc11XFX2QNZgMjpmIB0gwwdaIbEVWALFEVo4uCsN\nXB4MEJjpdhMhSQQIytcfZAmEPHHsSl1nKdU1XzLlmVitIBAGtPo/cc+9WjwGwegB\nVwfH0ehDgczyzAvze84G7vLv\n-----END PRIVATE KEY-----\n",
  //   "client_email": "shaizy-service-acc@sabzi-khata-418710.iam.gserviceaccount.com",
  //   "client_id": "116006010058428636925",
  //   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  //   "token_uri": "https://oauth2.googleapis.com/token",
  //   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  //   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/shaizy-service-acc%40sabzi-khata-418710.iam.gserviceaccount.com",
  //   "universe_domain": "googleapis.com"
  // }
  // ))
  // const config = {
  //   crentials: {
  //     private_key: CREDENTIALS.private_key,
  //     client_email: CREDENTIALS.client_email,
  //   }
  // }
  // const client = new vision.ImageAnnotatorClient(config)
  // let result =
  //   console.log("config: ", config);
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
      name: t('Profile Status'),
      selector: row => (
        row?.status === 1 && <div className='text-[#0DA06A] bg-[#F0FFFA] py-2 px-5 rounded-full'>{"Active"}</div> || row?.status === 0 && <div className='text-sm text-[#E63E36] bg-[#e63e361a] py-1 px-3 rounded-full'>{"Blocked"}</div>
      ),
    },
    {
      name: t('Action'),
      selector: row => (<div className="flex">
        <button onClick={() => navigate(`/customers/customerdetails/${row.id}`)} className={`bg-yellowPrimary text-white font-bold py-2 px-2 rounded-s`}>
          <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" /></g></svg>
        </button>
        <ModalAddCash isCustomer={true} person={row} />
      </div>),
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

  const handleFile = async (e) => {
    console.log(e.target.name);
    console.log("e.target.name");
    const file = e.target.files[0];
    console.log("file: ", file);

    const formData = new FormData();
    formData.append('image', file);

    // // setSelectedImage(URL.createObjectURL(file))

    // try {
    //   const response = await axios.request({
    //     method: 'POST',
    //     url: 'https://image-to-text-imgocr-com.p.rapidapi.com/',
    //     headers: {
    //       'content-type': 'application/json',
    //       'X-RapidAPI-Key': 'ad7e1a2d37msh48c9fbeece03444p105f07jsn216a044c2a78',
    //       'X-RapidAPI-Host': 'image-to-text-imgocr-com.p.rapidapi.com'
    //     },
    //     data: {
    //       image_url: formData
    //     }
    //   })
    //   console.log("extractedText: ", response?.data, response);
    //   // const response = await axios.post('https://imgocr.com/api', formData, {
    //   //   headers: {
    //   //     // Check imgocr.com documentation for any required headers (like API key)
    //   //   },
    //   // });
    //   // const response = await fetch('https://image-to-text-imgocr-com.p.rapidapi.com/', {
    //   // const response = await fetch('https://imgocr.com/api', {
    //   //   method: 'POST',
    //   //   body: formData,
    //   //   mode: 'cors', // Enable CORS mode (limited effectiveness)
    //   //   cache: 'no-cache', // Optional for better caching behavior
    //   // });

    //   // if (!response.ok) {
    //   //   throw new Error(`API request failed with status: ${response.status}`);
    //   // }

    //   // const data = await response.json();
    //   // console.log("extractedText", data, response);
    //   // setOcrText(response.data.text);
    // } catch (error) {
    //   console.error('Error during OCR:', error);
    // }

    // const [response] = await client.textDetection(selectedImage);
    // const fullText = response.fullTextAnnotation.text;
    // setExtractedText(fullText);

    const { data: { text } } = await Tesseract.recognize(file, 'eng');

    // const tbl = parseTextToTable(text)
    // console.log("extractedText: ", text);
    const tArr = text.split(" ")
    // const l = 
    // for (let i = 0; i < tArr.length; i++) {
    //   // const element = tArr[i];
    //   // console.log(tArr[i]);
    // }
    console.log("extractedText: ", text);

    // console.log("extractedText: ", text, text.split(" ")[5], text.split(" ")[0].match(/(\d+)/), text.split(" ")[5].match(/(\d+)/)[0]);
    // console.log("extractedTable: ", tbl);
    // console.log("tbl: ", tbl);
    // setImageText(text);
    // setImage(URL.createObjectURL(file));
    // setData({ ...data, [e.target.name]: file })
    // dispatch(uploadFile(file));
  }

  const handleOcrApi = async () => {
    try {
      const response = await axios.post('http://localhost:2805/api/ocr');

      // if (!response.ok) {
      //   throw new Error(`API request failed with status: ${response.status}`);
      // }

      // const data = await response.json();
      console.log("extractedText", data, response);
      // setOcrText(response.data.text);
    } catch (error) {
      console.error('Error during OCR:', error);
    }
  }

  const filteredData = customers?.filter((row) => {
    // Filter by selected order status
    if (selectedFilter === 'all') {
      return true;
    } else {
      return row.status === (selectedFilter === 1 ? 1 : 0);
    }
  })
    ?.filter((row) => {
      // Filter by search term in customer names
      return row.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  return (
    <div className="py-1 rounded-lg bg-gray-50">
      <div className='sm:mx-10 mx-5 mt-10 mb-5 flex justify-between items-center flex-wrap gap-2'>
        <div className="bg-gray-50 text-gray-900 font-semibold text-2xl">{t('All Customers')}</div>
        <div className="flex gap-2 ltr:ml-auto rtl:mr:auto">
          <ModalAddCustomer />
          {/* <button onClick={() => navigate("addsale")} className={`bg-colorPrimary items-center justify-between flex hover:bg-opacity-90 text-white py-2 px-5 rounded ml-auto`}>
            {t('Add Sale')}
          </button> */}
          {/* <button onClick={() => { fileRef.current.value = null; fileRef.current.click() }} className={`bg-colorPrimary items-center justify-between flex hover:bg-opacity-90 text-white py-2 px-5 rounded ml-auto`}> */}
          {/* --- Upload Image --- */}
          {/* <button onClick={() => { handleOcrApi() }} className={`bg-colorPrimary items-center justify-between flex hover:bg-opacity-90 text-white py-2 px-5 rounded ml-auto`}>
            Upload Image
          </button>
          <input type="file" className='sr-only' ref={fileRef} onChange={handleFile} /> */}
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
            id="rounded-email"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-10 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-colorPrimary focus:border-transparent"
            placeholder={t("Search")}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="relative ltr:ml-3 rtl:mr-3">
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

export default Customers