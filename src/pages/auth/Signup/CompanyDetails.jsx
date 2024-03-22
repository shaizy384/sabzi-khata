import React, { useEffect, useRef, useState } from 'react'
import logo from "../../../../assets/svgs/logo.svg"
import Input from '../../../components/Input'
import partyPopper from '../../../../assets/company/svgs/partyPopper.svg'
import uploadIcon from "../../../../assets/company/svgs/uploadIcon.svg";
import certifiedSuccess from "../../../../assets/company/svgs/certifiedSuccess.svg";
import pictureIcon from "../../../../assets/company/svgs/pictureIcon.svg";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { empty, uploadFile } from '../../../../redux/uploadFile/action';
import { signupUser } from '../../../../redux/company/cAuth/action';

const CompanyDetails = ({ data, setData, formType, setFormType }) => {
    const inpFileRef = useRef()
    const crFileRef = useRef()
    const dispatch = useDispatch()
    const [detailsType, setDetailsType] = useState("logo")
    const isAuthenticated = useSelector(state => state.companyAuthReducer.isAuthenticated)
    const loading = useSelector(state => state.companyAuthReducer?.loading)
    console.log(isAuthenticated);
    const imageLoading = useSelector(state => state.uploadFileReducer.uploadFile?.loading)
    const imageURL = useSelector(state => state.uploadFileReducer.uploadFile?.data)
    console.log(imageURL, imageLoading);
    const handleFile = (e) => {
        console.log(e.target.name);
        console.log("e.target.name");
        const file = e.target.files[0];
        // setImage(URL.createObjectURL(file));
        // setData({ ...data, [e.target.name]: file })
        dispatch(uploadFile(file));
    }
    useEffect(() => {
        if (detailsType === "logo" && imageURL) {
            setData({ ...data, "company_logo": imageURL })
            dispatch(empty())
        }
        else if (detailsType === "registration" && imageURL) {
            setData({ ...data, "registration_certificate": imageURL })
            dispatch(empty())
            console.log(data)
        }
    }, [imageURL])

    useEffect(() => {
        detailsType === "registration" && isAuthenticated && setDetailsType("success")
    }, [isAuthenticated])

    const handleChange = (value, name) => {
        setData({ ...data, [name]: value })
        console.log(data);
    };

    const handleBack = () => {
        if (!loading) {
            formType === "company_details" && detailsType === "logo" && setFormType("credentials")
            detailsType === "location" && setDetailsType("logo")
            detailsType === "registration" && setDetailsType("location")
        }
    }

    // const handleNext = () => {
    //     if (!loading) {
    //         detailsType === "logo" && data?.company_logo && data?.company_name && setDetailsType("location")
    //         detailsType === "location" && data?.company_located && data?.no_of_employees && data?.no_of_vehicle && setDetailsType("registration")
    //         detailsType === "registration" && data?.registration_no && data?.registration_certificate && dispatch(signupUser(data))
    //         // detailsType === "registration" && data?.registration_no && data?.registration_certificate && setDetailsType("success")
    //         // detailsType === "registration" && data?.registration_no && data?.registration_certificate && console.log("success data: ", data);
    //     }
    // }
    return (
        <div className='bg-gradient-to-b from-gray-800 to-gray-500 h-screen w-full flex items-center justify-center'>
            <div className="sm:max-w-sm w-full mx-auto bg-white px-6 py-4 rounded-2xl">
                <div className="w-8/12 mx-auto bg-black rounded-2xl p-8">
                    <img src={logo} alt="Logo" className="w-full" />
                </div>
                {detailsType !== "success" ? <>
                    <div className='mt-3 mb-2'>
                        <p className='text-gray-500 text-xs'>Register Your Company</p>
                        <p className='font-semibold text-lg'>Company Details</p>
                    </div>
                    {detailsType === "logo" && <div>
                        <div className="flex items-center gap-3">
                            <img src={data?.company_logo ? data?.company_logo : pictureIcon} className='h-16 w-16 rounded-full' alt="pictureIcon" />
                            <div className='w-full'>
                                <button className={`w-full border rounded-full p-3 ${imageLoading && 'opacity-50 cursor-not-allowed'}`} onClick={() => !imageLoading && inpFileRef.current.click() && (crFileRef.current.value = null)}>Upload company logo</button>
                                <input type="file" className='sr-only' name="company_logo" id="" ref={inpFileRef} onChange={handleFile} />
                            </div>
                        </div>
                        <Input
                            type={"company_name"}
                            placeholder={"Company Name"}
                            label="What’s your company name?"
                            name="company_name"
                            value={data?.company_name}
                            onChange={handleChange}
                        />
                    </div>}

                    {detailsType === "location" && <div className='flex flex-col gap-2'>
                        <Input
                            type={"company_located"}
                            placeholder={"Company location"}
                            label="Where your company located?"
                            value={data?.company_located}
                            onChange={handleChange}
                        />
                        <Input
                            type={"no_of_employees"}
                            placeholder={"02-100"}
                            label="How many employees in company?"
                            value={data?.no_of_employees}
                            onChange={handleChange}
                        />
                        <Input
                            type={"no_of_vehicle"}
                            placeholder={"02-100"}
                            label="How many vehicles company have?"
                            value={data?.no_of_vehicle}
                            onChange={handleChange}
                        />
                    </div>}

                    {detailsType === "registration" && <div className='flex flex-col gap-2'>
                        <Input
                            type={"registration_no"}
                            placeholder={"CR number"}
                            label="What’s your Commercial Registration number?"
                            value={data?.registration_no}
                            onChange={handleChange}
                        />
                        <div className="flex flex-col gap-2">
                            <label className='font-medium block mb-1'>Commercial Registration Certificate</label>
                            <div onClick={() => !data?.registration_certificate && crFileRef.current.click() && (crFileRef.current.value = null)} className={`border flex justify-center w-full ${!data?.registration_certificate && 'cursor-pointer'}`}>
                                {!data?.registration_certificate ?
                                    <img src={uploadIcon} className="my-2" alt="" /> :
                                    <div className='relative'>
                                        <button onClick={() => setData({ ...data, "registration_certificate": "" })} className='bg-red-500 text-white px-2 pb-1 rounded-full absolute right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold border-2 border-white'>x</button>
                                        <img src={data?.registration_certificate} className="h-32 p-2 mx-auto" alt="" />
                                    </div>
                                }
                            </div>
                            <input id="file-upload" name="registration_certificate" type="file" className="sr-only" ref={crFileRef} onChange={handleFile} />
                        </div>
                    </div>}
                    <hr className='my-3' />
                    <div className="flex gap-2 justify-end">
                        <button onClick={handleBack} className={`rounded px-5 py-2 bg-white hover:bg-gray-50 border ${loading && "opacity-50 cursor-not-allowed"}`}>Back</button>
                        <button onClick={handleNext} className={`rounded px-5 py-2 bg-colorPrimary ${loading && "opacity-50 cursor-not-allowed"}`}>Next</button>
                    </div>
                </> : <div className='flex flex-col gap-4 my-3'>
                    <div className="flex justify-center align-middle gap-3">
                        <img className='w-9' src={partyPopper} alt="partyPopper" />
                        <h1 className='text-colorPrimary font-medium text-2xl'>Congratulations</h1>
                        <img className='w-9' src={partyPopper} alt="partyPopper" />
                    </div>
                    <img src={certifiedSuccess} className='h-36' alt="" />
                    <p className='text-gray-400 text-sm text-center'>Your Company has been registered successfully<br />Your will be able to perform operations After verifcations</p>
                    <NavLink to="/dashboard" className="text-colorPrimary mx-auto">Go to home page</NavLink>
                </div>}
            </div>
        </div >
    )
}

export default CompanyDetails