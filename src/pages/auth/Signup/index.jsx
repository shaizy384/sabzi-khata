import React, { useState } from "react";
import AuthBanner from "../AuthBanner";
import SignupForm from "./SignupForm";
// import CompanyDetails from "./CompanyDetails";
import { useSelector } from "react-redux";

const Signup = () => {
  const [formType, setFormType] = useState("credentials");
  const [data, setData] = useState({ company_name: "", phone: "", email: "", company_located: "", password: "", company_logo: "", no_of_employees: "", no_of_vehicle: "", registration_no: "", registration_certificate: "" });
  // const isAuthenticated = useSelector(state => state.companyAuthReducer.isAuthenticated)
  // console.log(isAuthenticated);
  return (
    <div className="w-screen flex h-screen flex-wrap flex-row overflow-x-hidden">
      {/* {formType === "credentials" ? <> */}
        <AuthBanner />
        <SignupForm data={data} setData={setData} formType={formType} setFormType={setFormType} />
      {/* </> :
        <CompanyDetails data={data} setData={setData} formType={formType} setFormType={setFormType} />
      } */}
    </div>
  );
};
export default Signup;
