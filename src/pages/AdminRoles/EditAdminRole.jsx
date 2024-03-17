import React, { useState } from 'react'
import notification from "../../assets/svgs/notification.svg";
import cross from "../../assets/svgs/cross.svg";
import Input from '../../components/ui/Input';
import { useNavigate } from 'react-router';

const EditAdminRole = () => {
    const navigate = useNavigate();
    const [roles, setRoles] = useState({ user: 'User', userSettings: 'User settings' });
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleAddRole = (name, e) => {
        setRoles({ ...roles, [e.target.name]: name })
        setDropdownVisible(false);
    }

    const handleDeleteRole = (key) => {
        const newRoles = { ...roles };
        delete newRoles[key]
        setRoles(newRoles)
    }

    const handleSubmit = () => {
        console.log(roles);
    }
    const handleCancel = () => {
        navigate('/adminroles');
    }
    return (
        <div className="py-1 rounded-lg bg-gray-50">
            <div className='mx-10 mt-10 mb-5'>
                <button className={`bg-green-500 items-center justify-between flex hover:bg-green-600 text-white py-2 px-4 pr-9 ms-auto rounded`}>
                    <img className='mr-2' src={notification} width={19} alt="notification" />
                    <span>Create new Admin Role</span>
                </button>
            </div>
            <div className="h-full mx-10 shadow my-2 rounded-2xl py-5 px-12 bg-white">
                <div className="flex flex-wrap lg:justify-between justify-center mb-6">
                    <Input type={'name'} value={'Shahzaib'} label={'Name'} />
                    <Input type={'email'} value={'new@brand.com'} label={'Email'} />
                    <Input type={'text'} value={'290888890'} label={'Password'} />

                    <div className="relative mt-6 lg:w-[auto] w-full">
                        <label className='font-medium block mb-3'>Roles</label>
                        <button
                            id="dropdownHoverButton"
                            data-dropdown-toggle="dropdownHover"
                            data-dropdown-trigger="hover"
                            className={`lg:w-96 w-full rounded-2xl border border-neutral-300 bg-transparent py-4 px-5 shadow-sm hover:bg-slate-100 focus:ring-2 focus:outline-none focus:ring-yellowPrimary focus:ring-offset-yellowPrimary font-medium text-sm text-center inline-flex items-center relative`}
                            onClick={() => setDropdownVisible(!dropdownVisible)}
                        >
                            Select
                            <svg className='ms-auto' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6L8 10L12 6" stroke="#6C6975" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        </button>
                        {dropdownVisible && (
                            <div
                                id="dropdownHover"
                                className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-auto absolute mt-2"
                            >
                                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
                                    <li>
                                        <button
                                            name="user"
                                            onClick={(e) => handleAddRole('User', e)}
                                            className={`flex sm:w-96 w-full py-3 px-5 hover:bg-gray-100`}
                                        >
                                            User
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            name="userSettings"
                                            onClick={(e) => handleAddRole('User settings', e)}
                                            className={`flex sm:w-96 w-full py-3 px-5 hover:bg-gray-100`}
                                        >
                                            User settings
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            name="provider"
                                            onClick={(e) => handleAddRole('Provider', e)}
                                            className={`flex sm:w-96 w-full py-3 px-5 hover:bg-gray-100`}
                                        >
                                            Provider
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            name="providerSettings"
                                            onClick={(e) => handleAddRole('Provider settings', e)}
                                            className={`flex sm:w-96 w-full py-3 px-5 hover:bg-gray-100`}
                                        >
                                            Provider settings
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        <div className="flex lg:w-96 w-full">
                            {Object.keys(roles).map((keyName, i) => {
                                console.log("role: ", keyName, i);
                                return <div className="flex items-baseline rounded-lg bg-yellowPrimary text-white py-1.5 px-3 me-3 mt-3">
                                    <span>{roles[keyName]}</span>
                                    <img className='block cursor-pointer ms-2' width={9} src={cross} alt="" onClick={() => handleDeleteRole(keyName)} />
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className='flex lg:justify-start justify-center mt-10 mb-5'>
                    <button className={`bg-green-500 items-center justify-between flex hover:bg-green-600 text-white font-medium py-2 sm:px-9 px-6 rounded`} onClick={handleSubmit}>
                        <span>Save</span>
                    </button>
                    <button className={`bg-slate-200 items-center justify-between flex hover:bg-slate-300 text-gray-500 font-medium py-2 sm:px-9 px-6 ms-3 rounded`} onClick={handleCancel}>
                        <span>Cancel</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditAdminRole