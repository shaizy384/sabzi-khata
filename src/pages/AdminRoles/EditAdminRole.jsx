import React, { useEffect, useState } from 'react'
import cross from "../../assets/svgs/cross.svg";
import Input from '../../components/ui/Input';
import { useNavigate, useParams } from 'react-router';
import UpdatePassModal from './UpdatePassModal';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { addSubAdmin, getSubAdmins, updateSubAdmin } from '../../redux/subadmin/action';
import { toast } from 'react-toastify';

const EditAdminRole = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { id } = useParams()
    const dispatch = useDispatch()
    const [data, setData] = useState({ dashboard: 0, product: 0, customer: 0, customer_report: 0, supplier: 0, supplier_report: 0 });
    const [roles, setRoles] = useState({});
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const rolesDefined = ['dashboard', 'product', 'customer', 'customer_report', 'supplier', 'supplier_report']
    const subAdmins = useSelector((state) => state.subAdminsReducer.getSubAdmins?.data);

    useEffect(() => {
        if (!subAdmins) {
            dispatch(getSubAdmins())
        }
    }, [subAdmins])
    let subAdmin = subAdmins?.filter(s => s?._id == id);
    if (subAdmins?.length > 0) {
        subAdmin = subAdmin[0]
    }

    useEffect(() => {
        if (!id && !subAdmin) {
            setRoles({});
            setData({ fullName: "", email: "", dashboard: 0, product: 0, customer: 0, customer_report: 0, supplier: 0, supplier_report: 0 })
            return;
        } else if (id && subAdmin) {
            setData({ ...subAdmin })
            const newState = {};
            rolesDefined.forEach(key => {
                if (subAdmin && subAdmin[key]) {
                    if (subAdmin[key] === 1) {
                        newState[key] = key;
                    }
                }
            });
            setRoles(newState)
        }
    }, [id, subAdmin])

    const handleAddRole = (name, e) => {
        setData({ ...data, [name]: 1 })
        setRoles({ ...roles, [name]: name })
        setDropdownVisible(false);
    }

    const handleDeleteRole = (key) => {
        const newRoles = { ...roles };
        delete newRoles[key]
        setData({ ...data, [key]: 0 })
        setRoles(newRoles)
    }

    const handleOnChange = (value, name) => {
        setData({ ...data, [name]: value })
    }

    const handleCancel = () => {
        !id && setData({ dashboard: 0, product: 0, customer: 0, customer_report: 0, supplier: 0, supplier_report: 0 })
        navigate('/adminroles');
    }

    const handleSubmit = () => {
        if ((!id ? data?.password : true) && data?.fullName && data?.email) {
            !id && dispatch(addSubAdmin(data))
            id && dispatch(updateSubAdmin(data))
            handleCancel()
        } else {
            toast.error("All Fields are required")
        }
    }
    return (
        <div className="py-1 rounded-lg bg-gray-50">
            <div className='mx-10 mt-10 mb-5'>
                <div className='flex justify-end'>
                    {id && <UpdatePassModal id={1} subAdmin={subAdmin} />}
                    <button onClick={() => navigate('/adminroles/add')} className={`bg-green-500 items-center justify-between flex hover:bg-green-600 text-white py-2 px-4 rounded`}>
                        <span>{t("Create New Subadmin")}</span>
                    </button>
                </div>
            </div>
            <div className="h-full mx-10 shadow my-2 rounded-2xl py-5 px-12 bg-white">
                <div className="flex flex-wrap lg:justify-between justify-center mb-6">
                    <Input type={'fullName'} value={data.fullName} label={'Name'} onChange={handleOnChange} />
                    <Input type={'email'} value={data.email} label={'Email'} onChange={handleOnChange} />
                    {!id && <div className='lg:w-fit w-full'>
                        <label className='font-medium block mr-auto -mb-3 mt-6 w-auto'>{t('Password')}</label>
                        <Input type={'password'} value={data?.password} onChange={handleOnChange} />
                    </div>}

                    <div className="relative mt-6 lg:w-[auto] w-full">
                        <label className='font-medium block mb-3'>{t("Roles")}</label>
                        <button
                            id="dropdownHoverButton"
                            data-dropdown-toggle="dropdownHover"
                            data-dropdown-trigger="hover"
                            className={`lg:w-96 w-full rounded-2xl border border-neutral-300 bg-transparent py-4 px-5 shadow-sm hover:bg-slate-100 focus:ring-2 focus:outline-none focus:ring-colorPrimary focus:ring-offset-colorPrimary font-medium text-sm text-center inline-flex items-center relative`}
                            onClick={() => setDropdownVisible(!dropdownVisible)}
                        >
                            {t('Select')}
                            <svg className='ms-auto' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6L8 10L12 6" stroke="#6C6975" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        </button>
                        {dropdownVisible && (
                            <div
                                id="dropdownHover"
                                className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-auto absolute mt-2"
                            >
                                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
                                    {rolesDefined.map((role) => {
                                        return <li>
                                            <button
                                                name="dashboard"
                                                onClick={(e) => handleAddRole(role, e)}
                                                className={`flex sm:w-96 w-full py-3 px-5 hover:bg-gray-100 capitalize`}
                                            >
                                                {t(`${role.replace(/_/g, ' ')}`)}
                                            </button>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        )}

                        <div className="flex flex-wrap lg:w-96 w-full">
                            {Object.keys(roles).map((keyName, i) => {
                                return <div className="flex items-baseline rounded-lg bg-colorPrimary text-white py-1.5 px-3 me-3 mt-3">
                                    <span className='capitalize'>{t(roles[keyName].replace(/_/g, ' '))}</span>
                                    <img className='block cursor-pointer ms-2' width={9} src={cross} alt="" onClick={() => handleDeleteRole(keyName)} />
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className='flex lg:justify-start justify-center mt-10 mb-5'>
                    <button className={`bg-green-500 items-center justify-between flex hover:bg-green-600 text-white font-medium py-2 sm:px-9 px-6 rounded`} onClick={handleSubmit}>
                        <span>{t('Save')}</span>
                    </button>
                    <button className={`bg-slate-200 items-center justify-between flex hover:bg-slate-300 text-gray-500 font-medium py-2 sm:px-9 px-6 ms-3 rounded`} onClick={handleCancel}>
                        <span>{t('Cancel')}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditAdminRole