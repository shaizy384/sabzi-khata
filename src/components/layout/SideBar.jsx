import React, { useState } from "react";
import logo from "../../assets/images/Sabzi_clean.png";
// import logo from "../../assets/svgs/logo.svg";
import notification from "../../assets/svgs/notification.svg";
import { secondaryColor } from "../../constants/colors";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
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
          className="fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-50"
          onClick={closeSidebar}
        ></div>
      )}

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="bg-gray-900 h-full px-3 py-4 overflow-y-auto">
          <NavLink onClick={closeSidebar} to="/" class="flex items-center justify-center pt-5">
            <img src={logo} class="w-32  m-auto" alt="Flowbite Logo" />
          </NavLink>
          <hr class="h-px my-8 bg-secondary border-0" />
          <ul class="space-y-2 font-medium">
            <li>
              <NavLink onClick={closeSidebar} to="/dashboard" className={`flex items-center p-2  text-gray-500 rounded-lg hover:text-yellowPrimary hover:bg-[#3B3B3B] group`}>
                <svg
                  className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-yellowPrimary`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="ms-3 ">Dashboard</span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink onClick={closeSidebar} to="/ordermanagement" className={`flex items-center p-2  text-gray-500 rounded-lg hover:text-yellowPrimary hover:bg-${secondaryColor} group`}>
                <svg
                  className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-yellowPrimary`}
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
            <li>
              <NavLink onClick={closeSidebar} to='/users' className={`flex items-center p-2  text-gray-500 rounded-lg hover:text-yellowPrimary hover:bg-${secondaryColor} group`}>
                <svg
                  className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-yellowPrimary`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 19"
                >
                  <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                  <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap ">
                  Customer
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={closeSidebar} to='/serviceprovider' className={`flex items-center p-2  text-gray-500 rounded-lg hover:text-yellowPrimary hover:bg-${secondaryColor} group`}>
                <svg
                  className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-yellowPrimary`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap ">
                  Supplier
                </span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink onClick={closeSidebar} to='/request' className={`flex items-center p-2  text-gray-500 rounded-lg hover:text-yellowPrimary hover:bg-${secondaryColor} group`}>
                <svg className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-yellowPrimary`} width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1757_6410)">
                  <path d="M15.7781 0H8.99992C7.77275 0 6.77808 0.992889 6.77808 2.22185V12.389C6.77808 12.8204 7.27274 13.0726 7.62183 12.8109L9.74054 11.2218H15.7781C17.0052 11.2218 17.9999 10.229 17.9999 9V2.22185C17.9999 0.994675 17.007 0 15.7781 0ZM11.8616 8.39767H9.56476C9.27348 8.39767 9.03741 8.16161 9.03741 7.87033C9.03741 7.57906 9.27348 7.34299 9.56476 7.34299H11.8616C12.1529 7.34299 12.3889 7.57906 12.3889 7.87033C12.3889 8.16161 12.1529 8.39767 11.8616 8.39767ZM15.2132 6.13834H9.56476C9.27348 6.13834 9.03741 5.90213 9.03741 5.61099C9.03741 5.31972 9.27348 5.08365 9.56476 5.08365H15.2132C15.5044 5.08365 15.7406 5.31972 15.7406 5.61099C15.7406 5.90213 15.5045 6.13834 15.2132 6.13834ZM15.2132 3.87886H9.56476C9.27348 3.87886 9.03741 3.64279 9.03741 3.35152C9.03741 3.06038 9.27348 2.82417 9.56476 2.82417H15.2132C15.5044 2.82417 15.7406 3.06038 15.7406 3.35152C15.7406 3.64279 15.5045 3.87886 15.2132 3.87886Z" />
                  <path d="M5.84424 10.9656C5.84424 12.3423 4.72816 13.4584 3.35144 13.4584C1.97472 13.4584 0.858643 12.3423 0.858643 10.9656C0.858643 9.58873 1.97472 8.47266 3.35144 8.47266C4.72816 8.47266 5.84424 9.58873 5.84424 10.9656Z" />
                  <path d="M3.35152 13.458C1.5006 13.458 0 14.9586 0 16.8095V17.4727C0 17.764 0.236069 18 0.527344 18H6.17583C6.46696 18 6.70317 17.764 6.70317 17.4727V16.8095C6.70317 14.9586 5.20258 13.458 3.35152 13.458Z" />
                </g><defs><clipPath id="clip0_1757_6410"><rect width="18" height="18" /></clipPath></defs>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap ">
                  Request
                </span>
              </NavLink>
            </li> */}
            <li>
              <NavLink onClick={closeSidebar} to='/adminroles' className={`flex items-center p-2  text-gray-500 rounded-lg hover:text-yellowPrimary hover:bg-${secondaryColor} group`}>
                <svg className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-yellowPrimary`} width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                  Admin Roles
                </span>
              </NavLink>
            </li>
            {/* <li>
              <button onClick={toggleSettings} className={`flex items-center justify-between w-full p-2  ${isSettingsOpen ? "text-yellowPrimary" : "text-gray-500"} rounded-lg hover:text-yellowPrimary hover:bg-${secondaryColor} group`}>
                <div className="flex">
                  <svg className={`flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 ${isSettingsOpen ? "text-yellowPrimary" : "text-gray-500"} group-hover:text-yellowPrimary`} width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1757_6381)">
                    <path d="M4.34473 9.92213L4.34476 9.92227C4.35591 9.91102 4.35517 9.91169 4.34473 9.92213Z" />
                    <path d="M17.6009 7.43399L16.7058 7.21877C16.5112 6.36914 16.176 5.56175 15.7074 4.81102L16.1611 4.04947C16.2847 3.84197 16.2512 3.57728 16.0807 3.40684L14.5942 1.92026C14.4237 1.75035 14.1596 1.71636 13.9515 1.83993L13.19 2.29355C12.4392 1.82499 11.6319 1.48977 10.7822 1.29515L10.567 0.40007C10.5083 0.165789 10.2977 0.000976562 10.0557 0.000976562H7.9466C7.70458 0.000976562 7.49399 0.165754 7.43528 0.40007L7.22006 1.29515C6.37044 1.48977 5.56304 1.82499 4.81231 2.29355L4.05076 1.83993C3.84326 1.71632 3.57857 1.74982 3.40813 1.92026L1.92148 3.40681C1.75104 3.57725 1.71758 3.8419 1.84115 4.04943L2.29477 4.81098C1.82621 5.56171 1.49099 6.36911 1.29637 7.21873L0.401291 7.43396C0.16701 7.49267 0.00219727 7.70325 0.00219727 7.94527V10.0544C0.00219727 10.2964 0.166975 10.5075 0.401783 10.5657L1.29686 10.7809C1.42662 11.3439 1.62192 11.8848 1.87272 12.4035C2.25997 12.0147 4.20488 10.0615 4.34466 9.92186C4.33777 9.88635 4.26243 9.21096 4.26043 9.07941C4.21557 6.39252 6.37975 4.25481 9.00315 4.25481C11.6445 4.25481 13.7508 6.38465 13.7408 9.01627C13.7295 11.45 11.913 13.5219 9.37598 13.7114C9.26622 13.7199 8.77003 13.7931 8.0784 13.6567L5.60371 16.1314C6.12051 16.3807 6.65935 16.5747 7.22002 16.704L7.43525 17.5996C7.49396 17.8339 7.70455 17.9987 7.94656 17.9987H10.0557C10.2977 17.9987 10.5083 17.8339 10.567 17.5996L10.7822 16.7045C11.6318 16.5099 12.4392 16.1747 13.1899 15.7061L13.9515 16.1597C14.158 16.2833 14.4232 16.2494 14.5941 16.0794L16.0807 14.5928C16.2511 14.4224 16.2846 14.1577 16.161 13.9502L15.7074 13.1886C16.1765 12.4379 16.5112 11.6305 16.7058 10.7804L17.6004 10.5657C17.8352 10.5075 17.9999 10.2964 17.9999 10.0544V7.94527C17.9999 7.70329 17.8352 7.49267 17.6009 7.43399Z" />
                    <path d="M12.569 8.03553C12.5227 7.85399 12.3825 7.71118 12.2018 7.66168C12.0211 7.61211 11.8281 7.66376 11.6956 7.79622L10.4924 8.99952C10.0811 9.41081 9.41248 9.41081 9.00115 8.99952C8.59024 8.58861 8.59024 7.91924 9.00115 7.50829L10.2049 6.30454C10.3374 6.17208 10.3885 5.97872 10.339 5.79812C10.2894 5.61752 10.1468 5.47714 9.96527 5.43102C7.74038 4.8656 5.73816 6.31485 5.37095 8.31619C5.25304 8.97529 5.30556 9.6318 5.52128 10.2363C5.22125 10.5364 0.587169 15.1704 0.462611 15.295C-0.155823 15.9135 -0.155823 16.9196 0.472384 17.5478C1.09472 18.1377 2.04784 18.1625 2.70558 17.538L7.76428 12.4793C8.57439 12.7684 9.47787 12.7626 10.362 12.4506C11.9551 11.8884 13.0701 10.0019 12.569 8.03553Z" />
                  </g><defs><clipPath id="clip0_1757_6381"><rect width="18" height="18" /></clipPath></defs>
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap ">
                    Settings
                  </span>
                </div>
                <svg class={`w-4 h-4 mr-2 text-gray-500 ${isSettingsOpen ? "text-yellowPrimary" : "text-gray-500"} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                </svg>
              </button>
              {isSettingsOpen &&
                <ul>
                  <li className={` ml-5 flex items-center  text-gray-500 rounded-lg hover:text-yellowPrimary hover:bg-${secondaryColor} group`}>
                    <NavLink to='/userappsettings' className={`flex items-center p-2  text-gray-500 rounded-lg hover:text-yellowPrimary hover:bg-${secondaryColor} group`}>
                      <span className="font-bold  ">-</span>
                      <span className="flex-1 ms-3 whitespace-nowrap ">
                        User App Settings
                      </span>
                    </NavLink>
                  </li>
                  <li className={` ml-5 flex items-center  text-gray-500 rounded-lg hover:text-yellowPrimary hover:bg-${secondaryColor} group`}>
                    <NavLink to='/providerappsettings' className={`flex items-center p-2  text-gray-500 rounded-lg hover:text-yellowPrimary hover:bg-${secondaryColor} group`}>
                      <span className="font-bold  ">-</span>
                      <span className="flex-1 ms-3 whitespace-nowrap ">
                        Provider App Settings
                      </span>
                    </NavLink>
                  </li>
                </ul>
              }
            </li> */}
            <li>
              <NavLink onClick={closeSidebar} to='/notifications' className={`flex items-center p-2  text-gray-500 rounded-lg hover:text-yellowPrimary hover:bg-${secondaryColor} group`}>
                <svg className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-yellowPrimary' width="18" height="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1757_5757)">
                  <path d="M9.00013 18C10.0791 18 11.0083 17.3482 11.416 16.418H6.58423C6.99194 17.3482 7.92115 18 9.00013 18Z" />
                  <path d="M14.4493 8.7139V7.55859C14.4493 5.10391 12.8176 3.0234 10.5821 2.34387V1.58203C10.5821 0.709699 9.87237 0 9.00004 0C8.12771 0 7.41801 0.709699 7.41801 1.58203V2.34387C5.18242 3.0234 3.55082 5.10388 3.55082 7.55859V8.7139C3.55082 10.8701 2.72894 12.9146 1.23659 14.4709C1.09034 14.6235 1.04924 14.8485 1.13214 15.0428C1.21504 15.2372 1.40594 15.3633 1.61723 15.3633H16.3829C16.5941 15.3633 16.785 15.2372 16.8679 15.0428C16.9508 14.8485 16.9097 14.6235 16.7635 14.4709C15.2711 12.9146 14.4493 10.8701 14.4493 8.7139ZM9.52738 2.13497C9.35382 2.11823 9.17793 2.10938 9.00004 2.10938C8.82215 2.10938 8.64626 2.11823 8.4727 2.13497V1.58203C8.4727 1.29125 8.70926 1.05469 9.00004 1.05469C9.29082 1.05469 9.52738 1.29125 9.52738 1.58203V2.13497Z" />
                  <path d="M15.8555 7.55835C15.8555 7.84959 16.0916 8.0857 16.3828 8.0857C16.6741 8.0857 16.9102 7.84959 16.9102 7.55835C16.9102 5.44546 16.0874 3.45903 14.5933 1.96499C14.3874 1.75908 14.0535 1.75905 13.8476 1.96499C13.6416 2.17094 13.6416 2.50482 13.8476 2.71076C15.1424 4.0056 15.8555 5.72717 15.8555 7.55835Z" />
                  <path d="M1.61719 8.08567C1.90842 8.08567 2.14453 7.84956 2.14453 7.55833C2.14453 5.72718 2.85764 4.00562 4.15245 2.71078C4.35839 2.50483 4.35839 2.17095 4.15245 1.96501C3.94654 1.75906 3.61262 1.75906 3.40668 1.96501C1.91264 3.45904 1.08984 5.44544 1.08984 7.55833C1.08984 7.84956 1.32595 8.08567 1.61719 8.08567Z" />
                </g><defs><clipPath id="clip0_1757_5757"><rect width="18" height="18" /></clipPath></defs>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap ">
                  Notification
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
