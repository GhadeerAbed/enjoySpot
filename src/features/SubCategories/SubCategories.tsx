"use client";

import React from "react";
import { CategoryList, SubCategoryTypes } from "./components/page";
import { useSWRHook } from "@/hooks/page";
import { API_SERVICES_URLS } from "@/data/page";

export const SubCategories = ({ name, name1 }: { name?: string; name1?: string }) => {
  const { data: listingTypesResponse } = useSWRHook(API_SERVICES_URLS.GET_ALL_LISTING_TYPES);
  const listingTypes = listingTypesResponse?.isSuccess ? listingTypesResponse.data : [];

  const mainCategory = listingTypes.find((item: { name: string }) => item.name === name);
  const mainId = mainCategory?.id ?? null;


  const { data: subCategoriesResponse } = useSWRHook(
    mainId ? API_SERVICES_URLS.GET_ALL_LISTING_SUB_TYPES(mainId) : null
  );
  const subCategories = subCategoriesResponse?.isSuccess ? subCategoriesResponse.data : [];

  const subCategory = subCategories.find((item: { name: string }) => item.name === name1);
  const subId = subCategory?.id ?? null;



  return (
    <div className="max-w-7xl mx-auto">
      {mainId && <SubCategoryTypes id={mainId} name={name} />}
      {<CategoryList id={mainId} id1={subId} />}
    </div>
  );
};

export default SubCategories;
