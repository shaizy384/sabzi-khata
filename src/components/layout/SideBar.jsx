import React, { useState } from "react";
import logo from "../../assets/images/veg-cal-logo1.png";
// import logo from "../../assets/images/sabzi2.png";
// import logo from "../../assets/images/Sabzi_clean.png";veg-cal-logo.png
// import logo from "../../assets/svgs/logo.svg";
import notification from "../../assets/svgs/notification.svg";
import { secondaryColor } from "../../constants/colors";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const SideBar = () => {
  const { t } = useTranslation();
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const userData = useSelector((state) => state.userReducer.getUser.data);
  const userLoading = useSelector((state) => state.userReducer.getUser.loading);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const toggleSettings = () => {
    setSettingsOpen(!isSettingsOpen);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
    setSettingsOpen(false)
  };
  return (
    <>
      <button
        data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:text-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-gray-200"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {isSidebarOpen && (
        <div
          className="fixed top-0 ltr:left-0 rtl:right-0 z-30 w-screen h-screen bg-black opacity-50"
          onClick={closeSidebar}
        ></div>
      )}

      <aside
        id="logo-sidebar"
        className={`fixed top-0 ltr:left-0 rtl:right-0  z-40 w-64 h-screen transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="bg-white h-full px-3 py-4 overflow-y-auto shadow-lg">
          {/* <div className="bg-gray-900 h-full px-3 py-4 overflow-y-auto"> */}
          <NavLink onClick={closeSidebar} to="/" className="flex items-center justify-center pt-5">
            <img src={logo} className="w-32  m-auto" alt="Flowbite Logo" />
          </NavLink>
          <hr className="h-px my-6 bg-colorPrimary w-[80%] mx-auto border-0 opacity-50" />
          <ul className="space-y-2 font-medium">
            {userLoading && <p className="text-gray-500 text-center">Loading...</p>}
            {userData?.dashboard === 1 && <li>
              <NavLink onClick={closeSidebar} to="/dashboard" className={`flex items-center p-2  text-gray-500 rounded-lg hover:text-white hover:bg-colorPrimary group`}>
                <svg
                  className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="ms-3 ">{t("Dashboard")}</span>
              </NavLink>
            </li>}
            {/* <li>
              <NavLink onClick={closeSidebar} to="/ordermanagement" className={`flex items-center p-2  text-gray-500 rounded-lg hover:text-white hover:bg-colorPrimary group`}>
                <svg
                  className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                  <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap ">
                  Order Management
                </span>
              </NavLink>
            </li> */}
            {userData?.customer === 1 && <li>
              <NavLink onClick={closeSidebar} to='/customers' className={`flex items-center p-2  text-gray-500 rounded-lg hover:text-white hover:bg-colorPrimary group`}>
                <svg
                  className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 19"
                >
                  <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                  <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap ">
                  {t("Customer")}
                </span>
              </NavLink>
            </li>}
            {userData?.supplier === 1 && <li>
              <NavLink onClick={closeSidebar} to='/suppliers' className={`flex items-center p-2  text-gray-500 rounded-lg hover:text-white hover:bg-colorPrimary group`}>
                <svg
                  className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap ">
                  {t("Supplier")}
                </span>
              </NavLink>
            </li>}
            {userData?.product === 1 && <li>
              <NavLink onClick={closeSidebar} to='/products' className={`flex items-center p-2  text-gray-500 rounded-lg hover:text-white hover:bg-colorPrimary group`}>
                <svg className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white`} width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.91836 0.062192C2.62065 0.183237 2.55849 0.274838 1.47236 2.15921C0.906396 3.14066 0.418945 3.99124 0.382959 4.04686L0.320801 4.15482H3.5792H6.83759V2.07742V3.38554e-05L4.94995 0.00330544C3.22915 0.00330544 3.04595 0.00984812 2.91836 0.062192Z" fill="currentColor" />
                  <path d="M7.78613 2.07742V4.15482H11.0249C12.8079 4.15482 14.2637 4.14827 14.2637 4.145C14.2637 4.13846 13.7795 3.29442 13.1906 2.27044C12.3858 0.880062 12.0783 0.372983 11.9638 0.261752C11.6923 -0.0065093 11.7512 3.33786e-05 9.64433 3.33786e-05H7.78613V2.07742Z" fill="currentColor" />
                  <path d="M0.00654296 10.508L0.0163574 15.9158L0.101416 16.0957C0.209375 16.3247 0.425293 16.5406 0.654296 16.6486L0.834228 16.7336H7.2954H13.7566L13.9365 16.6486C14.1655 16.5406 14.3814 16.3247 14.4894 16.0957L14.5745 15.9158L14.5843 10.508L14.5908 5.10353H7.2954H0L0.00654296 10.508ZM9.3728 8.76758C9.52001 8.83956 9.65087 9.0293 9.65087 9.17325C9.65087 9.22232 9.63124 9.30738 9.60507 9.36627C9.5789 9.42515 8.97695 10.05 8.22451 10.7992C6.78505 12.2288 6.77197 12.2419 6.52006 12.1732C6.41865 12.147 6.25834 12.0031 5.70219 11.4437C5.11987 10.8581 5.00864 10.7272 4.98901 10.6258C4.92685 10.2954 5.24418 9.99112 5.55825 10.0762C5.64658 10.0991 5.79707 10.2267 6.13403 10.5669C6.38593 10.8188 6.60512 11.0249 6.62475 11.0249C6.64111 11.0249 7.158 10.5244 7.76977 9.9126C8.45024 9.23541 8.92787 8.78394 8.99657 8.7545C9.15033 8.68907 9.21249 8.68907 9.3728 8.76758Z" fill="currentColor" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap ">
                  {t("Products")}
                </span>
              </NavLink>
            </li>}
            {userData?.customer === 1 && <li>
              <NavLink onClick={closeSidebar} to='/addsale' className={`flex items-center p-2  text-gray-500 rounded-lg hover:text-white hover:bg-colorPrimary group`}>
                <svg
                  className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap ">
                {t("Add Sale")}
                </span>
              </NavLink>
            </li>}
            {userData?.supplier === 1 && <li>
              <NavLink onClick={closeSidebar} to='/addpurchase' className={`flex items-center p-2  text-gray-500 rounded-lg hover:text-white hover:bg-colorPrimary group`}>
                <svg
                  className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap ">
                {t("Add Purchase")}
                </span>
              </NavLink>
            </li>}
            {userData?.admin_roles === 1 && <li>
              <NavLink onClick={closeSidebar} to='/adminroles' className={`flex items-center p-2  text-gray-500 rounded-lg hover:text-white hover:bg-colorPrimary group`}>
                <svg className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white`} width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://white.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1455_16722)">
                    <path d="M9 5.30859C7.54618 5.30859 6.36328 6.4915 6.36328 7.94531C6.36328 9.39913 7.54618 10.582 9 10.582C10.4538 10.582 11.6367 9.39913 11.6367 7.94531C11.6367 6.4915 10.4538 5.30859 9 5.30859Z" />
                    <path d="M17.6395 7.44525L16.6887 7.13985C16.4961 6.34061 16.182 5.58253 15.7514 4.87958L16.1835 4.01544C16.285 3.81255 16.2453 3.56741 16.0846 3.40675L14.5932 1.91535C14.432 1.75416 14.1879 1.71552 13.9845 1.81645L13.1199 2.24905C12.4782 1.85716 11.7824 1.56052 11.045 1.36431L10.5264 0.29148C10.4368 0.112781 10.2545 0 10.0547 0H7.94531C7.74548 0 7.5632 0.112781 7.47359 0.29148L6.955 1.36434C6.21752 1.56055 5.52178 1.8572 4.88011 2.24909L4.01544 1.81649C3.8115 1.71401 3.56794 1.75366 3.40675 1.91538L1.91535 3.40675C1.75468 3.56741 1.71503 3.81255 1.81645 4.01544L2.24905 4.88011C1.85716 5.52178 1.56052 6.21752 1.36431 6.955L0.29148 7.47359C0.112781 7.5632 0 7.74548 0 7.94531V10.0547C0 10.2545 0.112781 10.4368 0.29148 10.5264L1.36434 11.045C1.54252 11.7109 1.80773 12.35 2.15536 12.951L1.78766 14.0535C1.72484 14.2431 1.77427 14.4521 1.91538 14.5933L3.40678 16.0847C3.54839 16.2258 3.75645 16.2752 3.9465 16.2124L5.04907 15.8447C5.71187 16.2294 6.41275 16.5121 7.13992 16.6882L7.44532 17.6395C7.51686 17.8548 7.7182 18 7.94531 18H10.0547C10.2818 18 10.4832 17.8548 10.5548 17.6395L10.8602 16.6882C11.5873 16.512 12.2882 16.2293 12.951 15.8446L14.0536 16.2123C14.2436 16.2752 14.4527 16.2257 14.5933 16.0846L16.0847 14.5932C16.2258 14.4521 16.2752 14.243 16.2124 14.0535L15.8447 12.9509C16.2294 12.2881 16.5121 11.5873 16.6882 10.8601L17.6396 10.5547C17.8548 10.4832 18 10.2818 18 10.0547V7.94531C18 7.7182 17.8548 7.51686 17.6395 7.44525ZM9 14.8008C5.80145 14.8008 3.19922 12.1986 3.19922 9C3.19922 5.80145 5.80145 3.19922 9 3.19922C12.1986 3.19922 14.8008 5.80145 14.8008 9C14.8008 12.1986 12.1986 14.8008 9 14.8008Z" />
                    <path d="M11.5648 10.5908C10.8998 11.2356 9.99711 11.6368 9.00012 11.6368C8.00312 11.6368 7.10027 11.2356 6.43536 10.5908C5.99967 11.0216 5.66534 11.5554 5.48291 12.1575C6.35239 13.1251 7.59974 13.7462 9.00012 13.7462C10.4002 13.7462 11.6475 13.1254 12.5169 12.158C12.3346 11.5556 12.0004 11.0216 11.5648 10.5908Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1455_16722">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap ">
                  {t("Subadmin Roles")}
                </span>
              </NavLink>
            </li>}
            {userData?.supplier_report === 1 && <li>
              <NavLink onClick={closeSidebar} to='/supplierreport' className={`flex items-center p-2  text-gray-500 rounded-lg hover:text-white hover:bg-colorPrimary group`}>
                <svg
                  className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap ">
                  {t("Supplier Report")}
                </span>
              </NavLink>
            </li>}
            {userData?.customer_report === 1 && <li>
              <NavLink onClick={closeSidebar} to='/customerreport' className={`flex items-center p-2  text-gray-500 rounded-lg hover:text-white hover:bg-colorPrimary group`}>
                <svg
                  className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap ">
                  {t("Customer Report")}
                </span>
              </NavLink>
            </li>}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
