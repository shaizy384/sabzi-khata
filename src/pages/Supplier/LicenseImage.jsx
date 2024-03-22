import React from 'react'
import LicenseImg from '../../assets/images/License.png'
const LicenseImage = ({label}) => {
  return (
    <div>
        <div className='mb-2 font-semibold'>
        {label}
        </div>
        <img src={LicenseImg} alt="" />
        
    </div>
  )
}

export default LicenseImage