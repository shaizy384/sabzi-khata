import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/auth/LoginPage';
import UpdatePasswordPage from '../pages/auth/UpdatePassPage/Index';
import { PublicRoute } from './PublicRoutes';
import EmailPage from '../pages/auth/emailPage/Index';
import EmailVerification from '../pages/auth/EmailVerification/LoginPage';
import Layout from '../components/layout';
import Dasboard from '../pages/Dashboard';
import OrderManagement from '../pages/OrderManagement/Index';
import OrderDetails from '../pages/OrderManagement/OrderDetails';
import Customers from '../pages/Customer/Index';
import CustomerDetails from '../pages/Customer/CustomerDetails';
import ServiceProvider from '../pages/Supplier/Index';
import SupplierDetails from '../pages/Supplier/SupplierDetails';
import AdminRoles from '../pages/AdminRoles';
import EditAdminRole from '../pages/AdminRoles/EditAdminRole';
import UserAppSettings from '../pages/appSettings/Index';
import Notification from '../pages/Notification';
import BlockedUsers from '../pages/appSettings/BlockedUsers';
import Signup from '../pages/auth/Signup';
import Products from '../pages/Products/Index';
import AddSale from '../components/ui/AddSale';
import GenerateReport from '../pages/GenerateReport';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/user/action';

const Routers = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.userReducer.getUser.data);
    const isAuthorized = useSelector((state) => state.authReducer.isAuthenticated);
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
                    <Route
                        path="/dashboard"
                        element={<Layout><Dasboard /></Layout>}
                    />
                    <Route
                        path="/ordermanagement"
                        element={<Layout><OrderManagement /></Layout>}
                    />
                    <Route
                        path="/ordermanagement/orderdetails"
                        element={<Layout><OrderDetails /></Layout>}
                    />
                    <Route
                        path="/customers"
                        element={<Layout><Customers /></Layout>}
                    />
                    <Route
                        path="/customers/customerdetails/:id"
                        element={<Layout><CustomerDetails /></Layout>}
                    />
                    <Route
                        path="/request"
                        element={<Layout><ServiceProvider /></Layout>}
                    />
                    <Route
                        path="customers/addsale"
                        element={<Layout><AddSale /></Layout>}
                    />
                    <Route
                        path="suppliers/addpurchase"
                        element={<Layout><AddSale /></Layout>}
                    />
                    <Route
                        path="/suppliers"
                        element={<Layout><ServiceProvider /></Layout>}
                    />
                    <Route
                        path="/suppliers/supplierdetails/:id"
                        element={<Layout><SupplierDetails /></Layout>}
                    />
                    {/* <Route
                        path="/serviceprovider/serviceproviderdetails/vehicledetails"
                        element={<Layout><VehicleDetails /></Layout>}
                    /> */}
                    {/* <Route
                        path="/users/userdetails/addresses"
                        element={<Layout><Addresses /></Layout>}
                    /> */}
                    {/* <Route
                        path="/users/userdetails/receiver"
                        element={<Layout><Receiver /></Layout>}
                    /> */}
                    <Route
                        path="/adminroles"
                        element={<Layout><AdminRoles /></Layout>}
                    />
                    <Route
                        path="/adminroles/edit/:id"
                        element={<Layout><EditAdminRole /></Layout>}
                    />
                    <Route
                        path="/adminroles/add"
                        element={<Layout><EditAdminRole /></Layout>}
                    />
                    <Route
                        path="/products"
                        element={<Layout><Products /></Layout>}
                    />
                    <Route
                        path="/supplierreport"
                        element={<Layout><GenerateReport /></Layout>}
                    />
                    <Route
                        path="/customerreport"
                        element={<Layout><GenerateReport /></Layout>}
                    />
                    {/* <Route
                        path="/supplierreport"
                        element={<Layout><SupplierReport /></Layout>}
                    />
                    <Route
                        path="/customerreport"
                        element={<Layout><CustomersReport /></Layout>}
                    /> */}
                    <Route
                        path="/userappsettings"
                        element={<Layout><UserAppSettings /></Layout>}
                    />
                    <Route
                        path="/providerappsettings"
                        element={<Layout><UserAppSettings /></Layout>}
                    />
                    <Route
                        path="/userappsettings/blockedusers"
                        element={<Layout><BlockedUsers /></Layout>}
                    />
                    <Route
                        path="/notifications"
                        element={<Layout><Notification /></Layout>}
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routers