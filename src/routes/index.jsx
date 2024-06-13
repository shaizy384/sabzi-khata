import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/auth/LoginPage';
import UpdatePasswordPage from '../pages/auth/UpdatePassPage/Index';
import { PublicRoute } from './PublicRoutes';
import EmailPage from '../pages/auth/emailPage/Index';
import EmailVerification from '../pages/auth/EmailVerification/LoginPage';
import Layout from '../components/layout';
import Dasboard from '../pages/Dashboard';
import Customers from '../pages/Customer/Index';
import CustomerDetails from '../pages/Customer/CustomerDetails';
import Supplier from '../pages/Supplier/Index';
import SupplierDetails from '../pages/Supplier/SupplierDetails';
import AdminRoles from '../pages/AdminRoles';
import EditAdminRole from '../pages/AdminRoles/EditAdminRole';
import Signup from '../pages/auth/Signup';
import Products from '../pages/Products/Index';
import AddSale from '../components/ui/AddSale';
import GenerateReport from '../pages/GenerateReport';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/user/action';
import OnBoardingScreen from '../pages/OnBoardingScreen';

const Routers = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.userReducer.getUser.data);
    const isAuthorized = useSelector((state) => state.authReducer.isAuthenticated);
    const userData = useSelector((state) => state.userReducer.getUser.data);
    console.log("isAuthorized isAuthorized: ", isAuthorized, " :", data);
    useEffect(() => {
        if (data === null && isAuthorized) {
            dispatch(getUser());
        }
    }, [data, isAuthorized]);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/signup"
                        element={<PublicRoute><Signup /></PublicRoute>}
                    />
                    <Route
                        path="/"
                        element={<PublicRoute><Login /></PublicRoute>}
                    />
                    <Route
                        path="/updatepassword"
                        element={<PublicRoute><UpdatePasswordPage /></PublicRoute>}
                    />
                    <Route
                        path="/emailpage"
                        element={<PublicRoute><EmailPage /></PublicRoute>}
                    />
                    <Route
                        path="/emailverification"
                        element={<PublicRoute><EmailVerification /></PublicRoute>}
                    />
                    < Route
                        path="/welcome"
                        element={<Layout><OnBoardingScreen /></Layout>}
                    />
                    {userData?.dashboard === 1 && < Route
                        path="/dashboard"
                        element={<Layout><Dasboard /></Layout>}
                    />}
                    {userData?.customer === 1 && <Route
                        path="/customers"
                        element={<Layout><Customers /></Layout>}
                    />}
                    {userData?.customer === 1 && <Route
                        path="/customers/customerdetails/:id"
                        element={<Layout><CustomerDetails /></Layout>}
                    />}
                    {userData?.customer === 1 && <Route
                        path="customers/addsale/:id"
                        element={<Layout><AddSale /></Layout>}
                    />}
                    {userData?.supplier === 1 && <Route
                        path="suppliers/addpurchase/:id"
                        element={<Layout><AddSale /></Layout>}
                    />}
                    {userData?.supplier === 1 && <Route
                        path="/suppliers"
                        element={<Layout><Supplier /></Layout>}
                    />}
                    {userData?.supplier === 1 && <Route
                        path="/suppliers/supplierdetails/:id"
                        element={<Layout><SupplierDetails /></Layout>}
                    />}
                    {userData?.customer === 1 && <Route
                        path="/addsale"
                        element={<Layout><AddSale /></Layout>}
                    />}
                    {userData?.supplier === 1 && <Route
                        path="/addpurchase"
                        element={<Layout><AddSale /></Layout>}
                    />}
                    {userData?.admin_roles === 1 && <Route
                        path="/adminroles"
                        element={<Layout><AdminRoles /></Layout>}
                    />}
                    {userData?.admin_roles === 1 && <Route
                        path="/adminroles/edit/:id"
                        element={<Layout><EditAdminRole /></Layout>}
                    />}
                    {userData?.admin_roles === 1 && <Route
                        path="/adminroles/add"
                        element={<Layout><EditAdminRole /></Layout>}
                    />}
                    {userData?.product === 1 && < Route
                        path="/products"
                        element={<Layout><Products /></Layout>}
                    />}
                    {userData?.supplier_report === 1 && <Route
                        path="/supplierreport"
                        element={<Layout><GenerateReport /></Layout>}
                    />}
                    {userData?.customer_report === 1 && <Route
                        path="/customerreport"
                        element={<Layout><GenerateReport /></Layout>}
                    />}
                    {/* <Route
                        path="/supplierreport"
                        element={<Layout><SupplierReport /></Layout>}
                    />
                    <Route
                        path="/customerreport"
                        element={<Layout><CustomersReport /></Layout>}
                    /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routers