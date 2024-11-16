"use client";
import { API_SERVICES_URLS } from "@/data/page";
import SubCategories from "@/features/SubCategories/SubCategories";
import { useSWRHook } from "@/hooks/page";
import React from "react";

const MainCategoryPage = ({ params }: { params: { mainname: string } }) => {
  const { data: listingTypesResponse } = useSWRHook(API_SERVICES_URLS.GET_ALL_LISTING_TYPES);
  const listingTypes = listingTypesResponse?.isSuccess ? listingTypesResponse.data : [];
  const mainCategory = listingTypes.find(
    (item: { name: string }) => item.name === params.mainname
  );
  const mainId = mainCategory ? mainCategory.id : null;
  console.log(mainId);


  return (
    <div>
      <SubCategories id={mainId} name={params.mainname} />
    </div>
  );
};

export default MainCategoryPage;
