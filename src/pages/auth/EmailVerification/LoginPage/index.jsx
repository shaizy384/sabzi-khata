import React from "react";
import AuthBanner from "../../AuthBanner";
import EmailVerificationForm from "./EmailVerificationForm";
const EmailVerification = () => {
  return (
    <div className="w-screen  flex h-screen flex-wrap flex-row">
      {/* left Section */}
      <AuthBanner/>
      {/* right Section */}
      <EmailVerificationForm/>
    </div>
  );
};
export default EmailVerification;
