import React from "react";
import { Category } from "./components/page";
import BestDeals from "./components/BestDeals/page";
import Details from "./components/YachtsDetails/page";
import ExculsivePackages from "./components/ExclusivePackages/page";
import DubaiBirds from "./components/DubaiBirds/page";

export const SubCategory = () => {
  return (
    <div>
      {/* <Category/> */}
       {/* <BestDeals/>*/}
      {/* <ExculsivePackages/> */}
      <DubaiBirds/>
    </div>
  );
};

export default SubCategory;
