import React from 'react'
import Breadcrumbs from '../../components/ui/Breadcrumbs'
import DataTable from 'react-data-table-component';

const Addresses = () => {
    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                fontWeight: 'bold',
                paddingLeft: '25px', // override the cell padding for head cells
                paddingRight: '25px',
            },
        },
        cells: {
            style: {
                paddingLeft: '25px', // override the cell padding for data cells
                paddingRight: '25px',
            },
        },
    };
    const columns = [
        {
            name: 'Sr No',
            selector: row => row.srNo,
        },
        {
            name: 'Address Name',
            selector: row => row.addressName,
        },
        {
            name: 'Address',
            selector: row => row.address,
        }
    ];
    const data = [
        {
            srNo: 1,
            addressName: "Home",
            address: 'BSN 34239/ H no street no 34 , New york United State of America',
        },
        {
            srNo: 2,
            addressName: "Office",
            address: 'BSN 34239/ H no street no 34 , New york United State of America',
        },
    ]

    return (
        <div className="py-1 rounded-lg bg-gray-50">
            <div className='mx-10 mt-10 mb-5'>
                <Breadcrumbs home="User" child="Addresses" />
            </div>
            <div className="mx-10 shadow-md mt-2 rounded-xl p-2 bg-white">
                <DataTable
                    columns={columns}
                    data={data}
                    selectableRowsHighlight
                    customStyles={customStyles}
                />
            </div>
        </div>
    )
}

export default Addresses