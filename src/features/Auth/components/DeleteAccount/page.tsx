import React from "react";
import Button from "../../../../components/Button/page";

export const DeleteAccount = () => {
  return (
    <div className="w-full my-10 flex items-center justify-center ">
      <div className="h-[341px] w-[500px] bg-white rounded-lg shadow-lg ">
        <div className="p-[40px] space-y-10 ">
          <h1 className="text-4xl  font-bold font-Kalnia">Delete Account</h1>
          <p className="text-sm  text-gray-500 ">
            Delete your Account Means delete all Your Data from the DataBase
            Deleting all your Previous trips , and Canceling your upcoming trips
          </p>
          <Button className="w-full max-w-md mt-10 bg-red-500 text-white">
            {" "}
            Delete My Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
