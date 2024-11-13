import React from "react";
import { Login } from "./components/Login/page";
import { Register } from "./components/Register/page";
import ConfirmEmail from "./components/ConfirmEmail/page";
import DeleteAccount from "./components/DeleteAccount/page";
import { NewPassword, OTP} from "./components/page";
const Auth = () => {
  return (
    <div className="flex">
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <ConfirmEmail/>  */}
      {/* <DeleteAccount/> */}
      {/* <NewPassword/>  */}
      <OTP/>
    </div>
  );
};

export default Auth;
