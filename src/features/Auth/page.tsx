import React from "react";
import { Login } from "./components/Login/page";
import { Register } from "./components/Register/page";
const Auth = () => {
  return (
    <div className="flex">
      {/* <Login /> */}
      <Register />
    </div>
  );
};

export default Auth;
