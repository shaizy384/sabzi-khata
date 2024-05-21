import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/auth/LoginPage';
import UpdatePasswordPage from './pages/auth/UpdatePassPage/Index';
import EmailPage from './pages/auth/emailPage/Index';
import Routers from './routes';
import Layout from './components/layout';
import SideBar from './components/layout/SideBar';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <>
        {/* <UpdatePasswordPage/> */}
        {/* <Login/> */}
        {/* <EmailPage/> */}
        <ToastContainer />
        <Routers />
        {/* <Layout/> */}
        {/* <Layout/> */}
      </>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
