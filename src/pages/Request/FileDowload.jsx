import React from 'react';
import pdfIcon from '../../assets/images/pdf-svgrepo-com.png'
const FileDownload = () => {
  const handleDownload = () => {
    // Implement your file download logic here
    alert('Download logic goes here!');
  };

  return (
    <div className=''>
      <label htmlFor="" className='font-semibold'>Vehicle Registration</label>
      <div className="w-11/12 flex items-center border p-3 rounded-2xl my-2">
        <label htmlFor="fileInput" className="cursor-pointer">
          <img className='w-8 mr-6' src={pdfIcon} alt="" />
        </label>
        <input type="file" id="fileInput" className="hidden" />
        <div className="flex-grow text-center  truncate">
          423794vehicleregistration.pdf
        </div>
        <div
          className="cursor-pointer"
          onClick={handleDownload}
        >
          <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
      </div>
    </div>
  );
};

export default FileDownload;
