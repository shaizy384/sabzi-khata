import React from "react";
import AuthBanner from "../AuthBanner";
import LoginForm from "./LoginForm";
const Login = () => {
  return (
    <div className="w-screen  flex h-screen flex-wrap flex-row">
      {/* left Section */}
      <AuthBanner/>
      {/* right Section */}
      <LoginForm/>
    </div>
  );
};
export default Login;
