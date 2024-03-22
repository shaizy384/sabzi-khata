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
import Users from '../pages/users/Index';
import CustomerDetails from '../pages/users/CustomerDetails';
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
const Routers = () => {
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
                        path="/users"
                        element={<Layout><Users /></Layout>}
                    />
                    <Route
                        path="/users/userdetails"
                        element={<Layout><CustomerDetails /></Layout>}
                    />
                    <Route
                        path="/request"
                        element={<Layout><ServiceProvider /></Layout>}
                    />
                    <Route
                        path="/addsale"
                        element={<Layout><AddSale /></Layout>}
                    />
                    <Route
                        path="/addpurchase"
                        element={<Layout><AddSale /></Layout>}
                    />
                    <Route
                        path="/serviceprovider"
                        element={<Layout><ServiceProvider /></Layout>}
                    />
                    <Route
                        path="/serviceprovider/serviceproviderdetails"
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
                        path="/adminroles/edit"
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