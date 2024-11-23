import { SubCategories } from "@/features/page";
import React from "react";

const SubCategoryPage = async ({
  params,
}: {
  params: { secondaryname: string , mainname: string };
}) => {
  const {secondaryname , mainname} = await params
  return (
    <div>
      <SubCategories name1={secondaryname} name={mainname}/>
    </div>
  );
};

export default SubCategoryPage;
