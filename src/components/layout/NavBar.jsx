import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';

const NavBar = () => {
  const path = window.location.pathname.split('/').slice(1)[0]
  const navTitle = (path === "dashboard" && "Dashboard") || (path === "ordermanagement" && "Order Management") || (path === "users" && "Users") || (path === "request" && "Request") || (path === "adminroles" && "Admin Roles") || (path === "userappsettings" && "User App Settings") || (path === "providerappsettings" && "Provider App Settings") || (path === "notifications" && "Notifications")

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav className=" shadow-sm flex flex-wrap items-center justify-between p-4 bg-white w-full">
      <h6 className='font-medium text-lg'>{navTitle}</h6>
      <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <span
          type="button"
          className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 cursor-pointer"
          id="user-menu-button"
          aria-expanded={isDropdownOpen}
          onClick={toggleDropdown}
          data-dropdown-placement="bottom"
        >
          <span className="sr-only">Open user menu</span>
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                className="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt="user photo"
              />
              <span className="block text-sm text-gray-900 font-medium ms-2">
                Shahzaib Qasim
              </span>
            </div>
            <div className="ms-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#94A3B8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </span>
        {isDropdownOpen && (
          <div
            className=" absolute z-50 top-24 right-4  sm:top-12 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-md"
            ref={dropdownRef}
          >
            <div className="px-4 py-3" onClick={() => closeDropdown()} >
              <span className="block text-sm text-gray-900 truncate">
                Shahzaib Qasim
              </span>
              <span className="block text-sm text-gray-500 truncate">
                shahzaib@gmail.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <div
                  onClick={() => closeDropdown()}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </div>
              </li>
              <li>
                <div
                  onClick={() => closeDropdown()}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar