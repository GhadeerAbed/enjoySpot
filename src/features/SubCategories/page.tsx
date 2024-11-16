import React from "react";
import { CategoryList, SubCategoryTypes } from "./components/page";

export const SubCategory = ({id , name ,id1}:{id?:any ; name?:string ;id1?:any}) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <SubCategoryTypes id={id} name={name} />
        <CategoryList id={id} id1={id1} />
      </div>
    </div>
  );
};

export default SubCategory;
