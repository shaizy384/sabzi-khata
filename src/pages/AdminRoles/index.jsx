import React, { useEffect } from 'react'
import DataTable from 'react-data-table-component';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import basket from "../../assets/svgs/delete.svg";
import edit from "../../assets/svgs/edit.svg";
import notification from "../../assets/svgs/notification.svg";
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSubAdmin, getSubAdmins } from '../../redux/subadmin/action';

const AdminRoles = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const subAdmins = useSelector((state) => state.subAdminsReducer.getSubAdmins?.data);
    useEffect(() => {
        if (!subAdmins) {
            dispatch(getSubAdmins())
        }
    }, [subAdmins])

    console.log("subAdmins: ", subAdmins);
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
            name: t('Sr No.'),
            selector: row => row.id,
        },
        {
            name: t('Name'),
            selector: row => row.name,
        },
        {
            name: t('Email'),
            selector: row => row.email,
        },
        {
            name: t('Action'),
            selector: row => (<div className='flex'>
                <button onClick={() => navigate(`/adminroles/edit/${row.id}`)} className={`w-[36px] bg-cyan-500 hover:bg-cyan-600 text-white font-bold py- p-[0.525rem] rounded-xl me-2`}>
                    <img src={edit} width={18.5} alt="edit" />
                </button>
                <button onClick={() => dispatch(deleteSubAdmin(row?.id))} className={`w-[36px] bg-rose-500 hover:bg-rose-600 text-white font-bold py- p-[0.525rem] rounded-xl`}>
                    <img src={basket} width={18.5} alt="basket" />
                </button>
            </div>),
        }
    ];
    const data = [
        {
            srNum: 1,
            name: "Shahzaib",
            email: 'new@brand.com',
            password: '290888890',
            roles: 'User,  User App settings',
            actions: ''
        },
        {
            srNum: 2,
            name: "Furqan",
            email: 'new@brand.com',
            password: '290888890',
            roles: 'Provider,  Provider App Settings',
            actions: ''
        },
    ]

    return (
        <div className="py-1 rounded-lg bg-gray-50">
            <div className='md:mx-10 mx-5 mt-10 mb-5'>
                <button onClick={() => navigate('/adminroles/add')} className={`bg-green-500 items-center justify-between flex hover:bg-green-600 text-white py-2 px-4 ms-auto rounded`}>
                    {/* <img className='mr-2' src={notification} width={19} alt="notification" /> */}
                    <span className=''>{t('Create New Subadmin')}</span>
                </button>
            </div>
            <div className="h-full md:mx-10 mx-5 shadow-md my-2 rounded-xl p-2 bg-white">
                <DataTable
                    columns={columns}
                    data={subAdmins ? subAdmins : []}
                    selectableRowsHighlight
                    customStyles={customStyles}
                />
            </div>
        </div>
    )
}

export default AdminRoles