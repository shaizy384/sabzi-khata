import React from 'react'
import DashboardCards from './DashboardCards'
import IncomeGraph from './IncomeGraph'
import { useTranslation } from 'react-i18next';
// import { jwtDecode } from "jwt-decode";
// import {sign} from 'jwt-encode';
// import jwt from 'jsonwebtoken';

const Dashboard = () => {
    const { t } = useTranslation();
    // const secretKey = 'secret';
    // const data = {
    //     sub: '1234567890',
    //     name: 'John Doe',
    //     iat: 1516239022
    // };
    // const jwt = jwt.sign(data, secretKey)

    // let token = localStorage.getItem('authToken');
    // token = token.split(" ")[1].split("|")[1]
    // const decoded = jwt.verify(token, secretKey);
    // console.log("token token token: ", jwt, decoded)
    return (
        <>
            <div className="px-4 py-6 rounded-lg bg-gray-50">
                <div className="bg-gray-50 text-gray-90 font-semibold text-2xl ml-2 mb-3 text-colorPrimary">{t("Customers Analytics")}</div>
                <DashboardCards customerType={true} />
                <div className="bg-gray-50 text-gray-90 font-semibold text-2xl ml-2 mb-3 mt-4 text-colorPrimary">{t('Suppliers Analytics')}</div>
                <DashboardCards customerType={false} />
                {/* <IncomeGraph /> */}
            </div>
        </>
    )
}

export default Dashboard