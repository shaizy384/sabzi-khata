import React from "react";
import AuthBanner from "../AuthBanner";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <div className="w-screen flex h-screen flex-wrap flex-row overflow-x-hidden">
      <AuthBanner />
      <SignupForm />
    </div>
  );
};
export default Signup;
