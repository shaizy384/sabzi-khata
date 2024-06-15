import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/localization/action';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import { logout } from '../../redux/auth/action';
import defaultAvatar from '../../assets/images/default-avatar-icon.png'
import { clearUser } from '../../redux/user/action';
import { useNavigate } from 'react-router';

const NavBar = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userReducer.getUser.data);
  console.log("userData: ", userData);
  const language = useSelector((state) => state.localizationReducer.language);
  const path = window.location.pathname.split('/').slice(1)[0]
  // location.pathname.split("/").includes("addsale")
  const navTitle = (path === "dashboard" && t("Dashboard")) || (path === "suppliers" && "Supplier") || (path === "products" && "Products") || (path === "customers" && "Customer") || (path === "adminroles" && "Subadmin Roles") || (path === "supplierreport" && "Supplier Report") || (path === "customerreport" && "Customer Report") || (path === "addpurchase" && "Add Purchase") || (path === "addsale" && "Add Sale")

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const closeLangDropdown = () => {
    setLangDropdown(false);
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

  useEffect(() => {
    i18n.changeLanguage(language);
    language === "ur" ?
      document.documentElement.setAttribute('dir', 'rtl') :
      document.documentElement.setAttribute('dir', 'ltr')
  }, [language])
  const handleChange = (lang) => {
    console.log("lan: ", language, lang);
    dispatch(setLanguage(lang));
    lang === "en" ?
      document.documentElement.setAttribute('dir', 'ltr') :
      document.documentElement.setAttribute('dir', 'rtl')
  }

  const handleLogout = () => {
    dispatch(logout())
    dispatch(clearUser())
    navigate('/')
  }
  return (
    <nav className=" shadow-sm flex flex-wrap items-center justify-between p-4 bg-white w-full">
      <h6 className='font-medium text-lg'>{navTitle && t(navTitle)}</h6>
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
                src={defaultAvatar}
                // src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt="user photo"
              />
              <span className="block text-sm text-gray-900 font-medium ms-2 capitalize">
                {userData ? userData?.fullName : "Loading..."}
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
            className=" absolute z-50 top-24 ltr:right-4 rtl:left-4 sm:top-12 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-md"
            ref={dropdownRef}
          >
            <div className="px-4 py-3" onClick={() => closeDropdown()} >
              <span className="block text-sm text-gray-900 truncate capitalize">
                {userData?.fullName}
              </span>
              <span className="block text-sm text-gray-500 truncate">
                {userData?.email}
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li onClick={() => setLangDropdown(!langDropdown)}>
                <div
                  // onClick={() => closeDropdown()}
                  className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  <span>{t("Language")}</span>
                  <svg className={`w-[15px] ltr:ml-auto rtl:mr-auto transition ease-in-out delay-150 ${langDropdown && 'rotate-180'}`} width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.357035 0.349028C-0.119012 0.814517 -0.119012 1.569 0.357035 2.03449L8.45668 9.95285C9.88448 11.3487 12.1991 11.3491 13.6274 9.95382L21.6429 2.12375C22.119 1.65838 22.119 0.903779 21.6429 0.438409C21.1669 -0.0269623 20.395 -0.0269623 19.919 0.438409L11.9077 8.27051C11.4315 8.7359 10.6598 8.7359 10.1837 8.27051L2.08098 0.349028C1.60492 -0.116343 0.833093 -0.116343 0.357035 0.349028Z" fill="#A3A3A3" />
                  </svg>
                </div>
              </li>
              {langDropdown && <li className={`${langDropdown ? 'h-[72px transition-all  ease-in-out delay-150  h-auto opacity-100' : 'opacity-0 h-0 '} transition-all  ease-in-out delay-150`}>
                <ul aria-labelledby="user-menu-button">
                  <li>
                    <div
                      onClick={() => handleChange("en")}
                      className={`flex gap-2 items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer ${language === 'en' ? "text-colorPrimary font-medium ltr:pl-2.5 rtl:pr-2.5" : " text-gray-700 ltr:pl-8 rtl:pr-8"}`}
                    >
                      {language === 'en' && <div className="flex-none rounded-full bg-green-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-colorPrimary" />
                      </div>}
                      <span>{t("English")}</span>
                    </div>
                  </li>
                  {/* <li>
                    <div
                      onClick={() => handleChange("ur+en")}
                      className={`flex gap-2 items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer ${language === 'ur+en' ? "text-colorPrimary font-medium ltr:pl-2.5 rtl:pr-2.5" : " text-gray-700 ltr:pl-8 rtl:pr-8"}`}
                    >
                      {language === 'ur+en' && <div className="flex-none rounded-full bg-green-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-colorPrimary" />
                      </div>}
                      <span>{t("Urdu + English")}</span>
                    </div>
                  </li> */}
                  <li>
                    <div
                      onClick={() => handleChange("ur")}
                      className={`flex gap-2 items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer ${language === 'ur' ? "text-colorPrimary font-medium ltr:pl-2.5 rtl:pr-2.5" : " text-gray-700 ltr:pl-8 rtl:pr-8"}`}
                    >
                      {language === 'ur' && <div className="flex-none rounded-full bg-green-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-colorPrimary" />
                      </div>}
                      <span>{t("Urdu")}</span>
                    </div>
                  </li>
                </ul>
              </li>}
              <li>
                <div
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  {t("Sign out")}
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